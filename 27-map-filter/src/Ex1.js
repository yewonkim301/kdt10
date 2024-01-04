import { useState } from 'react';

function Ex1() {
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
  const addData = () => {
    const newData = data.concat({
      id: data.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setData(newData);
    setInputName('');
    setInputEmail('');
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
      />
      <button onClick={addData}>등록</button>
      <ol>
        {data.map((value) => (
          <li key={value.id}>
            {value.name}: {value.email}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Ex1;
