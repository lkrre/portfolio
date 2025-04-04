import { useTranslation } from "react-i18next"
import HomeIcon from "./Icons/Home";
import ContactIcon from "./Icons/Contact";
import FolderIcon from "./Icons/Folder";
import HumanHandsUpIcon from "./Icons/HumanHandsUp";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
    const { t } = useTranslation();
    
    return <>
        <nav className="fixed top-0 w-full bg-transparent border-4 border-raspberry border-dashed">
            <div className="grid grid-cols-5 divide-dashed divide-x-5 py-2 divide-raspberry text-center items-center">
                <a href="#home" className="md:block hidden">
                    {t("home")}
                </a>
                <a href="#home" className="md:hidden block">
                    <HomeIcon className="w-full my-auto"/>
                </a>
                <a href="#about" className="md:block hidden">
                    {t("about")}
                </a>
                <a href="#about" className="md:hidden block">
                    <HumanHandsUpIcon className="w-full my-auto"/>
                </a>
                <a href="#projects" className="md:block hidden">
                    {t("projects")}
                </a>
                <a href="#projects" className="md:hidden block">
                    <FolderIcon className="w-full my-auto"/>
                </a>
                <a href="#contact" className="md:block hidden">
                    {t("Contact")}
                </a>
                <a href="#contact" className="md:hidden block">
                    <ContactIcon className="w-full my-auto"/>
                </a>
                <LanguageToggle/>
            </div>
        </nav>
    </>
}