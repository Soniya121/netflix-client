import { PageContainer } from "@/components/page-container"

export default function PrivacyPage() {
  return (
    <PageContainer title="Privacy Statement">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p>
            This Privacy Statement explains our practices regarding the collection, use, and disclosure of information
            that we process in the course of our business, including information we receive through our streaming
            platform and other websites and services that we own or operate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Information you provide to us:</strong> We collect information you provide when you set up an
              account, use our service, or communicate with us.
            </li>
            <li>
              <strong>Information we collect automatically:</strong> We collect information about your interactions with
              our service, including the titles you watch, your search queries, and your device information.
            </li>
            <li>
              <strong>Information from partners:</strong> We receive information from other companies with whom you have
              a relationship with.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Use of Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Provide, personalize, and improve our streaming service</li>
            <li>Process payments and prevent fraudulent activity</li>
            <li>Communicate with you about our service</li>
            <li>Analyze how our service is used</li>
            <li>Market our service and conduct research</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Disclosure of Information</h2>
          <p>
            We may share your information with service providers who perform services on our behalf, partners with whom
            we offer co-branded services, and as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
          <p>
            You have certain choices regarding the information we collect and how it is used, including the ability to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Update your account information</li>
            <li>Control the notifications you receive</li>
            <li>Opt out of certain marketing communications</li>
            <li>Request access to your personal information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <p>
            We use reasonable administrative, logical, physical, and managerial measures to safeguard your personal
            information against loss, theft, and unauthorized access, use, and modification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Statement</h2>
          <p>
            We may change this Privacy Statement from time to time. We will notify you of material changes by posting a
            notice on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Statement or our practices, please contact us at
            privacy@streamflix.example.
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-8">Last Updated: April 12, 2025</p>
      </div>
    </PageContainer>
  )
}
