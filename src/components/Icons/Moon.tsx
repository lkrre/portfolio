const Moon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="1"
      xmlns="http://www.w3.org/2000/svg"
    >
    <g clipPath="url(#clip0_604_3537)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0H22V2H24V4H22V6H20V4H18V2H20V0ZM8 4H16V6H14V8H12V6H8V4ZM6 8V6H8V8H6ZM6 16H4V8H6V16ZM8 18H6V16H8V18ZM16 18V20H8V18H16ZM18 16V18H16V16H18ZM16 12V10H18V8H20V16H18V12H16ZM12 12H16V14H12V12ZM12 12V8H10V12H12ZM4 18H2V20H0V22H2V24H4V22H6V20H4V18Z"
      />
    </g>
  </svg>
  );
  
  export default Moon;