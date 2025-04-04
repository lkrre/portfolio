const FolderIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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
        d="M4 4H12V6H20H22V8L22 18V20L20 20H4L2 20V18V6V4H4ZM20 8H10V6H4V18H20V8Z"
      />
    </svg>
  );
  
  export default FolderIcon;