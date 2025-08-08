import React from 'react';
import Container from '@/components/ui/container';

const PrivacyPolicy = () => {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Data Collection</h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you use our website, including:
          - Contact information (name, email)
          - Messages sent through the contact form
          - Usage data and analytics
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Cookie Usage</h2>
        <p className="mb-4">
          This website uses cookies to enhance user experience. Cookies are small text files stored on your device that help us:
          - Remember your preferences
          - Analyze website traffic
          - Optimize site performance
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Rights</h2>
        <p className="mb-4">
          You have the right to:
          - Access your personal data
          - Request correction of your data
          - Request deletion of your data
          - Opt-out of data collection
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
        <p className="mb-4">
          For any privacy-related questions or concerns, please contact us at:
          <br />
          Email: privacy@example.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Updates to Privacy Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;