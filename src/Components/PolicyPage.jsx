import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './policies.css';

export const policies = {
  returns: {
    path: '/return-policy', title: 'Return & Refund Policy',
    intro: 'How cancellations, service issues, and refunds are handled at BuildZone IT Solution.',
    sections: [
      ['Services covered', 'This policy applies to website and mobile app development, custom software, design, hosting, maintenance, training, and support purchased from BuildZone IT Solution. Our services and digital deliverables do not involve physical goods to be returned.'],
      ['Cancelling a project', 'Contact us as soon as possible if you wish to cancel an order. If work has not started and no third-party costs have been incurred, the payment is eligible for a full refund. Once work has started, we assess any refund against the work already completed and costs incurred, and provide a written breakdown. Any specific cancellation terms in your accepted quotation will be disclosed before payment.'],
      ['Service issues and undelivered work', 'If a deliverable does not meet the agreed scope, contact us with the details so we can review and correct it. If we cannot deliver the agreed service, the payment for the undelivered portion is eligible for a refund. Completed and accepted work is generally non-refundable, except where a refund is required by applicable law.'],
      ['Hosting and third-party purchases', 'You may request cancellation of hosting or maintenance before the next renewal. Fees for an already supplied service period are generally non-refundable. Domain registrations, licences, and other third-party purchases already made on your behalf are subject to the provider’s refund rules, which will be disclosed before purchase.'],
      ['Duplicate or incorrect payments', 'Please report duplicate payments or an incorrect charge with the invoice number and payment reference. Verified duplicate payments and amounts charged in error are eligible for a refund. Do not send your full card number, CVV, or banking password.'],
      ['Requesting and receiving a refund', 'Email buildzone4u@gmail.com with your name, invoice or order reference, payment date, and reason for the request. We will review the request and confirm the decision and any refundable amount in writing. Approved refunds are submitted to the original payment method within 7 business days of approval. Your bank or payment provider may take additional time to credit your account.'],
      ['Your rights', 'This policy does not limit any rights or remedies you have under applicable Sri Lankan law. Contact us if you have a question or wish to raise a concern.'],
    ],
  },
  privacy: {
    path: '/privacy-policy', title: 'Privacy Policy',
    intro: 'How BuildZone IT Solution collects and uses information when you contact us or purchase our services.',
    sections: [
      ['Information we collect', 'When you contact us, we receive the name, email address, subject, and message you submit. For a service order, we may also receive your telephone number, billing details, project requirements, correspondence, invoice details, and payment references. Please only share information needed for your enquiry or project.'],
      ['How we use information', 'We use this information to respond to enquiries, prepare quotations, provide and support services, communicate about projects, manage invoices and refunds, and maintain business records. We do not sell your personal information.'],
      ['Payments through PayHere', 'When PayHere is offered as a payment option, payment details are processed by PayHere and its payment partners. BuildZone IT Solution does not collect or store full card numbers or CVV codes. We may receive transaction references, payment status, and details needed to match a payment to an invoice. PayHere’s own privacy policy applies to information it processes.'],
      ['Service providers and sharing', 'The website uses EmailJS to send contact form messages and Google Maps to display our location. External font and script providers may receive technical information such as your IP address when their resources load. We may share information with providers needed to deliver your agreed services, process payments, or meet legal obligations, and only to the extent needed for those purposes.'],
      ['Browser storage and third-party resources', 'Embedded maps, fonts, and other external services may use cookies or collect technical information under their own policies. You can manage cookies and clear any previously stored website data through your browser settings.'],
      ['Retention and security', 'We keep enquiry and project information for as long as needed to respond, provide services, resolve disputes, and meet applicable record-keeping requirements. We take reasonable steps to protect information and limit access to those who need it. No online transmission or storage method can be guaranteed completely secure.'],
      ['Your choices', 'Contact buildzone4u@gmail.com to ask about your information, request a correction or deletion, or withdraw permission for optional communications. We will assess your request and explain any records we must retain for legal or contractual reasons.'],
      ['Policy updates', 'We may update this policy when our website or practices change. The updated version and date will appear on this page.'],
    ],
  },
  terms: {
    path: '/terms-and-conditions', title: 'Terms & Conditions',
    intro: 'The terms for using this website and purchasing services from BuildZone IT Solution in Sri Lanka.',
    sections: [
      ['Our services and your agreement', 'BuildZone IT Solution provides development, design, hosting, maintenance, software, training, and support services. Before a paid engagement, we provide a quotation or written agreement setting out the scope, deliverables, price, payment schedule, and delivery timeline. By accepting a quotation and placing an order, you agree to these terms and the agreed project terms.'],
      ['Pricing and payments', 'The applicable currency, total price, taxes where applicable, and any recurring charges will be stated in your quotation or invoice before payment. Deposits and milestone payments are due as agreed. Where available, online payments are processed through PayHere. A payment receipt confirms the payment; the project scope remains as set out in your accepted quotation.'],
      ['Delivery and project changes', 'Services are delivered digitally through agreed channels such as email, online meetings, deployment, or access to software. The delivery period is specified in the quotation and depends on timely receipt of required materials, approvals, and payments. We will communicate delays and revised dates. Changes outside the agreed scope require agreement on additional cost and time before work proceeds.'],
      ['Customer responsibilities', 'You must provide accurate contact and project information, review deliverables, and supply required content and approvals. You are responsible for having permission to use any materials you provide. Do not use our website or services for unlawful activity or to interfere with other users or systems.'],
      ['Ownership and licences', 'Ownership and licence rights for project deliverables are set out in the written project agreement. Third-party software, fonts, images, domains, and other licensed materials remain subject to their respective owners’ terms. Our website content and branding may not be copied or reused without permission.'],
      ['Hosting, support, and renewals', 'Hosting periods, support coverage, maintenance, renewal prices, and cancellation arrangements are specified in your quotation or service agreement. Continuing support beyond the agreed period requires a separate agreement. Third-party service availability and terms may affect hosted services.'],
      ['Cancellations and refunds', 'Cancellation and refund requests are handled under our Return & Refund Policy. Contact us with your invoice and payment reference so we can review your request.'],
      ['Privacy', 'Our Privacy Policy explains how we handle enquiry, project, and payment-related information. Third-party websites and services linked from this website have their own terms and privacy policies.'],
      ['Service limitations and disputes', 'We provide services according to the agreed scope and do not guarantee outcomes outside that scope, such as specific sales results or search rankings. Nothing in these terms excludes rights or responsibilities that cannot be excluded under applicable law. Please contact us first about a dispute so we can seek a resolution. These terms are governed by the laws of Sri Lanka.'],
      ['Changes to these terms', 'Updates to these terms will be published on this page. Material changes to an existing project agreement require agreement between you and BuildZone IT Solution.'],
    ],
  },
};

