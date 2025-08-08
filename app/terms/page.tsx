'use client';

import Container from '@/components/ui/container';

const TermsPage = () => {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-gray-600">
            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-gray-600">
            The materials on this website are provided on an 'as is' basis. No warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-gray-600">
            In no event shall this website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Links</h2>
          <p className="text-gray-600">
            This website has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by this website of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Modifications</h2>
          <p className="text-gray-600">
            This website may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p className="text-gray-600">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsPage;