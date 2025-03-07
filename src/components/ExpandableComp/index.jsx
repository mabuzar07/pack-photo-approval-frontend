import UserIcon from "../../assets/svg/UserIcon";

const ExpandableComp = () => {
  const properties = [
    { heading: "Packed By", text: "Joshua S.", icon: <UserIcon/> },
    { heading: "Total Amount", text: "177", icon: <UserIcon /> },
    { heading: "Packing Time", text: "5h 13m", icon: <UserIcon /> },
    {
      heading: "Address",
      text: "6340 14 Mile Rd, Warren, MI",
      icon: <UserIcon />,
    },
    {
      heading: "Photo Taken",
      text: "Feb 20, 2025 14:08 PM",
      icon: <UserIcon />,
    },
    {
      heading: "Shipping Seletected",
      text: "Next business day shipping",
      icon: <UserIcon />,
    },
  ];
  const products = [
    {
      img: "./product_1.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
    {
      img: "./product_2.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
    {
      img: "./product_1.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
    {
      img: "./product_2.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
    {
      img: "./product_1.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
    {
      img: "./product_2.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
    {
      img: "./product_1.png",
      sku: "SB-143801",
      size_and_type: "5” X 5”, Magnet",
      quantity: 100,
    },
  ];
  return (
    <div className="w-[98%]" style={{ margin: "auto !important" }}>
      <div className="flex justify-between items-start w-full mx-auto">
        <div className="w-[57%] max-h-[608px] mt-[7px!important]">
          <img src="./order_img_lg.png" alt="Order Image" className="rounded" />
        </div>
        <div
          className="w-[42%] max-h-[608px] overflow-y-auto custom-scrollbar"
          //   style={{ border: "1px solid #CECECE" }}
        >
          <div className="flex justify-between items-start flex-wrap">
            {products?.map((prd) => {
              return (
                <div
                  className="rounded-xl pt-[10px!important] w-[49%] my-[7px!important]"
                  style={{ border: "1px solid #CECECE" }}
                >
                  <div
                    className="w-[93%] h-[200px] bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: `url(${prd.img})`,
                      border: "1px solid #CECECE",
                      margin: "auto",
                    }}
                  >
                    {/* Optional: Content inside the div */}
                  </div>

                  <div className="px-[8px] pt-[10px] pb-[10px]">
                    <div className="flex justify-between items-center">
                      <span>SKU</span>
                      <span>{prd.sku}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Size & Type</span>
                      <span>{prd.size_and_type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Quantity</span>
                      <span>{prd.quantity}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="w-full bg-[#F7F7F7] flex justify-evenly items-start flex-wrap rounded-xl"
        style={{ border: "1px solid #CECECE" }}
      >
        {properties?.map((item) => {
          return (
            <div
              className="w-[47%] flex justify-start items-center py-[10px!important]"
              style={{ borderBottom: "1px solid #E4E4E4" }}
            >
              <div
                className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
                style={{ borderRadius: "100px" }}
              >
                {item.icon}
              </div>
              <div className="flex flex-col justify-between h-full">
                <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                  {item.heading}
                </div>
                <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                  {item.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="w-full my-[10px!impotant]"
        style={{ border: "1px solid black" }}
      >
        <div className="w-full p-[10px!important] flex justify-around items-center">
          <button
            className="w-[46%] bg-[#ff4641] h-[44] gap-2 px-4 py-3.5 rounded-[100px] text-[white] font-bold text-base leading-[100%] tracking-[-2%] text-center cursor-pointer"
            style={{ border: "1px solid #ff4641" }}
          >
            Approve
          </button>
          <button
            className="w-[46%] bg-[white] h-[44] gap-2 px-4 py-3.5 rounded-[100px] text-[black] font-bold text-base leading-[100%] tracking-[-2%] text-center cursor-pointer"
            style={{ border: "1px solid black" }}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExpandableComp;
