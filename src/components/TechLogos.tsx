const techLogos = [
    "alpinejs",
    "awslambda",
    "bootstrap",
    "celery",
    "corenet",
    "csharp",
    "django",
    "expo",
    "googlestorage",
    "laravel",
    "livewire",
    "mercadopago",
    "microsoftforms",
    "mongodb",
    "mssql",
    "mysql",
    "nuxtjs",
    "postgresql",
    "python",
    "react",
    "sass",
    "sass-alt",
    "ssrs",
    "stripe",
    "tailwindcss",
    "twilio",
    "ventiapp",
    "vite",
    "vuejs"
]
export const TechLogo = () => {
    return <>
        <div className="flex gap-4 flex-wrap w-full justify-between text-white">
            {
                techLogos.map((tech, i) => (
                    <img key={i} src={`${import.meta.env.BASE_URL}${tech}.svg`} className="size-16 mx-2" alt={`${tech} logo`} />
                ))
            }
        </div>
    </>
}