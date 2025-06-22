const Container = ({
  children,
  twoColumn = false,
  centerVertically = false,
  height,
}) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-5 py-10 
        ${twoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-8" : ""}
        ${centerVertically ? "flex items-center" : ""}
      `}
      style={{ minHeight: "500px", height: height || "auto" }}
    >
      {children}
    </div>
  );
};

export default Container;
