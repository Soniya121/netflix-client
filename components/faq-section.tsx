"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 bg-black">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-[#2D2D2D] rounded">
            <button className="w-full flex justify-between items-center p-5 text-left" onClick={() => toggleFAQ(index)}>
              <span className="text-lg font-medium">{item.question}</span>
              <Plus
                className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                size={24}
              />
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-lg">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-lg">
        <p>
          Questions? Call{" "}
          <a href="tel:000-800-919-1743" className="underline">
            000-800-919-1743
          </a>
        </p>
      </div>
    </section>
  )
}

