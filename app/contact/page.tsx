import { PageContainer } from "@/components/page-container"

export default function ContactPage() {
    return (
        <PageContainer title="Contact Us">
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-4">How to Reach Us</h2>
                    <p>
                        We're here to help with any questions or concerns you may have about our streaming service. Below are the
                        different ways you can get in touch with our team.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
                    <p>
                        For questions about your account, billing, or technical issues, our customer support team is available 24/7.
                    </p>
                    <div className="mt-4 space-y-2">
                        <p>
                            <strong>Email:</strong> support@streamflix.example
                        </p>
                        <p>
                            <strong>Phone:</strong> 1-800-STREAM-FX (1-800-787-3263)
                        </p>
                        <p>
                            <strong>Hours:</strong> 24 hours a day, 7 days a week
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Corporate Headquarters</h2>
                    <address className="not-italic">
                        Streamflix, Inc.
                        <br />
                        123 Streaming Avenue
                        <br />
                        Los Gatos, CA 95032
                        <br />
                        United States
                    </address>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Media Inquiries</h2>
                    <p>For press and media inquiries, please contact our public relations team:</p>
                    <p className="mt-2">
                        <strong>Email:</strong> press@streamflix.example
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Content Licensing</h2>
                    <p>If you're interested in licensing your content to Streamflix:</p>
                    <p className="mt-2">
                        <strong>Email:</strong> content@streamflix.example
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Careers</h2>
                    <p>Interested in joining our team? Visit our careers page to see current openings:</p>
                    <p className="mt-2">
                        <a href="/careers" className="text-red-600 hover:underline">
                            Streamflix Careers
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                    <p>Connect with us on social media:</p>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Facebook
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Instagram
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            YouTube
                        </a>
                    </div>
                </section>

                <p className="text-sm text-gray-400 mt-8">
                    We aim to respond to all inquiries within 24-48 hours during business days.
                </p>
            </div>
        </PageContainer>
    )
}
