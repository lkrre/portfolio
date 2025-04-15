export type Description = {
    en: string
    es: string
}

export type Achievements = {
    en: string[]
    es: string[]
}

export type Project = {
    name: string
    description: Description
    achievements?: Achievements
    company: string
    stack: string[]
    date: string
    url: string
}
