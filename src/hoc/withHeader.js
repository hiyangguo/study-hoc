import React, { Component } from 'react';
import getDisplayName from '../util/getDisplayName';
import hoistNonReactStatic from 'hoist-non-react-statics';

/**
 * 最基本的 HOC
 * @param title
 */
export default (title = '默认标题') => (WrappedComponent) => {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    render() {
      return (
        <fieldset>
          <legend>{title}</legend>
          <WrappedComponent {...this.props} />
        </fieldset>
      );
    }
  }

  // 拷贝静态方法
  hoistNonReactStatic(HOC, WrappedComponent);

  return HOC;
};
