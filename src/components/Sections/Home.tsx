import Linkedin from "../Icons/Linkedin";
import GitHub from "../Icons/GitHub";
import CloudDownload from "../Icons/CloudDownload";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const { t } = useTranslation();
    return <>
        <h1 className="text-3xl my-4">Laura <span className="text-violet">Karina</span> Rámirez</h1>
        <span className="text-cornflower my-2">{t("software engineer")}</span>
        <div className="flex justify-center gap-2 my-12">
            <a href="https://www.linkedin.com/in/rrelak/" target="blank">
                <Linkedin className="bg-true-blue h-6 w-6 rounded"/>
            </a>
            <a href="https://github.com/lkrre" target="blank">
                <GitHub className="h-6 w-6"/>
            </a>
            <CloudDownload className="h-6 w-6"/>
        </div>
    </>
}