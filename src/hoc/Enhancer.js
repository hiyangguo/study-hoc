import getDisplayName from '../util/getDisplayName';

/**
 * 基于反向继承的方式
 * @param WrappedComponent
 * @return {Enhancer}
 */
export default function (WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    static displayName = `InheritanceHOC(${getDisplayName(WrappedComponent)})`;

    componentWillMount() {
      // 可以方便地得到state，做一些更深入的修改。
      this.setState({
        innerText: '我被Inheritance修改了值'
      });
    }

    render() {
      return super.render();
    }
  };
}
