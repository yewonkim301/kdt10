import { useState } from 'react';

function Ex2() {
  const [data, setData] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gamil.com',
    },
  ]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const addData = (e) => {
    // bugFix: IME 문제 해결 (한글 마지막 한글자가 더 나옴)
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      const newData = data.concat({
        id: data.length + 1,
        name: inputName,
        email: inputEmail,
      });
      setData(newData);
      setInputName('');
      setInputEmail('');
    }
  };
  const remove = (id) => {
    // id: 삭제할 요소의 id
    const result = data.filter((info) => {
      return info.id !== id;
    });
    setData(result);
  };
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="email"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={addData}
      />
      <ol>
        {data.map((value) => (
          <li key={value.id} onDoubleClick={() => remove(value.id)}>
            {value.name}: {value.email}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Ex2;
