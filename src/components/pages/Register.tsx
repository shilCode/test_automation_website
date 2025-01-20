const Register = () => {
  return (
    <div className="gap-5 pb-5 p-10 justify-between ">
      <form className="login-container">
        <div className="username-container">
          <label htmlFor="username">User Name:</label>
          <input className="input-container" type="text" id="username" name="username" />
        </div>
        <div  className="password-container">
          <label htmlFor="password">Password:</label>
          <input className="input-container" type="password" id="password" name="password" />
        </div>
        <div  className="email-container">
          <label htmlFor="email">Email:</label>
          <input className="input-container" type="email" id="email" name="email" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
