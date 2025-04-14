import { useEffect, useRef, useState, useCallback } from "react"
import LeftArrow from "@/components/Icons/LeftArrow"
import RightArrow from "@/components/Icons/RightArrow"
import { useWheelScroll } from "@/hooks/useWheelScroll"
import { useTouchDrag } from "@/hooks/useTouchDrag"

type PaginateProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  className?: string
  title?: string
  breakpoints?: {
    lg?: number
    md?: number
    sm?: number
  }
  scrollDelay?: number
}

export function Paginate<T>({
  items,
  renderItem,
  className = "",
  title = "",
  breakpoints = { lg: 3, md: 2, sm: 1 },
  scrollDelay = 200,
}: PaginateProps<T>) {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(breakpoints.lg || 3)
  const scrollRef = useRef<HTMLDivElement>(null)

  const maxIndex = Math.max(0, items.length - itemsToShow)

  const updateItemsToShow = () => {
    const width = window.innerWidth
    if (width >= 1024 && breakpoints.lg) setItemsToShow(breakpoints.lg)
    else if (width >= 768 && breakpoints.md) setItemsToShow(breakpoints.md)
    else setItemsToShow(breakpoints.sm || 1)
  }

  useEffect(() => {
    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)
    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  const handleScroll = useCallback(
    (direction: number) => {
      setStartIndex((prev) => {
        const next = prev + direction
        if (next < 0 || next > maxIndex || next === prev) return prev
        return next
      })
    },
    [maxIndex]
  )

  useWheelScroll({ ref: scrollRef, onScroll: handleScroll, delay: scrollDelay })
  useTouchDrag({ ref: scrollRef, onScroll: handleScroll })

  return (
    items.length > 0 && (
      <div className={`${className} w-full h-full m-auto mb-24`}>
        {title && <h1 className="text-2xl text-wrap m-8">{title}</h1>}
        <div className="flex items-center w-full">
          <div className="size-6">
            {startIndex > 0 && (
              <button
                className="hover:text-winter"
                onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
              >
                <LeftArrow className="size-6" />
              </button>
            )}
          </div>

          <div ref={scrollRef} className={`w-full mx-auto`}>
            <div className="flex flex-wrap justify-center">
              {items
                .slice(startIndex, startIndex + itemsToShow)
                .map((item, index) => renderItem(item, index + startIndex))}
            </div>
          </div>

          <div className="size-6">
            {startIndex < maxIndex && (
              <button
                className="hover:text-winter"
                onClick={() =>
                  setStartIndex((prev) => Math.min(maxIndex, prev + 1))
                }
              >
                <RightArrow className="size-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  )
}
