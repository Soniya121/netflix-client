import Header from "@/components/header"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"
import FAQSection from "@/components/faq-section"
import { Suspense } from "react"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header showSignIn={false} showLanguageSelector={false} />

      {/* Login Form with Background */}
      <div className="relative z-10 mx-auto max-w-md px-4 py-16 pt-32 w-[600px]">
        <div className="relative">
          {/* Background Image only behind the form */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>
          </div>

          <div className="relative z-10 rounded bg-black/80 p-8">
            <h1 className="mb-6 text-3xl font-bold">Sign In</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
            <LoginForm isLoginPage />
            </Suspense>
          </div>
        </div>
      </div>

      {/* FAQ Section with plain black background */}
      <div className="bg-black z-10">
        <FAQSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

