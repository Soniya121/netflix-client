"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const [language, setLanguage] = useState("English")

  return (
    <div className="inline-flex items-center border border-gray-700 rounded px-2 py-1">
      <Globe size={16} className="mr-2" />
      <select
        className="bg-transparent text-sm outline-none"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Tamil">Tamil</option>
        <option value="Telugu">Telugu</option>
      </select>
    </div>
  )
}

