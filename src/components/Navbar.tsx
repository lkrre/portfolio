import { useTranslation } from "react-i18next";
import HomeIcon from "./Icons/Home";
import ContactIcon from "./Icons/Contact";
import FolderIcon from "./Icons/Folder";
import HumanHandsUpIcon from "./Icons/HumanHandsUp";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "home", icon: HomeIcon },
  { id: "about", label: "about", icon: HumanHandsUpIcon },
  { id: "projects", label: "projects", icon: FolderIcon },
  { id: "contact", label: "contact", icon: ContactIcon },
];

interface NavbarProps {
  currentSection: string,
  onSectionChange: (sectionId: string) => void;
}

export const Navbar = ({ currentSection, onSectionChange }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full h-12 bg-bg border-4 border-winter border-dashed z-1">
      <div className={`flex justify-evenly divide-x-5 divide-winter divide-dashed py-2 text-center items-center`}>
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <div
              key={id}
              onClick={id == currentSection ? undefined : () => onSectionChange(id)}
              className={`flex justify-center items-center focus:outline-none w-full h-full ${id == currentSection ? '' : 'text-winter cursor-pointer'}`}
          >
              <span className="hidden md:block">{t(label)}</span>
              <Icon className="block md:hidden w-full my-auto" />
          </div>
        ))}
        <div className="flex gap-4 justify-center items-center w-full" >
            <LanguageToggle />
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
