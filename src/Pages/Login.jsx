import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../Components/Shared/Nav";
import { useContext } from "react";
import { AuthContext } from "../Routs/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Nav />

      <div className="flex items-center justify-center min-h-[calc(100vh-140px)]">
        <div className="w-full border-2 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Login your account</h1>
          <form onSubmit={handleForm} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-600">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full bg-slate-100 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full bg-slate-100 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <div className="flex justify-end text-xs dark:text-gray-600">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600 bg-gray-800 text-white">
              Sign in
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Don't have an account?
            <Link to="/register" rel="noopener noreferrer" className="underline dark:text-gray-800 text-red-700 ml-1 font-semibold">
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
