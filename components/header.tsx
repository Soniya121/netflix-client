"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { NetflixLogo } from "@/components/netflix-logo"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import AuthDropdown from "./toggle-auth"

type HeaderProps = {
  showSignIn?: boolean
  showLanguageSelector?: boolean
  transparent?: boolean
}

export default function Header({ showSignIn = true, showLanguageSelector = true, transparent = false }: HeaderProps) {
  const { user } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [authOption, setAuthOption] = useState<"signin" | "signup">("signin")

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
              <>
                {/* Desktop view */}
                <div className="hidden sm:block">
                  {/* <ToggleGroup
                    type="single"
                    value={authOption}
                    onValueChange={(value) => value && setAuthOption(value as "signin" | "signup")}
                  >
                    <Link href="/login" className="inline-block">
                      <ToggleGroupItem
                        value="signin"
                        className="rounded-l-md bg-red-600 text-white data-[state=on]:bg-red-700"
                      >
                        Sign In
                      </ToggleGroupItem>
                    </Link>
                    <Link href="/signup" className="inline-block">
                      <ToggleGroupItem
                        value="signup"
                        className="rounded-r-md bg-red-600 text-white data-[state=on]:bg-red-700"
                      >
                        Sign Up
                      </ToggleGroupItem>
                    </Link>
                  </ToggleGroup> */}
                  <AuthDropdown/>
                </div>

                {/* Mobile view */}
                <div className="sm:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                        {authOption === "signin" ? "Sign In" : "Sign Up"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <Link href="/login">
                        <DropdownMenuItem onClick={() => setAuthOption("signin")}>Sign In</DropdownMenuItem>
                      </Link>
                      <Link href="/register">
                        <DropdownMenuItem onClick={() => setAuthOption("signup")}>Sign Up</DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            ))}
        </div>
      </div>
    </header>
  )
}
