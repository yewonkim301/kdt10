import { useState } from 'react';
const Disappear = () => {
  const [msg, setMsg] = useState('사라져라');
  const [display, setDisplay] = useState('');
  const change = (e, msg) => {
    console.log(e);
    if (msg === '사라져라') {
      setMsg('보여라');
      setDisplay('none');
    } else {
      setMsg('사라져라');
      setDisplay('');
    }
  };
  return (
    <div>
      <button onClick={(e) => change(e, msg)}>{msg}</button>
      <h1 style={{ display: display }}>안녕하세요</h1>
    </div>
  );
};

export default Disappear;
