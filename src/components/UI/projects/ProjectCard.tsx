import React, { useState } from "react"
import { Project } from "@/types/project"
import { InfoPopup } from "@/components/UI/projects/InfoPopup"
import { useTranslation } from "react-i18next"

type Language = 'en' | 'es'

export type ProjectCardProps = {
  project: Project
  className?: string
  borderColor?: string
  iconSize?: string
  popup?:boolean
}

export const ProjectCard = React.memo(({
  project,
  className = "w-1/1 md:w-1/2 lg:w-1/3 h-64 lg:h-96",
  borderColor = "border-winter",
  iconSize = "h-9",
  popup =true
}: ProjectCardProps) => {
  const { i18n } = useTranslation()

  const [showPopup, setShowPopup] = useState(false)
  const handleClick = () => {
    if(popup) {
      setShowPopup(!showPopup)
    } else if(project.url){
      window.open(project.url, '_blank');
    }
  }
  const language = i18n.language as Language
  const description = project.description?.[language] || project.description?.en || ''

  return (
    <div className={`${className} shrink-0`}>
      <div
        className={`h-full mx-2 sm:mx-4 md:mx-8 border-4 border-dashed rounded-xl relative
          ${project.url || popup? "cursor-pointer" : ""} ${borderColor}`
        }
        onClick={handleClick}
      >
        <img
          src={`${import.meta.env.BASE_URL}projects/pxl-${project.name}.png`}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          style={{ imageRendering: 'pixelated' }}
          onError={(e) => {
            const img = e.currentTarget
            if (!img.dataset.fallback) {
              img.dataset.fallback = "true"
              img.src = `${import.meta.env.BASE_URL}projects/default.png`
              img.className =
                "absolute inset-0 object-center m-auto h-full opacity-20"
            }
          }
          }
        />

        <div className="relative p-4 h-full">
          <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12">
            <h1 className="font-bold m-auto my-4 text-winter">{project.name}</h1>
            <p className="">{description}</p>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white/35 flex flex-wrap justify-center">
            {project.stack.map((tech: string, i: number) => (
              <div key={i} className="p-1">
                <img
                  src={`${import.meta.env.BASE_URL}${tech}.svg`}
                  className={`${iconSize} transition-all duration-300`}
                  alt={`${tech} logo`}
                />
              </div>
            ))}
          </div>
        </div>
        {popup && showPopup && (
          <InfoPopup
            project={project}
            borderColor={borderColor}
          />
        )}
      </div>
    </div>
  )
}
)
