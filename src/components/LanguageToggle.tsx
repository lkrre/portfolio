import { useTranslation } from "react-i18next";
import { useCallback } from "react";

const FLAGS: Record<string, string> = {
  es: "/flag-mx.svg",
  en: "/flag-uk.svg",
};

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  }, [i18n]);

  return (
    <div className="text-center w-full">
      <img
        src={FLAGS[i18n.language]}
        alt={i18n.language}
        className="w-6 m-auto cursor-pointer"
        onClick={toggleLanguage}
      />
    </div>
  );
};