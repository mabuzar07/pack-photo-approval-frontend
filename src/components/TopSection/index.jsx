import RefreshIcon from "../../assets/svg/RefreshIcon"
const TopSection = () => {
  return (
    <section className="w-full flex justify-between">
      <h1 className="font-bold text-[32px] leading-[100%] tracking-[-2%]">
        Pack Approvals
      </h1>
      <div className=" flex justify-end items-start">
        <span className="mr-[10px!important] font-normal text-sm leading-[100%] tracking-[-2%]">
          Last updated: Feb 20, 2025 14:08 PM
        </span>
        <button className="flex justify-between items-center cursor-pointer">
          <RefreshIcon />
          <span className="font-bold text-sm leading-[100%] tracking-[-2%] ml-[4px!important]">
            Refresh
          </span>
        </button>
      </div>
    </section>
  );
};
export default TopSection;
