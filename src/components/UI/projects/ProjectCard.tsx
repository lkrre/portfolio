import React from "react"

type Description = {
    en: string,
    es: string,
  }
  
  type Achievements = {
    en: Array<string>,
    es: Array<string>
  }
  
  type ProfessionalProject = {
    name: string,
    description: Description,
    achievements?: Achievements,
    company: string,
    stack: Array<string>,
    date: string,
    url: string
  }
  
  type ProjectCardProps = {
    project: ProfessionalProject
    className?: string
    borderColor?: string
    iconSize?: string
  }
  
  export const ProjectCard = React.memo(({
    project,
    className = "w-1/1 md:w-1/2 lg:w-1/3 h-64 lg:h-96",
    borderColor = "border-winter",
    iconSize = "size-9"
  }: ProjectCardProps) => {
    return (
      <div className={`${className} shrink-0`}>
        <div className={`h-full mx-4 md:mx-8 border-4 border-dashed rounded-xl relative ${borderColor}`}>
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
              }}
            }
            />
    
            <div className="relative p-4 h-full flex justify-between">
            <div>
                <h1 className="font-bold">{project.name}</h1>
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
        </div>
      </div>
    )
  }
) 
  