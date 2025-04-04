import { useTranslation } from "react-i18next";
import HomeIcon from "./Icons/Home";
import ContactIcon from "./Icons/Contact";
import FolderIcon from "./Icons/Folder";
import HumanHandsUpIcon from "./Icons/HumanHandsUp";
import { LanguageToggle } from "./LanguageToggle";

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "home", icon: HomeIcon },
  { id: "about", label: "about", icon: HumanHandsUpIcon },
  { id: "projects", label: "projects", icon: FolderIcon },
  { id: "contact", label: "Contact", icon: ContactIcon },
];

interface NavbarProps {
  onSectionChange: (sectionId: string) => void;
}

export const Navbar = ({ onSectionChange }: NavbarProps) => {
  const { t } = useTranslation();
  const colCount = NAV_ITEMS.length + 1;

  return (
    <nav className="fixed top-0 w-full bg-transparent border-4 border-winter border-dashed z-50">
      <div className={`grid grid-cols-${colCount} divide-x-5 divide-winter divide-dashed py-2 text-center items-center`}>
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <div
                key={id}
                onClick={() => onSectionChange(id)}
                className="flex justify-center items-center focus:outline-none w-full h-full cursor-pointer"
            >
                <span className="hidden md:block">{t(label)}</span>
                <Icon className="block md:hidden w-full my-auto" />
            </div>
        ))}
        <div>
            <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
