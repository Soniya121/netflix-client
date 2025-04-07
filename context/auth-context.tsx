"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  email: string
} | null

type AuthContextType = {
  user: User
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("netflix-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email: string) => {
    const newUser = { email }
    setUser(newUser)
    localStorage.setItem("netflix-user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("netflix-user")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

