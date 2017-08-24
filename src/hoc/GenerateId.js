import React, { Component, createElement } from 'react';
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

      return createElement(WrappedComponent, {
        ...this.props,
        ...newProps
      });
    }
  };
}
