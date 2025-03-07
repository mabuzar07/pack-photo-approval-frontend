import DownIcon from "../../../assets/svg/DownIcon";
import MenuIcon from "../../../assets/svg/MenuIcon";

const Header = () => {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ borderBottom: "1px solid #CECECE" }}
    >
      <div className="w-[95%] max-w-[1366px] flex justify-between items-center py-[11px]">

      <div>
        <MenuIcon />
      </div>
      <img src="./logo.png" alt="Logo" />
      <div className="flex items-center justify-between">
        <img src="./person.png" alt="Profile" />
        <span className="px-[11px] font-semibold text-sm leading-[100%] tracking-[-2%] text-black">Joshua Stephens</span>
        <div className="pt-1">
          <DownIcon />
        </div>
      </div>
      </div>
    </div>
  );
};
export default Header;
