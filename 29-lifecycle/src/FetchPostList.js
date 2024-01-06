async function FetchPostList({ setPosts }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  const post = data.map((postData) => {
    return {
      userId: postData.userId,
      id: postData.id,
      title: postData.title,
      body: postData.body,
    };
  });
  setPosts(post);

  return null;
}

export default FetchPostList;
