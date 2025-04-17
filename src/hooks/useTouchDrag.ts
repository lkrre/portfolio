import { useEffect } from "react"

type UseTouchDragProps = {
    ref: React.RefObject<HTMLDivElement | null>
    onScroll: (direction: number) => void
    threshold?: number
}

export const useTouchDrag = ({
    ref,
    onScroll,
    threshold = 50,
}: UseTouchDragProps) => {
    useEffect(() => {
        const container = ref.current
        if (!container) return

        let startX = 0
        let endX = 0
        let moved = false;

        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX
            endX = startX
            moved = false
        }

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault()
            moved = true;
            endX = e.touches[0].clientX
        }

        const handleTouchEnd = () => {
            const deltaX = endX - startX
            if (moved && Math.abs(deltaX) > threshold) {
                onScroll(deltaX < 0 ? 1 : -1)
            }
        }

        container.addEventListener("touchstart", handleTouchStart, { passive: false })
        container.addEventListener("touchmove", handleTouchMove, { passive: false })
        container.addEventListener("touchend", handleTouchEnd)

        return () => {
            container.removeEventListener("touchstart", handleTouchStart)
            container.removeEventListener("touchmove", handleTouchMove)
            container.removeEventListener("touchend", handleTouchEnd)
        }
    }, [ref, onScroll, threshold])
}
