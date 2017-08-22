import React, { Component } from 'react';
import getDisplayName from '../util/getDisplayName';

/**
 * 基于属性代理的方式
 * @param WrappedComponent
 * @return {HOC}
 */
export default function GenerateId(WrappedComponent) {
  return class HOC extends Component {
    static displayName = `PropsBorkerHOC(${getDisplayName(WrappedComponent)})`;

    render() {
      const newProps = {
        id: Math.random().toString(36).substring(2).toUpperCase()
      };
      // 透传props，并且传递新的newProps
      return (
        <div>
          <WrappedComponent {...this.props} {...newProps} />
        </div>
      );
    }
  };
}
