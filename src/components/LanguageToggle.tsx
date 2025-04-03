import { useTranslation } from "react-i18next"

export const Lang = () => {
    const { t, i18n } = useTranslation();
    return(
        <div className="text-center">
            <button onClick={() => i18n.changeLanguage("en")} >
                Eng
            </button>
            <button onClick={() => i18n.changeLanguage("es")} >
                Esp
            </button>
        </div>

    )
}