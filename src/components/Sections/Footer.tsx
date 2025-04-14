import { useTranslation } from "react-i18next"
import HeartIcon from "../Icons/Heart";
import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"

export const Footer = () => {
    const { t } = useTranslation();

    return <>
        <footer className="flex flex-row items-center justify-center text-xs my-12">
            {t('made with')}
            <HeartIcon className="text-tart-orange mx-2 size-4"/> ,
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="size-4 mx-2" alt="Vite logo" />
            </a>
            {t('and')}
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="size-4 mx-2" alt="React logo" />
            </a>
            {t('by me')}.
        </footer>
    </>
}