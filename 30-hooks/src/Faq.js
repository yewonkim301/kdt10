import useToggle from './hooks/useToggle';

function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle(); // useToggle 함수의 반환값인 배열 구조분해
  //   console.log(useToggle());
  return (
    <>
      <h1>custom hook (useToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트에서 커스텀 훅 만들 수 있나?
      </div>
      {isFaqOpen && <div>A. 가능합니다.</div>}
    </>
  );
}

export default Faq;
