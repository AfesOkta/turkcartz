import React from "react";
import { TIconProps } from "src/types/icon.types";

const CategoriesIcon = ({ className}: TIconProps) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 25 25"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default CategoriesIcon;
