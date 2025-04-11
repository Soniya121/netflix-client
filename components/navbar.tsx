"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { NetflixLogo } from "@/components/netflix-logo"
import { Bell, Search, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import AuthDropdown from "./toggle-auth"

export default function Navbar() {
  const { user, logout } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [authOption, setAuthOption] = useState<"signin" | "signup">("signin")
  const profileMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "home"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 bg-gradient-to-b from-black/80 to-transparent`}
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-12 h-[65px]">
        <div className="flex items-center gap-8">
          <Link href="/browse">
            <NetflixLogo className="h-6 w-24 md:h-8 md:w-28" />
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex gap-4 text-sm">
              <li>
                <Link
                  href="/browse"
                  className={`${currentCategory === "home" ? "text-white font-medium" : "text-gray-300"} hover:text-white`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=tv"
                  className={`${currentCategory === "tv" ? "text-white font-medium" : "text-gray-300"} hover:text-white`}
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=movies"
                  className={`${currentCategory === "movies" ? "text-white font-medium" : "text-gray-300"} hover:text-white`}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=new"
                  className={`${currentCategory === "new" ? "text-white font-medium" : "text-gray-300"} hover:text-white`}
                >
                  New & Popular
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="flex items-center gap-1 text-sm text-gray-300">
              Browse <ChevronDown size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* <button className="text-white">
            <Search size={20} />
          </button> */}

          {user ? (
            <>
              <Link href="/browse?category=kids" className="hidden text-sm text-gray-300 hover:text-white md:block">
                Children
              </Link>
              <div className="relative">
                <button className="text-white">
                  <Bell size={20} />
                </button>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs">
                  1
                </span>
              </div>
              <div className="relative" ref={profileMenuRef}>
                <button className="flex items-center gap-1" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                  <div className="h-8 w-8 rounded bg-teal-500"></div>
                  <ChevronDown
                    size={16}
                    className={`text-white transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`}
                  />
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded bg-black/90 p-2 shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="w-full rounded px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-800"
                    >
                      Sign out of Netflix
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Desktop view */}
              <div className="hidden md:block">
                <AuthDropdown/>
              </div>

              {/* Mobile view */}
              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700 text-white text-sm">
                      {authOption === "signin" ? "Sign In" : "Sign Up"}
                    </Button>
                  </DropdownMenuTrigger>
                  
                  <AuthDropdown />
                </DropdownMenu>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
