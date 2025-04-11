"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AuthDropdown() {
    const [selectedOption, setSelectedOption] = useState<"login" | "signup">("login")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="default"
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded flex items-center gap-2"
                >
                    {selectedOption === "login" ? "Log In" : "Sign Up"}
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-black/90 border border-gray-700 text-white">
                <Link href="/login" className="w-full">
                    <DropdownMenuItem
                        onClick={() => setSelectedOption("login")}
                        className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer"
                    >
                        Log In
                    </DropdownMenuItem>
                </Link>
                <Link href="/register" className="w-full">
                    <DropdownMenuItem
                        onClick={() => setSelectedOption("signup")}
                        className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer"
                    >
                        Sign Up
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