export function PolicyLinks({ active }) {
  return Object.entries(policies).map(([key, item]) => (
    <Link key={key} to={item.path} aria-current={active === key ? 'page' : undefined}>{item.title}</Link>
  ));
}

export default function PolicyPage({ policy }) {
  const item = policies[policy];
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${item.title} | BuildZone IT`;
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, [item]);

  return (
    <div className="policy-page">
      <header className="policy-header">
        <Link to="/" className="policy-brand">BuildZone <span>IT</span></Link>
        <Link to="/">← Back to home</Link>
      </header>
      <main className="policy-layout">
        <nav className="policy-nav" aria-label="Business policies">
          <p>BUSINESS POLICIES</p>
          <PolicyLinks active={policy} />
          <a href="/#contact">Contact us</a>
        </nav>
        <article className="policy-document">
          <p className="policy-eyebrow">BUILDZONE IT SOLUTION</p>
          <h1>{item.title}</h1>
          <p className="policy-intro">{item.intro}</p>
          <p className="policy-date">Last updated: <time dateTime="2026-10-11">11 October 2026</time></p>
          {item.sections.map(([title, content], index) => (
            <section key={title}>
              <h2>{index + 1}. {title}</h2>
              <p>{content}</p>
              {policy === 'terms' && title === 'Cancellations and refunds' && <Link to="/return-policy">Read our Return & Refund Policy →</Link>}
              {policy === 'terms' && title === 'Privacy' && <Link to="/privacy-policy">Read our Privacy Policy →</Link>}
              {policy === 'privacy' && title === 'Payments through PayHere' && <a href="https://www.payhere.lk/privacy/" target="_blank" rel="noopener noreferrer">PayHere Privacy Policy ↗</a>}
            </section>
          ))}
          <section className="policy-contact">
            <h2>Contact BuildZone IT Solution</h2>
            <p>1st Floor, No. 38/28, Nelson Lane, Colombo 03, Sri Lanka.</p>
            <a href="mailto:buildzone4u@gmail.com">buildzone4u@gmail.com</a>
            <a href="tel:+94762225001">+94 76 222 5001</a>
          </section>
        </article>
      </main>
      <footer className="policy-bottom">© {new Date().getFullYear()} BuildZone IT Solution. All rights reserved.</footer>
    </div>
  );
}
