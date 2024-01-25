/* eslint-disable react/prop-types */

const Modal = ({ show = false, size = "xs", children }) => {
  if (!show) {
    return null;
  }

  let sizeStyle;
  if (size === "xs") {
    sizeStyle = "max-w-[420px]";
  } else if (size === "sm") {
    sizeStyle = "sm:max-w-[600px]";
  } else if (size === "md") {
    sizeStyle = "md:max-w-[768px]";
  } else if (size === "lg") {
    sizeStyle = "lg:max-w-[984px]";
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-4 max-h-[90vh] overflow-auto ${sizeStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
