import Marque from "../Components/Marque";
import Header from "../Components/Shared/Header";
import LeftSideNav from "../Components/Shared/LeftSideNav";
import Nav from "../Components/Shared/Nav";
import RightSideNav from "../Components/Shared/RightSideNav";

const Home = () => {
  return (
    <div className="font-poppins max-w-7xl mx-auto p-3">
      <Header />
      <Marque />

      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-24 ">
        <div className="border-2">
          <LeftSideNav />
        </div>

        <div className="md:col-span-2 border-2">
          <h2 className="text-3xl"> News coming soon... </h2>
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
