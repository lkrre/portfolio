import { useTranslation } from "react-i18next"
import { Lang } from "./LanguageToggle";

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    
    return <>
        <nav className="fixed top-0 w-full bg-background border-4 border-tea-green border-dashed">
            <div className="grid grid-cols-5 divide-dashed divide-x-6 divide-tea-green text-center items-center">
                <a href="#home">{t("home")}</a>
                <a href="#about">{t("about")}</a>
                <a href="#projects">{t("projects")}</a>
                <a href="#contact">{t("Contact")}</a>
                <Lang/>
            </div>
        </nav>
    </>
}