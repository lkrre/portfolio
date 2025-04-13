import Linkedin from "@/components/Icons/Linkedin";
import GitHub from "@/components/Icons/GitHub";
import CloudDownload from "@/components/Icons/CloudDownload";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const { t } = useTranslation();
    return <>
        <h1 className="text-3xl my-4">Laura <span className="text-violet">Karina</span> Rámirez</h1>
        <span className="text-cornflower my-2">{t("software engineer")}</span>
        <div>
            <a 
                href="mailto:rrelak@gmail.com?subject=Contact%20from%20mi%20portfolio"
                className="text-xs m-4"
            >rrelak@gmail.com</a>
        </div>
        <div className="flex justify-center gap-2 my-12 text-white">
            <a href="https://www.linkedin.com/in/rrelak/" target="blank">
                <Linkedin className="bg-true-blue size-8 rounded"/>
            </a>
            <a href="https://github.com/lkrre" target="blank">
                <GitHub className="size-8"/>
            </a>
            <a href="https://drive.google.com/file/d/1QxI4Q5m5C57nvSX-Cp1aHRIzSxPxgXR2/view?usp=sharing" target="blank" title="Download CV">
                <CloudDownload className="size-8"/>
            </a>
        </div>
    </>
}