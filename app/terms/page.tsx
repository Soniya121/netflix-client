import { PageContainer } from "@/components/page-container"

export default function TermsPage() {
  return (
    <PageContainer title="Terms of Use">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p>
            These Terms of Use govern your use of our streaming service, including our website, applications, and user
            interfaces, as well as all content and software associated with our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Membership and Billing</h2>
          <p>
            Your Streamflix membership continues until terminated. To use the Streamflix service, you must have internet
            access and a Streamflix ready device, and provide a current, valid, accepted method of payment.
          </p>
          <p className="mt-2">
            We may offer different membership plans, including special promotional plans or memberships with different
            limitations. Some of these membership plans may have differing conditions and limitations, which will be
            disclosed at your sign-up or in other communications made available to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Streamflix Service</h2>
          <p>
            The Streamflix service and any content accessed through the service are for your personal and non-commercial
            use only. During your Streamflix membership, we grant you a limited, non-exclusive, non-transferable right
            to access the Streamflix service and view Streamflix content.
          </p>
          <p className="mt-2">
            The Streamflix service, including the content library, is regularly updated. In addition, we continually
            test various aspects of our service, including our website, user interfaces, promotional features, and
            availability of Streamflix content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Passwords and Account Access</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information, including your
            password, and for all activity that occurs under your account. You should not disclose your password to any
            third party.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Warranties and Limitations on Liability</h2>
          <p>
            The Streamflix service is provided "as is" and without warranty or condition. In particular, our service may
            not be uninterrupted or error-free. You waive all special, indirect, and consequential damages against us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of the state of
            California, U.S.A., without regard to conflict of laws provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Changes to Terms of Use</h2>
          <p>
            We may, from time to time, change these Terms of Use. We will notify you at least 30 days before such
            changes apply to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Electronic Communications</h2>
          <p>
            We will send you information relating to your account (e.g., payment authorizations, invoices, changes in
            password or payment method, confirmation messages, notices) in electronic form only, for example via emails
            to your email address provided during registration.
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-8">Last Updated: April 12, 2025</p>
      </div>
    </PageContainer>
  )
}
