"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContentRow from "@/components/content-row"
import TopTenRow from "@/components/top-ten-row"
import { CATEGORIES, getContentByCategory, getContentByType } from "@/lib/constants"
import Link from "next/link"

export default function BrowsePage() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  const contentSectionRef = useRef<HTMLDivElement>(null)

  // Scroll to content rows on specific categories
  useEffect(() => {
    if (["new", "movies", "tv", "upcoming"].includes(category || "") && contentSectionRef.current) {
      contentSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [category])

  // Get content based on selected category
  let contentRows = []

  if (category === "tv") {
    const tvShows = getContentByType("series")
    contentRows = [
      { title: "Popular TV Shows", items: tvShows.slice(0, 12) },
      { title: "Drama Series", items: tvShows.filter((item) => item.genres?.includes("Drama")).slice(0, 12) },
      { title: "Comedy Series", items: tvShows.filter((item) => item.genres?.includes("Comedy")).slice(0, 12) },
    ]
  } else if (category === "movies") {
    const movies = getContentByType("movie")
    contentRows = [
      { title: "Popular Movies", items: movies.slice(0, 12) },
      { title: "Action Movies", items: movies.filter((item) => item.genres?.includes("Action")).slice(0, 12) },
      { title: "Drama Movies", items: movies.filter((item) => item.genres?.includes("Drama")).slice(0, 12) },
    ]
  } else if (category === "new") {
    const newContent = getContentByCategory(CATEGORIES.NEW_POPULAR)
    contentRows = [
      { title: "New Releases", items: newContent.filter((item) => item.isNew).slice(0, 12) },
      { title: "Recently Added", items: newContent.filter((item) => item.isRecentlyAdded).slice(0, 12) },
    ]
  } else if (category === "upcoming") {
    const upcomingMovies = getContentByCategory(CATEGORIES.UPCOMING)
    contentRows = [
      { title: "Coming Soon", items: upcomingMovies },
    ]
  } else {
    // Default home view
    contentRows = [
      { title: CATEGORIES.ROMANTIC_ASIAN, items: getContentByCategory(CATEGORIES.ROMANTIC_ASIAN) },
      { title: CATEGORIES.CONTINUE_WATCHING, items: getContentByCategory(CATEGORIES.CONTINUE_WATCHING) },
      { title: CATEGORIES.ACTION, items: getContentByCategory(CATEGORIES.ACTION) },
      { title: CATEGORIES.HORROR, items: getContentByCategory(CATEGORIES.HORROR) },
      { title: CATEGORIES.KIDS, items: getContentByCategory(CATEGORIES.KIDS) },
      { title: CATEGORIES.UPCOMING, items: getContentByCategory(CATEGORIES.UPCOMING).slice(0, 5) },
    ]
  }

  // Get top 10 content
  const topTenMovies = getContentByCategory(CATEGORIES.TOP_TEN_INDIA)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[56.25vw] max-h-[80vh] min-h-[400px] w-full mt-16">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/7e/47/7c/7e477c1136f9fdf0cf6d6297eabd321b.jpg')] bg-cover bg-center"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16">
          <h1 className="text-4xl font-bold md:text-6xl">Stranger Things</h1>
          <p className="mt-4 max-w-md text-lg">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
            supernatural forces and one strange little girl.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href={'/watch/ra1'} className="flex items-center gap-2 rounded bg-white px-6 py-2 font-semibold text-black" >
              <span>▶</span> Play
            </Link>
            {/* <button className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-2 font-semibold text-white">
              <span></span> More Info
            </button> */}
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div ref={contentSectionRef} className="mt-4 space-y-8 pb-16 flex-grow">
        {contentRows.map((row, index) => (
          <ContentRow key={index} title={row.title} items={row.items} />
        ))}

        {/* Always show Top 10 */}
        {!category || category === "home" ? <TopTenRow title={CATEGORIES.TOP_TEN_INDIA} items={topTenMovies} /> : null}
      </div>

      <Footer />
    </main>
  )
}
