import { useState } from "react";

const BtnGroup = () => {
  const [activeBtn, setActiveBtn] = useState("All Orders");
  const upperButton = [
    {
      text: "All Orders",
      showPostNumber: true,
      postNumber: 2,
    },
    {
      text: "Pending",
      showPostNumber: true,
      postNumber: 2,
    },
    {
      text: "Approved",
      showPostNumber: true,
      postNumber: 0,
    },
    {
      text: "Rejected",
      showPostNumber: true,
      postNumber: 0,
    },
  ];
  return (
    <div className="flex justify-between min-w-[535px]">
      {upperButton.map((btn) => {
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
                padding: "8px 10px",
                margin: "0 5px 0 0",
              }}
              onClick={() => {
                setActiveBtn(btn?.text);
              }}
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
              {btn?.showPostNumber && (
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
                  {btn?.postNumber}
                </span>
              )}
            </button>
          </>
        );
      })}
    </div>
  );
};
export default BtnGroup;
