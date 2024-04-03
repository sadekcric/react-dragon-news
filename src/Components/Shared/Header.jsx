import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <img src={logo} alt="" />
      </div>
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
