import React, { useState, useEffect } from 'react';
import FetchPostList from './FetchPostList';

function Ex2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FetchPostList({ setPosts });
  }, []);

  return (
    <>
      <h2>fetch postList</h2>
      {posts.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((value) => (
          <div key={value.id}>
            <span>
              No.{value.id}. {value.title}
            </span>
            <br />
            <span>userId : {value.userId}</span>
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

export default Ex2;
