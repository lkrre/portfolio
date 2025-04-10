import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type TooltipProps = {
  children: ReactNode;
  content: string;
  color?: string;
};

const Tooltip = ({ children, content, color = "violet" }: TooltipProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full">
      <div className="group w-full flex flex-col items-center">
        <div tabIndex={0} className="peer w-full flex justify-center">
          {children}
        </div>

        <div
          className={`
            absolute left-1/2 -translate-x-1/2 
            opacity-0 md:group-hover:opacity-90
            peer-focus:opacity-90
            transition duration-200 z-50 pointer-events-none
            bg-base text-xs w-full p-4 flex items-center 
            border-4 border-dashed border-${color} text-${color}
          `}
        >
          {t(content)}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
