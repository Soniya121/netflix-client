import { PageContainer } from "@/components/page-container"

export default function TermsPage() {
  return (
    <PageContainer title="Terms of Use">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Streamflix service, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
          <p>
            Streamflix provides a streaming service that allows users to access a wide variety of movies, TV shows, and other content.
            The service may be accessed through various devices and platforms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. User Account</h2>
          <p>
            To access certain features of the service, you may be required to create an account. You are responsible for maintaining
            the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Subscription and Billing</h2>
          <p>
            The service is available through various subscription plans. By subscribing, you agree to pay all fees associated with
            your selected plan. Fees are billed in advance on a monthly or annual basis, depending on your subscription.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Content Usage</h2>
          <p>
            The content available through the service is for your personal, non-commercial use only. You may not copy, distribute,
            or modify any content without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without
            notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of
            Use on this page. Your continued use of the service after such modifications constitutes your acknowledgment of the
            modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
            <br />
            Email: legal@streamflix.example
            <br />
            Phone: 1-800-LEGAL-FX (1-800-534-2539)
          </p>
        </section>
      </div>
    </PageContainer>
  )
}
