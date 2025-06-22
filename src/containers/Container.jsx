const Container = ({
  children,
  twoColumn = false,
  centerVertically = false,
  centerBoth = false,
  height,
  noPadding = false,
  noMargin = false,
  noPaddingBottom = false, // ✅ add this
}) => {
  return (
    <div
      className={`w-full max-w-7xl 
        ${!noMargin ? "mx-auto" : ""}
        ${!noPadding ? `${noPaddingBottom ? "px-5 pt-10" : "px-5 py-10"}` : ""}
        ${twoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-8" : ""}
        ${
          centerBoth
            ? "flex items-center justify-center"
            : centerVertically
            ? "flex items-center"
            : ""
        }
      `}
      style={{ minHeight: "500px", height: height || "auto" }}
    >
      {children}
    </div>
  );
};

export default Container;
