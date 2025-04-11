"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

type FormData = {
  name: string
  email: string
  password: string
}

type FormErrors = {
  name?: string
  email?: string
  password?: string
  [key: string]: string | undefined
}

type ApiRequestData = {
  username: string
  password: string
  name: string
}

export default function RegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formData.password)) {
      newErrors.password = "Password must include uppercase, lowercase, number, and special character"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const requestData: ApiRequestData = {
        username: formData.email,
        password: formData.password,
        name: formData.name,
      }

      const response = await fetch(`https://netflix-server-3gay.onrender.com/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        const errorData: { message?: string } = await response.json()
        console.error("Registration failed:", errorData)
        // You could set an error state here to display to the user
        return
      }

      const data = await response.json()
      console.log("Registration successful:", data)
      router.push("/browse")
    } catch (error) {
      console.error("Registration error:", error instanceof Error ? error.message : String(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`bg-neutral-800 border-neutral-700 h-12 ${
            errors.name ? "border-red-500" : "focus:border-red-500"
          }`}
        />
        {errors.name && (
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <AlertCircle size={14} />
            <span>{errors.name}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email or phone number"
          value={formData.email}
          onChange={handleChange}
          className={`bg-neutral-800 border-neutral-700 h-12 ${
            errors.email ? "border-red-500" : "focus:border-red-500"
          }`}
        />
        {errors.email && (
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <AlertCircle size={14} />
            <span>{errors.email}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`bg-neutral-800 border-neutral-700 h-12 ${
            errors.password ? "border-red-500" : "focus:border-red-500"
          }`}
        />
        {errors.password && (
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <AlertCircle size={14} />
            <span>{errors.password}</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="show-password"
          checked={showPassword}
          onCheckedChange={(checked) => setShowPassword(checked as boolean)}
        />
        <Label htmlFor="show-password" className="text-sm text-gray-400">
          Show password
        </Label>
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 h-12 font-medium" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>

      <div className="flex justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" defaultChecked />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link href="/help" className="hover:underline">
          Need help?
        </Link>
      </div>

      <div className="mt-4 text-gray-400">
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Sign in now
          </Link>
          .
        </p>
      </div>
    </form>
  )
}
