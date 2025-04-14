const LeftArrow = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="currentColor"
      stroke="currentColor"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 0h1M12 1h3M10 2h5M8 3h7M6 4h9M4 5h11M2 6h13M0 7h15M2 8h13M4 9h11M6 10h9M8 11h7M10 12h5M12 13h3M14 14h1" />
    </svg>
  );
  
  export default LeftArrow;