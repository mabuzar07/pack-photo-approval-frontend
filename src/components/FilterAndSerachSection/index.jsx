import DownIcon from "../../assets/svg/DownIcon";
import BtnGroup from "../BtnGroup";
import SearchBar from "../SearchBar";

const FilterAndSerachSection = () => {
  return (
    <section className="flex justify-between items-center">
      <BtnGroup />
      <div>
        <input type="text" />
        <SearchBar />
      </div>
      <button
        className="flex items-center"
        style={{
          border: "1px solid #000000",
          borderRadius: "100px",
          padding: "10px 16px",
        }}
      >
        <span className="font-bold">Newest</span>
        <span className="ml-[8px!important] mt-[3px!important]">
          <DownIcon />
        </span>
      </button>
    </section>
  );
};
export default FilterAndSerachSection;
