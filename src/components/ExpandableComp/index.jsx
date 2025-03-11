import AmountIcon from "../../assets/svg/AmountIcon";
import TimeIcon from "../../assets/svg/TimeIcon";
import UserIcon from "../../assets/svg/UserIcon";
import AddressIcon from "../../assets/svg/AddressIcon";
import PhotoIcon from "../../assets/svg/PhotoIcon";
import BoxIcon from "../../assets/svg/BoxIcon";
import { useEffect, useState } from "react";

const ExpandableComp = ({ record }) => {
  const [address, setAddress] = useState(null);
  useEffect(() => {
    if (record?.shippingAddress) {
      let tempAddress = "";
      if (record.shippingAddress?.zip) {
        tempAddress = record.shippingAddress.zip;
      }
      if (record.shippingAddress?.lineOne) {
        tempAddress = tempAddress + ` ${record.shippingAddress.lineOne}`;
      }
      if (record.shippingAddress?.city) {
        tempAddress = tempAddress + ` ${record.shippingAddress.city}`;
      }
      if (record.shippingAddress?.state) {
        tempAddress = tempAddress + ` ${record.shippingAddress.state}`;
      }
      if (tempAddress) {
        setAddress(tempAddress);
      }
    }
  }, [record]);
  return (
    <>
      <div
        className="w-[100%] bg-[white]"
        style={{ margin: "auto !important" }}
      >
        <div className="flex justify-between items-start w-full mx-auto">
          <div className="w-[57%] max-h-[608px] mt-[7px!important]">
            <img
              src="./order_img_lg.png"
              alt="Order Image"
              className="rounded"
            />
          </div>
          <div
            className="w-[42%] max-h-[608px] overflow-y-auto custom-scrollbar"
            //   style={{ border: "1px solid #CECECE" }}
          >
            <div className="flex justify-between items-start flex-wrap">
              {record.lineItems?.map((prd) => {
                return (
                  <div
                    className="rounded-xl pt-[10px!important] w-[49%] my-[7px!important]"
                    style={{ border: "1px solid #CECECE" }}
                  >
                    <div
                      className="w-[93%] h-[200px] bg-cover bg-center rounded-xl"
                      style={{
                        backgroundImage: `url(${prd.imageURL})`,
                        border: "1px solid #CECECE",
                        margin: "auto",
                      }}
                    >
                      {/* Optional: Content inside the div */}
                    </div>

                    <div className="px-[8px] pt-[10px] pb-[10px]">
                      <div className="flex justify-between items-center">
                        <span>SKU</span>
                        <span>{prd.SKU}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Size & Type</span>
                        <span className="font-bold">
                          {prd.size} {prd.type}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Quantity</span>
                        <span className="font-bold">{prd.qty}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="w-full bg-[#F7F7F7] flex justify-evenly items-start flex-wrap rounded-xl my-[15px!important]"
          style={{ border: "1px solid #CECECE" }}
        >
          {/*  */}
          <div
            className="w-[47%] flex justify-start items-center py-[10px!important]"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <div
              className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
              style={{ borderRadius: "100px" }}
            >
              <UserIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                Packed by
              </div>
              <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                {record.packedBy}
              </span>
            </div>
          </div>
          <div
            className="w-[47%] flex justify-start items-center py-[10px!important]"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <div
              className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
              style={{ borderRadius: "100px" }}
            >
              <AmountIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                Total Amount
              </div>
              <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                ${record.total?.toFixed(2)}
              </span>
            </div>
          </div>
          <div
            className="w-[47%] flex justify-start items-center py-[10px!important]"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <div
              className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
              style={{ borderRadius: "100px" }}
            >
              <TimeIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                Packing Time
              </div>
              <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                {record.total}
              </span>
            </div>
          </div>
          <div
            className="w-[47%] flex justify-start items-center py-[10px!important]"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <div
              className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
              style={{ borderRadius: "100px" }}
            >
              <AddressIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                Address
              </div>
              <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                {address}
              </span>
            </div>
          </div>
          <div
            className="w-[47%] flex justify-start items-center py-[10px!important]"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <div
              className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
              style={{ borderRadius: "100px" }}
            >
              <PhotoIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                Photo Taken
              </div>
              <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                {/* {record.total} */}
              </span>
            </div>
          </div>
          <div
            className="w-[47%] flex justify-start items-center py-[10px!important]"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <div
              className="p-[10px] rounded-[100px] bg-[white] mr-[14px!important]"
              style={{ borderRadius: "100px" }}
            >
              <BoxIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="font-medium text-sm leading-[100%] tracking-[-2%] text-[#666666] mb-[10px!important]">
                Shipping Selected
              </div>
              <span className="font-semibold text-base leading-[100%] tracking-[-2%] text-[#000000]">
                {/* {record.total} */}
              </span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="button-container">
        <div className="w-full flex justify-around items-center">
          <button
            className="approve-button w-[46%] bg-[#ff4641] h-[44] gap-2 px-4 py-3.5 rounded-[100px] text-[white] font-bold text-base leading-[100%] tracking-[-2%] text-center cursor-pointer"
            style={{ border: "1px solid #ff4641" }}
          >
            Approve
          </button>
          <button
            className="deny-button w-[46%] bg-[white] h-[44] gap-2 px-4 py-3.5 rounded-[100px] text-[black] font-bold text-base leading-[100%] tracking-[-2%] text-center cursor-pointer"
            style={{ border: "1px solid black" }}
          >
            Deny
          </button>
        </div>
      </div>
    </>
  );
};
export default ExpandableComp;
