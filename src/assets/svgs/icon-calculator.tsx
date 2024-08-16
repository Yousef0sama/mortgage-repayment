// imports

// interfaces

import { SVG } from "@/interfaces/interfaces";

export default function CalculatorIcon ({color, width, height} : SVG) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M18.75 2.25H5.25a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm-10.5 16.5a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm0-3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM12 18.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM12 15a1.125 1.125 0 110-2.25A1.125 1.125 0 0112 15zm3.75 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm0-3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm1.5-5.25a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v3.75z"
      ></path>
    </svg>
  );

}