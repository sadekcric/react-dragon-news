import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import Nav from "./Shared/Nav";
import RightSideNav from "./Shared/RightSideNav";
import { useContext } from "react";
import { AuthContext } from "../Routs/AuthProvider";

const NewsDetails = () => {
  const { data } = useContext(AuthContext);
  const { id } = useParams();

  const singleId = data.find((d) => d._id === id);

  return (
    <div>
      <Header />
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-3">Dragon News</h2>
          <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-4">
              <div className="space-y-2">
                <img src={singleId?.image_url} alt="" className="block w-full rounded-md dark:bg-gray-500   object-center" />
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-2xl font-semibold dark:text-violet-600">{singleId?.title}</h3>
                </a>
                <p className="leading-snug dark:text-gray-600">{singleId?.details}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
