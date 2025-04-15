import { useTranslation } from 'react-i18next'
import { Project } from '@/types/project'
import Diamond from '@/components/Icons/Diamond'

type Language = 'en' | 'es'

type InfoPopupProps = {
    project: Project,
    borderColor?: string
}

export const InfoPopup = ({ project, borderColor = "border-winter", }: InfoPopupProps) => {

    const { t, i18n } = useTranslation()

    const language = i18n.language as Language

    const description = project.description?.[language] || project.description?.en || ''

    const achievements = project.achievements?.[language] || project.achievements?.en || []

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center text-moss-green">
            <div className={`relative w-2/3 h-2/3 m-auto rounded-xl overflow-hidden border-4 ${borderColor} border-dashed`}>
                <img
                    src={`${import.meta.env.BASE_URL}projects/${project.name}.png`}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />

                <div className="relative z-10 bg-base/90 w-full h-full p-8">
                    <h2 className="text-4xl font-bold m-2">{project.name}</h2>
                    <div className='flex gap-2 text-xs justify-center items-center w-full'>
                        {project.company && <span className='p-2 rounded bg-pine-green/50'>{project.company}</span>}
                        {project.date && <span className='p-2 rounded bg-antique-brass/50'>{project.date}</span>}
                    </div>
                    <p className="my-4">{description}</p>
                    {achievements.length > 0 && (<>
                        <h1 className='text-2xl mt-8 mb-4'>{t("Achievements")}</h1>
                        <div className="grid grid-cols-2 gap-2 mt-4 w-7/8 m-auto text-xs text-left max-h-3/5 overflow-auto">
                            {achievements.map((item, i) => (
                                <span key={i} className='flex items-center gap-2'><Diamond className='size-4 shrink-0'/> {item}</span>
                            ))}
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    )
}
