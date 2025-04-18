"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ContentItem } from "@/lib/constants"

export default function ContentRow({ title, items }: { title: string; items: ContentItem[] }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const { user } = useAuth()
  const router = useRouter()

  const handleItemClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (user) {
      router.push(`/watch/${id}`)
    } else {
      router.push(`/login?redirect=/watch/${id}`)
    }
  }

  return (
    <div className="pl-4 md:pl-12 mb-8">
      <h2 className="mb-4 text-xl font-medium">{title}</h2>
      <div className="relative group">
        {showLeftArrow && (
          <button className="absolute left-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
            <ChevronLeft size={40} />
          </button>
        )}
        <div className="flex gap-1 overflow-x-auto pb-8 scrollbar-hide">
          {items.map((item) => (
            <a
              key={item.id}
              href={`/watch/${item.id}`}
              onClick={(e) => handleItemClick(item.id, e)}
              className="relative flex min-w-[120px] flex-shrink-0 transition-transform duration-300 hover:scale-105 md:min-w-[160px]"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded bg-gray-800">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                {item.isRecentlyAdded && (
                  <div className="absolute bottom-0 right-0 bg-red-600 px-1 py-0.5 text-[10px] font-bold">New</div>
                )}
                {item.releaseDate && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-2 py-1 text-[10px] font-medium">
                    Coming {new Date(item.releaseDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
        {showRightArrow && (
          <button className="absolute right-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
            <ChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  )
}