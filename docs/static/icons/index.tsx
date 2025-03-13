import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties
}

export function CubeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-cube"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.016 2.016 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718zM12 22V12M12 12l8.73-5.04M3.27 6.96 12 12" />
    </svg>
  );
}



export function CodeIcon (props: IconProps) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
  </svg>
  );
};