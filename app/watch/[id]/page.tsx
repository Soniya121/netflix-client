"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getContentById } from "@/lib/constants"
import Footer from "@/components/footer"
import { VideoPlayer } from "@/components/video-player"
import { use } from "react"

// YouTube video IDs for different content
const YOUTUBE_VIDEOS: Record<string, string> = {
  "cw1": "sEOuJ4z5aTc", // Brooklyn Nine-Nine
  "cw2": "dQw4w9WgXcQ", // When Life Gives You Tangerines
  "cw3": "dQw4w9WgXcQ", // Meenakshi Sundareshwar
  "cw4": "dQw4w9WgXcQ", // Suits
  "top6": "dQw4w9WgXcQ", // The Life List
  "top7": "dQw4w9WgXcQ", // Jawan
  "top8": "dQw4w9WgXcQ", // Pathaan
  "act2": "dQw4w9WgXcQ", // The Gray Man
  "act3": "dQw4w9WgXcQ", // Red Notice
  "act4": "dQw4w9WgXcQ", // 6 Underground
  "hor5": "dQw4w9WgXcQ", // His House
  "kid1": "dQw4w9WgXcQ", // The Mitchells vs. the Machines
  "kid2": "dQw4w9WgXcQ", // Klaus
  "kid3": "dQw4w9WgXcQ", // Over the Moon
  "kid4": "dQw4w9WgXcQ", // The Willoughbys
  "kid5": "dQw4w9WgXcQ", // The Sea Beast
  "up3": "dQw4w9WgXcQ", // Mission: Impossible 8
  "up4": "dQw4w9WgXcQ", // Avatar 3
  "up5": "dQw4w9WgXcQ", // Deadpool 3
}

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { user } = useAuth()
  const router = useRouter()
  const { id } = use(params)
  const content = getContentById(id)

  // If not authenticated, redirect to login
  if (!user) {
    router.push(`/login?redirect=/watch/${id}`)
    return null
  }

  if (!content) {
    return (
      <main className="flex min-h-screen flex-col bg-black text-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Content not found</h1>
            <Link href="/browse" className="mt-4 inline-block rounded bg-red-600 px-4 py-2 text-white">
              Back to Browse
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const youtubeVideoId = YOUTUBE_VIDEOS[id] || "dQw4w9WgXcQ" // Fallback to a default video

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <div className="relative flex-grow">
        {/* Back Button */}
        <Link
          href="/browse"
          className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80"
        >
          <ArrowLeft size={24} />
        </Link>

        {/* Video Player */}
        <VideoPlayer videoId={youtubeVideoId} title={content.title} />

        {/* Video Info */}
        <div className="p-6 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold md:text-4xl">{content.title}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span>{content.year}</span>
            <span>{content.rating}</span>
            <span>{content.duration}</span>
            {content.genres && content.genres.map((genre, index) => <span key={index}>{genre}</span>)}
          </div>
          <p className="mt-6 text-lg">{content.description}</p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Cast</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="text-sm">
                <p className="font-medium">Actor Name</p>
                <p className="text-gray-400">Character Name</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Actor Name</p>
                <p className="text-gray-400">Character Name</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Actor Name</p>
                <p className="text-gray-400">Character Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

