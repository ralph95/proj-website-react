const Container = ({
  children,
  twoColumn = false,
  twoColumn4060 = false, // ✅ NEW PROP
  centerVertically = false,
  centerBoth = false,
  height,
  noPadding = false,
  noMargin = false,
  noPaddingBottom = false,
  minHeight = 500,
}) => {
  let layoutClasses = "";

  if (twoColumn4060) {
    layoutClasses = "grid grid-cols-1 md:grid-cols-[40%_60%] gap-8";
  } else if (twoColumn) {
    layoutClasses = "grid grid-cols-1 md:grid-cols-2 gap-8";
  } else if (centerBoth) {
    layoutClasses = "flex items-center justify-center";
  } else if (centerVertically) {
    layoutClasses = "flex items-center";
  }

  return (
    <div
      className={`w-full max-w-7xl
        ${!noMargin ? "mx-auto" : ""}
        ${!noPadding ? (noPaddingBottom ? "px-5 pt-10" : "px-5 py-10") : ""}
        ${layoutClasses}
      `}
      style={{ minHeight: `${minHeight}px`, height: height || "auto" }}
    >
      {children}
    </div>
  );
};

export default Container;
