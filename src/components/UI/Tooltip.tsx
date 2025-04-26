import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import PixelEntrance from "./pixelated";

type TooltipProps = {
  children: ReactNode;
  content: string;
  color?: string;
};

const Tooltip = ({ children, content, color = "violet" }: TooltipProps) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(0);

  const handleMouseEnter = () => {
    setIsActive((prev) => prev + 1);
  };

  return (
    <div className="relative w-full">
      <div className="group w-full flex flex-col items-center">
        <div
          tabIndex={0}
          className="peer w-full flex justify-center"
          onMouseEnter={handleMouseEnter}
          onFocus={handleMouseEnter}
        >
          {children}
        </div>

        <div
          className={`
            absolute left-1/2 -translate-x-1/2 
            opacity-0 md:group-hover:opacity-90
            peer-focus:opacity-90
            transition duration-200 z-50 pointer-events-none
            w-full
          `}
        >
          <PixelEntrance triggerKey={isActive} pixelSize={40}>
            <div
              className={`
                bg-bg text-xs w-full p-4 flex items-center 
                border-4 border-dashed border-${color} text-${color}
              `}
            >
              {t(content)}
            </div>
          </PixelEntrance>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
