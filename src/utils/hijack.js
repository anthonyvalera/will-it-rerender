import { LoggerContext } from "./log";

const getDisplayName = component => component.type ? component.type.displayName || component.type.name : component.displayName || component.name;

const memoized = (map, key, value) => {
  if (map.has(key)) {
    return map.get(key);
  }
  let ret = typeof value === 'function' ? value() : value
  map.set(key, ret);
  return ret;
}

const createFunctionalComponent = (component, displayName, React, isMemo) => {

  let HijackedFunctionalComponent = function (props, context) {
    const log = React.useContext(LoggerContext);
    log(displayName)
    return isMemo ? component.type(props, context) : component(props, context);
  }

  HijackedFunctionalComponent.displayName = displayName
  HijackedFunctionalComponent.contextTypes = component.contextTypes

  return HijackedFunctionalComponent;
}

export const hijack = (React, opts = {}) => {
  let _createReactElement = React.createElement;

  const memo = new Map();

  React.createElement = function(type, ...rest) {
    let component = type;

    const displayName = getDisplayName(component)

    if (typeof component === 'function') {
      component = memoized(memo, component, () => createFunctionalComponent(component, displayName, React));
    }

    if (typeof component.type === 'function') {
      component = memoized(memo, component, React.memo(createFunctionalComponent(component, displayName, React, true)))
    }

    return _createReactElement.apply(React, [component, ...rest]);
  };

  React.__WHY_DID_YOU_UPDATE_RESTORE_FN__ = () => {
    React.createElement = _createReactElement
    delete React.__WHY_DID_YOU_UPDATE_RESTORE_FN__
  }

  return React
}

export default hijack