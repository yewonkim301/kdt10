import React, { useState, useEffect } from 'react';
import FetchPostList from './FetchPostList';
import './styles/ExComponent.scss';

function StyleEx3() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FetchPostList({ setPosts });
  }, []);

  return (
    <>
      <h2 className="title">PostList</h2>
      <div className="container">
        {posts.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          posts.map((value) => (
            <div className="content" key={value.id}>
              <div className="c-tbox">
                <span className="c-id">No.{value.id}</span>
                <span className="c-title"> : {value.title}</span>
              </div>
              <br />
              <div className="c-tbox2">
                <span className="c-content">{value.body}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default StyleEx3;
