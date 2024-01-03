import book from './book.jpg';

function BookComponent(props) {
  const { title, author, price, type } = props;
  return (
    <div className="container">
      <h1 className="title">이번주 베스트셀러</h1>
      <img src={book} alt="" />
      <h2>{title}</h2>
      <div className="content">저자: {author}</div>
      <div className="content">판매가: {price}원</div>
      <div className="content">구분: {type}</div>
    </div>
  );
}

export default BookComponent;
