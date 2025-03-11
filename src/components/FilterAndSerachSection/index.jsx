import DownIcon from "../../assets/svg/DownIcon";
import UpIcon from "../../assets/svg/UpIcon";
import BtnGroup from "../BtnGroup";
import SearchBar from "../SearchBar";

const FilterAndSerachSection = ({
  getData,
  loading,
  data,
  handleSearching,
  handleSort,
  newest,
}) => {
  return (
    <section className="flex justify-between items-center">
      <BtnGroup loading={loading} getData={getData} data={data} />
      <div className="flex justify-end items-center w-full">
        <div className="mr-[30px!important]">
          <input type="text" />
          <SearchBar loading={loading} handleSearching={handleSearching} />
        </div>

        <button
          className="flex items-center min-w-[122px]"
          style={{
            border: "1px solid #000000",
            borderRadius: "100px",
            padding: "7.5px 22px",
          }}
          loading={loading}
          onClick={() => {
            handleSort(!newest);
          }}
        >
          <span className="font-bold">{newest ? "Newest" : "Oldest"}</span>
          <span className="ml-[8px!important] mt-[2px!important]">
            {newest ? <DownIcon /> : <UpIcon />}
          </span>
        </button>
      </div>
    </section>
  );
};
export default FilterAndSerachSection;
