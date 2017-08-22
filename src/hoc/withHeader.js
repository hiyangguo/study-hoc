import React, { Component } from 'react';
import getDisplayName from '../util/getDisplayName';

/**
 * 最基本的 HOC
 * @param title
 */
export default title => WrappedComponent => class HOC extends Component {
  static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

  render() {
    return (
      <fieldset>
        <legend>{title || '默认标题'}</legend>
        <WrappedComponent {...this.props} />
      </fieldset>
    );
  }
};
