import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marque = () => {
  return (
    <div className="flex items-center px-6 py-3 bg-slate-100 rounded-lg mt-10">
      <button className="btn btn-error text-lg text-white">Latest:</button>

      <Marquee className="text-lg" pauseOnHover={true}>
        <Link className="mr-5 hover:underline hover:text-error" to="/">
          I can be a React component, multiple React components, or just some text...
        </Link>
        <Link className="mr-5 hover:underline hover:text-error" to="/">
          I can be a React component, multiple React components, or just some text...
        </Link>
        <Link className="mr-5 hover:underline hover:text-error" to="/">
          I can be a React component, multiple React components, or just some text...
        </Link>
      </Marquee>
    </div>
  );
};

export default Marque;
