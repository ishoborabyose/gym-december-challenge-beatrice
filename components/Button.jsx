import React from "react";

function Button({ children, styles }) {
  return (
    <div
      className={`py-[1rem] px-[1.25rem] uppercase font-bold border border-[#14519A] ${styles}`}
    >
      {children}
    </div>
  );
}

export default Button;
