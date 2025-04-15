const Diamond = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    width="7"
    height="7"
    viewBox="0 -0.5 7 7"
    fill="currentColor"
    stroke="currentColor"
    shapeRendering="crispEdges"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 0h1M2 1h3M1 2h2M4 2h2M0 3h2M5 3h2M1 4h2M4 4h2M2 5h3M3 6h1" />
  </svg>
);

export default Diamond;