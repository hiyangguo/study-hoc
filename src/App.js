/** Libs **/
import React, { Component } from 'react';
import { compose, withProps } from 'recompact';

/** Components **/
import Demo from './component/Demo';

/** HOC **/
import withHeader from './hoc/withHeader';
import GenerateId from './hoc/GenerateId';
import Inheritance from './hoc/Inheritance';

/** Utils **/

/** Constants **/

const WithHeaderDemo = withHeader('高阶组件添加标题')(Demo);
const PropsBorkerDemo = GenerateId(Demo);
const InheritanceDemo = Inheritance(Demo);

const ComposeDemo = compose(withProps({ className: 'test-class' }), withHeader('组合多个高阶组件'), Inheritance)(Demo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <WithHeaderDemo />
        <PropsBorkerDemo />
        <InheritanceDemo />
        <ComposeDemo />
      </div>
    );
  }
}

export default App;
