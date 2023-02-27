import { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{(async () => {
    try {
      const res = await fetch(API_URL);
      const posts = await res.json();
      setPosts(posts);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  })()}, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
};

export default Posts;
