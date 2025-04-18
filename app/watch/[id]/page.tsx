"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getContentById } from "@/lib/constants"
import Footer from "@/components/footer"

export default function WatchPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const { id } = params;
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
        <div className="aspect-video w-full bg-gray-900">
          <iframe  className="h-full w-full"  src="https://www.youtube.com/embed/b9EkMc79ZSU?si=X35rsg8ISExKLuDn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        {/* Video Info */}
        <div className="p-6 md:p-12">
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

