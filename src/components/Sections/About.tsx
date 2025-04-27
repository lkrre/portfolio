import FormattedTrans from "@/helpers/FormattedTrans"
import skills from "@/data/Skills.json"
import SkillBar from "@/components/UI/SkillBar"
import Tooltip from "@/components/UI/Tooltip"

type Skill = {
    name: string;
    value: number;
    descriptionKey: string;
    color: string;
  };

export const About = () => {
    return <>
        <div className="block md:flex mt-12 gap-8">
            <div className="w-full">
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
            <div className="w-full md:w-2/5">
            {
                skills.map((skill: Skill, index: number) => (
                    <Tooltip content={skill.descriptionKey} color={skill.color} key={index}>
                        <SkillBar name={skill.name} value={skill.value} color={skill.color} key={index}/>
                    </Tooltip>
                ))}
            </div>
        </div>
    </>
}