import type React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface PageContainerProps {
    children: React.ReactNode
    title: string
}

export function PageContainer({ children, title }: PageContainerProps) {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <Navbar />
            <main className="flex-1 py-10 px-12">
                <div className="container py-8 md:py-12">
                    <h1 className="mb-8 text-3xl font-bold tracking-tight">{title}</h1>
                    <div className="prose prose-invert max-w-none">{children}</div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
