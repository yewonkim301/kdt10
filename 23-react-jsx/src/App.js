import './App.css';

function App() {
  const name = 'gildong';
  const animal = '강아지';
  const styles = {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: '40px',
  };
  const a = 8;
  const b = 5;
  const title = 'Hello World';
  // 이렇게 주석 동일하게 작동
  return (
    <div className="App">
      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. javascript 표현식 사용
            - {}로 감싸면 js 표현식 사용 가능
            - {}에서 삼항 연산자 사용 가능 (if문 안된다)
      */}
      <div>{name} 안녕하세요!</div>
      <div>{name === 'gildong' ? 'gildong 입니다' : '잘못 아셨네요'}</div>

      {/* 3. style 속성 (인라인)
            - 리액트에서 돔 요소에 스타일 적용시 문자열 X -> 객체 사용
            - 스타일 속성 이름 중에서 하이픈 (-) 포함시 camelCase 사용
      */}
      <div
        style={{
          backgroundColor: 'blue',
          color: 'white',
          fontSize: '48px',
        }}
      >
        스타일 적용
      </div>
      <div style={styles}>스타일 적용2</div>
      {/* 4. className 사용
            - class 속성이 아닌 className 속성 사용!

          5. 종료 태그가 없는 태그의 사용
            - 기존에 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - <input> -> <input></input> or <input />
            - <br> -> <br></br> or <br />

          6. 주석
            - // : jsx 외부 주석 (return 밖)
            - jsx 내부 주석 {}
      */}
      {/* 실습 */}
      {/* 1번 */}
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}은 {animal}입니다.
      </h2>
      {/* 2번 */}
      <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>
      {/* 3번 */}
      <div>{a > b && 'a가 b보다 큽니다'}</div>
      {/* 해설 
        - 단축형가 &&
        - true && '문자열'
        -> 앞에가 참이면, 뒤에 있는 '문자열'이 출력됨
        => { a > b && 'a가 b보다 큽니다.'}
      */}
      {/* 4번 */}
      <div className="title">{title}</div>
      <div>
        아이디 : <input type="text" />
      </div>
      <div>
        비밀번호 : <input type="password" />
      </div>
    </div>
  );
}

export default App;
