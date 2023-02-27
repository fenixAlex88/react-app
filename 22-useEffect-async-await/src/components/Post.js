import './Post.css';

const Post = ({ id, userId, title, body }) => {
  return (
    <div className='post'>
      <big>{id}</big>
      <h1>{title}</h1>
      <p>{body}</p>
      <h4>User ID: {userId}</h4>
    </div>
  );
};

export default Post;
