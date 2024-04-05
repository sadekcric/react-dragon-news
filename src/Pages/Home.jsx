import { useLoaderData } from "react-router-dom";
import Marque from "../Components/Marque";
import Header from "../Components/Shared/Header";
import LeftSideNav from "../Components/Shared/LeftSideNav";
import Nav from "../Components/Shared/Nav";
import RightSideNav from "../Components/Shared/RightSideNav";
import BodyNews from "../Components/BodyNews";
import { AuthContext } from "../Routs/AuthProvider";
import { useContext } from "react";

const Home = () => {
  const { data } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <Marque />

      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-24 ">
        <div>
          <LeftSideNav />
        </div>

        <div className="md:col-span-2 ">
          <h2 className="text-2xl font-semibold mb-3">Dragon News Home</h2>
          {data.map((mNews) => (
            <BodyNews key={mNews._id} mNews={mNews} />
          ))}
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
