import { PageContainer } from "@/components/page-container"

export default function LegalPage() {
  return (
    <PageContainer title="Legal Notices">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Copyright</h2>
          <p>
            The Streamflix service, including all content provided on the Streamflix service, is protected by copyright,
            trade secret, and other intellectual property laws.
          </p>
          <p className="mt-2">
            Streamflix owns the copyright in the selection, coordination, arrangement, and enhancement of such content,
            as well as in the original content itself.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Trademarks</h2>
          <p>
            "Streamflix" and the Streamflix logo are trademarks of Streamflix, Inc. Other trademarks appearing on the
            Streamflix service are the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Patents</h2>
          <p>
            The Streamflix service is covered by one or more patents owned by Streamflix, including patents covering our
            recommendation and streaming technologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Third-Party Notices</h2>
          <p>
            The Streamflix service may include software components provided by third parties, which may be subject to
            separate license terms. Notices relating to such third-party software are included for your information
            only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">DMCA Notices</h2>
          <p>
            If you believe that your work has been used or copied in a way that constitutes copyright infringement and
            such infringement is occurring on the Streamflix service or on sites linked to from the Streamflix service,
            please provide a written notification to our Designated Agent.
          </p>
          <div className="mt-4">
            <p>
              <strong>Designated Agent:</strong>
            </p>
            <address className="not-italic mt-2">
              Legal Department
              <br />
              Streamflix, Inc.
              <br />
              123 Streaming Avenue
              <br />
              Los Gatos, CA 95032
              <br />
              United States
              <br />
              Email: copyright@streamflix.example
            </address>
          </div>
          <p className="mt-4">Please include the following information in your written notification:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive
              right that is allegedly infringed
            </li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>
              Identification of the material that is claimed to be infringing or to be the subject of infringing
              activity and that is to be removed or access to which is to be disabled
            </li>
            <li>
              Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and
              email address
            </li>
            <li>
              A statement that you have a good faith belief that use of the material in the manner complained of is not
              authorized by the copyright owner, its agent, or the law
            </li>
            <li>
              A statement that the information in the notification is accurate, and under penalty of perjury, that you
              are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
          <p>
            These Legal Notices and any disputes arising under or related to these Legal Notices shall be governed by
            the laws of the State of California, without regard to conflict of laws principles.
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-8">Last Updated: April 12, 2025</p>
      </div>
    </PageContainer>
  )
}
