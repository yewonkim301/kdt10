import { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입
  // {children}  -> props 안에 기본적으로 있는 children (-> props.children )

  // defaultUser로 설정한 값 (name, setName)
  // 이름 변경할 수 있게 useState 사용
  const [name, setName] = useState('홍길동');

  return (
    <>
      <UserContext.Provider value={{ name: name, setName: setName }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider;
