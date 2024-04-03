import { Link, NavLink } from "react-router-dom";
import defaultProfile from "../../assets/user.png";

const Nav = () => {
  const navLink = (
    <>
      <li className="text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="mt-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end ">
          <div className="w-12">
            <img className="w-full" src={defaultProfile} alt="" />
          </div>
          <Link to="/login" className="btn bg-gray-900 text-white px-6 ml-5 text-lg">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
