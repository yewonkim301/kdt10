import { Component } from 'react';

class ClassComponent2 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

ClassComponent2.defaultProps = {
  text: '이건 기본 text props입니다.',
};

export default ClassComponent2;
