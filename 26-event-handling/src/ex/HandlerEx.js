import { Component } from 'react';

class HandlerEx extends Component {
  state = {
    msg: 'Hello World!',
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>이벤트 핸들링 실습1</h1>
        <h2>{msg}</h2>
        <button onClick={() => this.setState({ msg: 'Goodbye World!' })}>
          클릭!
        </button>
      </div>
    );
  }
}

export default HandlerEx;
