import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handlerNewUserClick = () => {
    navigate("/register");
  };
  return (
    <div className="gap-5 pb-5 p-10 justify-between">
      {" "}
      <form>
        <div>
          <label htmlFor="username" className=" text-lg">
            User Name
          </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handlerNewUserClick}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
