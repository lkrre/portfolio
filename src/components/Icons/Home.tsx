const HomeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2H10V4H8V6H6V8H4V10H2V12H4V22H11V16H13V22H20V12H22V10H20V8H18V6H16V4H14V2ZM14 4V6H16V8H18V10H20V12H18V20H15V14H9V20H6V12H4V10H6V8H8V6H10V4H14Z"
      />
    </svg>
  );
  
  export default HomeIcon;