import React, { Component } from 'react';

class RefClass2 extends Component {
  myInput = React.createRef();
  handleFocus = () => {
    // ref를 설정한 DOM에 접근하기 위해서는 this.myInput.current 이용
    console.log(this.myInput.current); // input 요소
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        {' '}
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>handleFocus</button>
      </>
    );
  }
}

export default RefClass2;
