const ContactIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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
        d="M2 3H0V21H2H22H24V3H22H2ZM22 5V19H2V5H22ZM10 7H6V11H10V7ZM4 13H12V17H4V13ZM20 7H14V9H20V7ZM14 11H20V13H14V11ZM20 15H14V17H20V15Z"
      />
    </svg>
  );
  
  export default ContactIcon;