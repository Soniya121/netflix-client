import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"

const footerLinks = [
  {
    title: "Privacy",
    href: "/privacy",
  },
  {
    title: "Legal Notices",
    href: "/legal",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-gray-500 py-10 px-4 md:px-12 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-sm">
            Questions? Call{" "}
            <a href="tel:000-800-919-1743" className="hover:underline">
              000-800-919-1743
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-y-4 gap-x-6 mb-8">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm hover:underline">
              {link.title}
            </Link>
          ))}
        </div>
        <LanguageSelector />
        <p className="mt-6 text-xs">Netflix India</p>
      </div>
    </footer>
  )
}

