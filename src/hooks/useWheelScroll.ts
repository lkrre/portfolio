import { useEffect } from "react"

type UseWheelScrollProps = {
    ref: React.RefObject<HTMLDivElement | null>
    onScroll: (direction: number) => void
    delay?: number
}

export const useWheelScroll = ({ ref, onScroll, delay = 200 }: UseWheelScrollProps) => {
    useEffect(() => {
        const container = ref.current
        if (!container) return

        let isScrolling = false

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            if (isScrolling) return

            const direction = e.deltaY > 0 ? 1 : -1
            onScroll(direction)

            isScrolling = true
            setTimeout(() => {
                isScrolling = false
            }, delay)
        }

        container.addEventListener("wheel", handleWheel, { passive: false })
        return () => container.removeEventListener("wheel", handleWheel)
    }, [ref, onScroll, delay])
}
