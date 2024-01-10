import { createContext } from 'react';

const defaultUser = {
  //   name: '홍길동',
  name: '',
  setName: () => {}, // 이름 변경 함수
};

export const UserContext = createContext(defaultUser);
