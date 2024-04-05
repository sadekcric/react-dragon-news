import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Log in google, gitHub */}
      <div className="mb-10">
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

      {/* Social Media Pages */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-5">Find Us On</h2>

        <div>
          <div>
            <a href="" className="text-lg font-semibold flex items-center gap-2 border-2 rounded-t-lg px-3 py-3 ">
              <div className="rounded-full bg-slate-100 px-3 inline-block py-3 text-blue-800">
                <FaFacebookF />
              </div>
              <span className="text-xl"> Facebook</span>
            </a>

            <a href="" className="text-lg font-semibold flex items-center gap-2 border-x-2  px-3 py-3 ">
              <div className="rounded-full bg-slate-100 px-3 inline-block py-3 text-blue-500">
                <FaTwitter />
              </div>
              <span className="text-xl"> Twitter</span>
            </a>

            <a href="" className="text-lg font-semibold flex items-center gap-2 border-2 rounded-b-lg px-3 py-3 ">
              <div className="rounded-full bg-slate-100 px-3 inline-block py-3 text-orange-500">
                <FaInstagram />
              </div>
              <span className="text-xl"> Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Q- zone */}
      <div className="bg-gray-100 px-3 py-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">Q-Zone</h2>
        </div>

        <div className="space-y-3">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
