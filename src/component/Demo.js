import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Demo extends Component {
  static propTypes = {
    getRef: PropTypes.func
  }

  static getDisplayName() {
    return 'Demo';
  }

  constructor(props) {
    super(props);
    this.state = {
      innerText: '我是一个普通组件'
    };
  }

  render() {
    const { getRef, ...props } = this.props;
    return (
      <div ref={getRef} {...props}>
        {this.state.innerText}
      </div>
    );
  }
}

export default Demo;
