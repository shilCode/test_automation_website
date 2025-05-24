import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Login = () => {
  const navigate = useNavigate();
  const handlerNewUserClick = () => {
    navigate("/register");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:text-zinc-100">
      <form className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 space-y-6 dark:text-zinc-100">
        <div>
          <label htmlFor="username" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200 mb-1">User Name:</label>
          <input className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100" type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200 mb-1">Password:</label>
          <input className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100" type="password" id="password" name="password" />
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <Button type="submit" className="w-full">Login</Button>
          <Button type="button" variant="secondary" className="w-full" onClick={handlerNewUserClick}>
            New User
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

