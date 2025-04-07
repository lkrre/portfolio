import FormattedTrans from "../../helpers/FormattedTrans"
export const About = () => {
    return <>
        <div className="w-full mt-12">
            <FormattedTrans
                i18nKey = "description"
            />
            <FormattedTrans
                i18nKey = "history resume"
            />
            <FormattedTrans
                i18nKey = "current goal"
            />
        </div>
    </>
}