import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"

const footerLinks = [
  {
    title: "FAQ",
    href: "/help/faq",
  },
  {
    title: "Investor Relations",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
  {
    title: "Speed Test",
    href: "#",
  },
  {
    title: "Help Centre",
    href: "/help",
  },
  {
    title: "Jobs",
    href: "#",
  },
  {
    title: "Cookie Preferences",
    href: "#",
  },
  {
    title: "Legal Notices",
    href: "#",
  },
  {
    title: "Account",
    href: "/account",
  },
  {
    title: "Ways to Watch",
    href: "#",
  },
  {
    title: "Corporate Information",
    href: "#",
  },
  {
    title: "Only on Netflix",
    href: "#",
  },
  {
    title: "Media Centre",
    href: "#",
  },
  {
    title: "Terms of Use",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6 mb-8">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-xs hover:underline">
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

