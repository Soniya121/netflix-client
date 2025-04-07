import Header from "@/components/header"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import LoginForm from "@/components/login-form"
import { getTrendingContent } from "@/lib/constants"

export default function WelcomePage() {
  const trendingContent = getTrendingContent()

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <div className="relative flex-grow">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50"></div>
        </div>

        {/* Header */}
        <Header transparent />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 text-center pt-24">
          <h1 className="text-3xl font-bold md:text-5xl">Unlimited movies, TV shows and more</h1>
          <p className="mt-4 text-lg md:text-xl">Starts at ₹149. Cancel at any time.</p>
          <p className="mt-4 text-lg">Ready to watch? Enter your email to create or restart your membership.</p>

          <LoginForm />

          {/* Preview Content Section */}
          <div className="mt-16 w-full max-w-7xl">
            <h2 className="mb-4 text-center text-2xl font-bold">Popular on Netflix</h2>
            <div className="flex gap-1 overflow-x-auto pb-8 scrollbar-hide">
              {trendingContent.map((item) => (
                <div key={item.id} className="relative min-w-[120px] flex-shrink-0 md:min-w-[160px]">
                  <div className="aspect-video w-full overflow-hidden rounded bg-gray-800">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-1 truncate text-xs font-medium">{item.title}</p>
                  {item.isNew && (
                    <div className="absolute left-0 top-0 bg-red-600 px-1 py-0.5 text-[10px] font-bold">New</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative z-10">
          <FAQSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

