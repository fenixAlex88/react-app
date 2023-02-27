import { useState } from 'react';

const Login = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    alert(`Username: ${userData.username}\nPassword: ${userData.password}`);
  };

  const handleInputData = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username
          <input
            type="text"
            value={userData.username}
            onChange={(e) => {
              handleInputData(e, 'username');
            }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={userData.password}
            onChange={(e) => {
              handleInputData(e, 'password');
            }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
