import { Component } from 'react';

class ClassBind extends Component {
  state = {
    name: 'codingon',
  };
  // # 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용 (자동으로 bind)
  printConsole = () => {
    console.log('this', this);
    console.log('state', this.state);
  };

  // # 클래스 컴포넌트에서 이벤트 쓰기 - bind 사용 ( render안에서 bind )
  printConsole2 = () => {
    console.log('this', this);
    console.log('state', this.state);
  };

  // # 인자 전달한느 경우
  printConsole3 = (msg) => {
    console.log('msg', msg);
    console.log('this', this);
    console.log('state', this.state);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>PrintConsole(인자X)</button>
        <button onClick={this.printConsole2.bind(this)}>
          PrintConsole2(인자X)
        </button>
        <button onClick={() => this.printConsole3('안녕!')}>
          PrintConsole3(인자O)
        </button>
      </div>
    );
  }
}

export default ClassBind;
