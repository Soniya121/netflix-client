"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

export default function LoginForm({ isLoginPage = false }: { isLoginPage?: boolean }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectPath = searchParams.get("redirect") || "/browse"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch(`https://netflix-server-3gay.onrender.com/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Login failed")
      }

      const data = await response.json();
      // Save token or user info if needed
      login(data)
      router.push(redirectPath)
    } catch (err: any) {
      console.error("Login error:", err)
      setError(err.message)
    }
  }

  if (isLoginPage) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email or phone number"
            className="h-12 bg-gray-800 border-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            className="h-12 bg-gray-800 border-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
          Sign In
        </Button>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-400">
              Remember me
            </label>
          </div>
          <a href="#" className="text-gray-400 hover:underline">
            Need help?
          </a>
        </div>
        <div className="mt-12 text-gray-400 text-sm">
          <p>
            New to Netflix?{" "}
            <a href="/" className="text-white hover:underline">
              Sign up now
            </a>
            .
          </p>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex w-full max-w-xl flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        placeholder="Email address"
        className="h-12 flex-1 bg-black/60 border-gray-600 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="h-12 bg-red-600 hover:bg-red-700 px-6 text-white">
        Get Started <ChevronRight className="ml-1" size={20} />
      </Button>
    </form>
  )
}
