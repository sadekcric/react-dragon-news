import { useContext } from "react";
import Nav from "../Components/Shared/Nav";
import { AuthContext } from "../Routs/AuthProvider";

const Registration = () => {
  const { register } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    register(email, password)
      .then()
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center min-h-[calc(100vh-140px)]">
        <div className="w-full border-2 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register your account</h1>
          <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            {/*Proto url */}
            <div className="space-y-1 text-sm">
              <label htmlFor="photo" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                required
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter Your Photo URL"
                className="bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            {/* Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-600">
                Your Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            {/* Password */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Your Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your password"
                className="bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600 bg-gray-800 text-white">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
