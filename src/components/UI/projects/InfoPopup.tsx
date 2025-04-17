import { useTranslation } from 'react-i18next'
import { Project } from '@/types/project'
import Diamond from '@/components/Icons/Diamond'
import ExternalLinkIcon from '@/components/Icons/ExternalLink'

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
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center text-winter cursor-default">
            <div className={`relative w-full md:w-2/3 h-5/6 m-2 md:m-auto rounded-xl overflow-hidden border-4 ${borderColor} border-dashed`}>
                <img
                    src={`${import.meta.env.BASE_URL}projects/${project.name}.png`}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />

                <div className="relative z-10 bg-bg/90 w-full h-full p-2 md:p-4">
                    <div className='flex items-end justify-center gap-2 m-2 md:m-4 text-cornflower'>
                        <h2 className="text-xl md:text-4xl">{project.name}</h2>
                        {project.url && <a href={project.url} target='blank'><ExternalLinkIcon className='size-4 md:size-8 m-1'/></a>}
                    </div>
                    <div className='flex gap-2 text-3xs md:text-2xs justify-center items-center w-full mb-2 md:mb-8'>
                        {project.company && <span className='p-1 md:p-2 rounded bg-may-green/50'>{project.company}</span>}
                        {project.date && <span className='p-1 md:p-2 rounded bg-russian-green/50'>{project.date}</span>}
                    </div>
                    <div className='flex flex-wrap justify-center gap-2 m-2 md:m-4'>
                    {project.stack.map((tech: string, i: number) => (
                        <div key={i} className="p-1">
                            <img
                                src={`${import.meta.env.BASE_URL}${tech}.svg`}
                                className={`h-8 md:h-10 transition-all duration-300`}
                                alt={`${tech} logo`}
                            />
                        </div>
                    ))}
                    </div>
                    <p className="my-2 md:my-4 text-sm md:text-default">{description}</p>
                    {achievements.length > 0 && (<>
                        <h1 className='text-xl md:text-2xl mt-4 md:mt-8 mb-2 md:mb-4 text-cornflower'>{t("Achievements")}</h1>
                        <div className="block md:grid grid-cols-2 gap-2 mt-2 md:mt-4 w-7/8 m-auto text-xs md:text-sm text-left max-h-3/5 overflow-auto">
                            {achievements.map((item, i) => (
                                <span key={i} className='flex items-center gap-2'><Diamond className='size-4 shrink-0 text-violet'/> {item}</span>
                            ))}
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    )
}
