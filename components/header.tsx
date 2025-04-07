"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { NetflixLogo } from "@/components/netflix-logo"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"

type HeaderProps = {
  showSignIn?: boolean
  showLanguageSelector?: boolean
  transparent?: boolean
}

export default function Header({ showSignIn = true, showLanguageSelector = true, transparent = false }: HeaderProps) {
  const { user } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)

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

  const headerClass = transparent && !isScrolled ? "bg-transparent" : "bg-black"

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${headerClass}`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <Link href="/">
          <NetflixLogo className="h-8 w-28 md:h-10 md:w-36" />
        </Link>
        <div className="flex items-center gap-4">
          {showLanguageSelector && <LanguageSelector />}
          {showSignIn &&
            (user ? (
              <Link href="/browse">
                <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                  Browse
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                  Sign In
                </Button>
              </Link>
            ))}
        </div>
      </div>
    </header>
  )
}

