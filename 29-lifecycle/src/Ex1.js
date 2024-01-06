import { useState } from 'react';
import PostList from './PostList';

function Ex1() {
  const [postState, setPostState] = useState('');
  return (
    <>
      <h2>postList</h2>
      <PostList setPostState={setPostState} />
      {postState.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        postState.map((value) => (
          <div key={value.id}>
            <span>
              No.{value.id}. {value.title}
            </span>
            <br />
            <span>{value.body}</span>
            <br />
            <br />
          </div>
        ))
      )}
    </>
  );
}

export default Ex1;
