import DownIcon from "../../assets/svg/DownIcon";
import BtnGroup from "../BtnGroup";
import SearchBar from "../SearchBar";

const FilterAndSerachSection = () => {
  return (
    <section className="flex justify-between items-center">
      <BtnGroup />
      <div className="flex justify-end items-center w-full">
        <div className="mr-[30px!important]">
        <input type="text" />
        <SearchBar />
        </div>
      
      <button
        className="flex items-center"
        style={{
          border: "1px solid #000000",
          borderRadius: "100px",
          padding: "7.5px 22px",
        }}
      >
        <span className="font-bold">Newest</span>
        <span className="ml-[8px!important] mt-[2px!important]">
          <DownIcon />
        </span>
      </button>
      </div>
    </section>
  );
};
export default FilterAndSerachSection;
