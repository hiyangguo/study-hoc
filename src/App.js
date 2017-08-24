/** Libs **/
import React, { Component } from 'react';
import { compose, withProps } from 'recompact';

/** Components **/
import Demo from './component/Demo';

/** HOC **/
import withHeader from './hoc/withHeader';
import GenerateId from './hoc/GenerateId';
import Enhancer from './hoc/Enhancer';

/** Utils **/

/** Constants **/

const WithHeaderDemo = withHeader('高阶组件添加标题')(Demo);
const PropsBorkerDemo = GenerateId(Demo);
const EnhancereDemo = Enhancer(Demo);

const ComposeDemo = compose(withProps({ className: 'test-class' }), withHeader('组合多个高阶组件'), Enhancer)(Demo);

//验证静态属性是否存在
console.log(typeof WithHeaderDemo.getDisplayName === 'undefined');

class App extends Component {
  render() {
    return (
      <div className="App">
        <WithHeaderDemo
          getRef={(ref) => {
            // 该回调函数被作为常规的props属性传递
            this.headerDemo = ref;
          }}
        />
        <PropsBorkerDemo />
        <EnhancereDemo />
        <ComposeDemo />
      </div>
    );
  }
}

export default App;
