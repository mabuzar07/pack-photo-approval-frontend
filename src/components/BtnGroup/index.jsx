import { useEffect, useState } from "react";

const BtnGroup = ({ loading, getData, data }) => {
  const [activeBtn, setActiveBtn] = useState("All Orders");
  const [count, setCount] = useState({});
  const [btnInfo,setBtnInfo] = useState([
    {
      text: "All Orders",
      value: "",
      showPostNumber: true,
    },
    {
      text: "Pending",
      value: "pending",
      showPostNumber: true,
    },
    {
      text: "Approved",
      value: "approved",
      showPostNumber: true,
    },
    {
      text: "Rejected",
      value: "rejected",
      showPostNumber: true,
    },
    {
      text: "Packed",
      value: "packed",
      showPostNumber: true,
    },
  ]);
  useEffect(() => {
    const tempCount = {};
    if(Object.keys(count)?.length===0){
      data?.forEach((item) => {
        if (item.orderStatus) {
          if (!tempCount[item.orderStatus]) {
            tempCount[item.orderStatus] = 1;
          } else if (tempCount[item.orderStatus]) {
            tempCount[item.orderStatus] = tempCount[item.orderStatus] + 1;
          }
        }
      });
      console.log('tempCount',tempCount)
      if (tempCount) {
        setCount({ ...tempCount });
      } else {
        setCount({});
      }
    }
  }, [data]);
  return (
    <div className="flex justify-between min-w-[680px]">
      {btnInfo.map((btn) => {
        return (
          <>
            <button
              className="flex justify-center items-center cursor-pointer"
              style={{
                backgroundColor:
                  btn?.text === activeBtn ? "#FF4641" : "#FFFFFF",
                borderWidth: "1px",
                borderColor: btn?.text === activeBtn ? "#FF4641" : "#CECECE",
                borderStyle: btn?.text === activeBtn ? "solid" : "",
                borderRadius: "100px",
                padding: "8px 12px",
                margin: "0 5px 0 0",
              }}
              onClick={() => {
                setActiveBtn(btn?.text);
                getData(btn?.value);
              }}
              disabled={loading}
            >
              {btn?.text && (
                <span
                  className={`${
                    btn?.text === activeBtn ? "font-bold" : "font-medium"
                  } text-base text-center mx-[5px!important]`}
                  style={{
                    color: btn?.text === activeBtn ? "#FFFFFF" : "#000000",
                  }}
                >
                  {btn?.text}
                </span>
              )}
              {btn?.icon && (
                <span className="ml-[4px!important] mt-[2px!important]">
                  {btn?.icon}
                </span>
              )}
              <span
                className="font-bold text-sm text-center flex justify-center items-center pb-[0px!important]"
                style={{
                  borderRadius: "100px",
                  width: "25px",
                  height: "25px",
                  color: btn?.text === activeBtn ? "#000000" : "#FFFFFF",
                  background: btn?.text === activeBtn ? "#FFFFFF" : "#A0A0A0",
                }}
              >
                {btn?.text == "All Orders" ? (
                  <>{data?.length}</>
                ) : (
                  <>{count && count[btn?.value] ? count[btn.value] : 0}</>
                )}
              </span>
            </button>
          </>
        );
      })}
    </div>
  );
};
export default BtnGroup;
