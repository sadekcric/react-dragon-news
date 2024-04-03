import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-5">Login With</h2>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-2 px-3 py-3 border-2 border-black rounded-md font-semibold hover:text-blue-700 hover:border-blue-600">
            <FaGoogle />
            <span>Login with Google</span>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-3 border-2 border-black rounded-md font-semibold hover:text-blue-700 hover:border-blue-600">
            <FaGithub />
            <span>Login with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
