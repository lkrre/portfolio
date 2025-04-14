import { useCallback } from "react"
import { Paginate } from "@/components/UI/projects/Paginate"
import { ProjectCard } from "@/components/UI/projects/ProjectCard"
import professionalProjects from "@/data/ProfessionalProjects.json"
import personalProjects from "@/data/PersonalProjects.json"
import otherProjects from "@/data/OtherProjects.json"
import { useTranslation } from "react-i18next"

export const Projects = () => {
  const { t } = useTranslation()

  const renderPersonalProject = useCallback(
    (project, index) => (
      <ProjectCard
        key={index + "personal"}
        project={project}
        borderColor="border-violet"
      />
    ),
    []
  )

  const renderProfessionalProject = useCallback(
    (project, index) => (
      <ProjectCard
        key={index + "prof"}
        project={project}
        borderColor="border-blue-gray"
      />
    ),
    []
  )

  const renderOtherProject = useCallback(
    (project, index) => (
      <ProjectCard
        key={index + "other"}
        project={project}
        borderColor="border-russian-green"
        iconSize="size-4 md:size-6"
        className="w-1/2 md:w-1/3 lg:w-1/4 h-42 text-xs"
      />
    ),
    []
  )

  return (
    <div className="w-full h-full">
      <Paginate
        items={personalProjects}
        title={t("projectsSection.personalProjects")}
        breakpoints={{ lg: 3, md: 2, sm: 1 }}
        renderItem={renderPersonalProject}
      />
      <Paginate
        items={professionalProjects}
        title={t("projectsSection.professionalProjects")}
        breakpoints={{ lg: 3, md: 2, sm: 1 }}
        renderItem={renderProfessionalProject}
      />
      <Paginate
        items={otherProjects}
        className="md:w-5/6"
        title={t("projectsSection.otherProjects")}
        breakpoints={{ lg: 4, md: 3, sm: 2 }}
        renderItem={renderOtherProject}
      />
    </div>
  )
}
