const PrimaryButton = ({
  text = "",
  textColor,
  showPostNumber = false,
  postNumber = 0,
  postNumberColor,
  postNumberBackgroundColor,
  postNumberMargin,
  icon,
  backgroundColor,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  padding,
  margin

}) => {
  return (
    <>
      <button
        className="flex justify-center items-center"
        style={{
          backgroundColor:backgroundColor??"",
          borderWidth: borderWidth ?? 0,
          borderColor: borderColor ?? "",
          borderStyle: borderStyle ?? "",
          borderRadius: borderRadius ?? 0,
          padding:padding??"",
          margin:margin??""
        }}
      >
        {text && <span style={{ color: textColor ?? "" }}>{text}</span>}
        {icon && (
          <span className="ml-[4px!important] mt-[2px!important]">{icon}</span>
        )}
        {showPostNumber && <span>{postNumber}</span>}
      </button>
    </>
  );
};
export default PrimaryButton;
