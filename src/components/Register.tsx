const Register = () => {
  return (
    <div className="gap-5 pb-5 p-10 justify-between">
      <form>
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;