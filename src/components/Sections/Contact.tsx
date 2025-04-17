import { useTranslation } from "react-i18next"
import HeartIcon from "../Icons/Heart"

export const Contact = () => {
    const { t } = useTranslation()
    return (
        <form
            action="https://formsubmit.co/cdda8ccc278f537f0e65e5f955077609"
            method="POST"
            className="border-4 border-winter border-dashed w-11/12 md:w-3/4 m-auto rounded py-8 md:py-32 px-4 md:px-24 text-xs md:text-sm"
        >
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_next" value="https://lkrre.github.io/portfolio/" />
            <input type="hidden" name="_confirmation" value="true" />
            <input type="text" name="phone_number" className="hidden" />

            <div className="flex justify-center m-4 md:m-8 items-center">
                <h1>{t("contact_title")}</h1>
                <HeartIcon className="text-russian-green h-4" />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-24 my-4">
                <input
                    type="text"
                    name="name"
                    placeholder={t('name')}
                    required
                    className="w-full px-3 border-dashed border-b-4 border-violet outline-none focus:border-lilac"
                />

                <input
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    required
                    className="w-full px-3 border-dashed border-b-4 border-violet outline-none focus:border-lilac"
                />
            </div>

            <textarea
                name="message"
                rows={6}
                required
                placeholder={t("Add your message here!")}
                className="mt-4 w-full px-3 border-dashed border-4 border-violet outline-none focus:border-lilac"
            />

            <div className="flex w-full justify-end">
                <button
                    type="submit"
                    className="my-4 bg-violet text-white px-4 py-2 rounded-md hover:bg-lilac transition-colors"
                >
                    {t("send")}
                </button>
            </div>
        </form>
    )
}