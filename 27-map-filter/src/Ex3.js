import { useState } from 'react';

function Ex3() {
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [data, setData] = useState([]);
  const [inputFind, setInputFind] = useState('');
  const [findData, setFindData] = useState([]);
  const addData = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      if (inputName.trim().length === 0 || inputTitle.trim().length === 0)
        return;
      const newData = data.concat({
        id: data.length + 1,
        name: inputName,
        title: inputTitle,
      });
      setData(newData);
      setInputName('');
      setInputTitle('');
    }
  };
  const find = () => {
    // filter 에서는 return 값이 항상 필요 -> 해설 참고
    // console.log(data.includes(inputFind));
    // console.log(data[0].name.includes(inputFind));
    let newFindData;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.includes(inputFind)) {
        newFindData = data[i];
        setFindData(newFindData);
      }
    }

    console.log(findData);
    setInputFind('');
  };
  return (
    <>
      <div>
        <span>
          작성자 :{' '}
          <input
            type="text"
            placeholder="작성자"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </span>
        <span>
          제목 :{' '}
          <input
            type="text"
            placeholder="제목"
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
        </span>
        <button onKeyDown={addData}>작성</button>
      </div>
      <br />
      <div>
        <select
          name="name"
          id="name"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <option disabled selected>
            작성자
          </option>
          {data.map((value) => (
            <option key={value.id}>{value.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="검색어"
          onChange={(e) => {
            setInputFind(e.target.value);
          }}
        />
        <button onClick={find}>검색</button>
        <button>전체</button>
      </div>
      <br />
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (value) =>
              value.id !== 0 && (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.title}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <br />
      <br />
      {findData.length >= 1 ? (
        <>
          <p>검색 결과</p>
          <table border={1} cellSpacing={0}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {findData.map(
                (value) =>
                  value.id !== 0 && (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.title}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </>
  );
}

export default Ex3;
