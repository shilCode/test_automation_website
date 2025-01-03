import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handlerNewUserClick = () => {
    navigate("/register");
  };
  return (
      <div className="login-container">
        <form>
        <div className="username-container">
          <label htmlFor="username">User Name:</label>
          <input className="input-container" type="text" id="username" name="username" />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password:</label>
          <input className="input-container2" type="password" id="password" name="password" />
        </div>
        <div className="button-container">
        <button type="submit">Login</button>
        <button type="button" onClick={handlerNewUserClick}>
          New User
        </button>
        </div>
      </form>
      </div>
    
  );
};

export default Login;

export default Login;
