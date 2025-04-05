const CloudDownload = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4H16V6H10V4ZM8 8V6H10V8H8ZM4 10V8H8V10H4ZM2 12V10H4V12H2ZM2 18H0V12H2V18ZM2 18H7V20H2V18ZM18 8H16V6H18V8ZM22 12H20H18V10V8H20V10H22V12ZM22 18V12H24V18H22ZM22 18V20H17V18H22ZM11 20H13V18H15V16H17V14H13V9H11V14H7V16H9V18H11V20Z"
      />
  </svg>
  );
  
  export default CloudDownload;