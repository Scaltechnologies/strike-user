// Canonical source for the STRIKE Terms & Conditions.
//
// Text is reproduced verbatim from the owner-supplied document. Section
// numbering is kept exactly as supplied (there is no Section 11 in the
// source). Only layout artefacts were normalised: headings that had been run
// into the previous paragraph (19, 29) were split out, and stray spaces
// before full stops after "Private Limited" were removed. Do not edit the
// wording without owner/legal approval — rendered by
// src/pages/TermsOfService.jsx and checked by scripts/check-legal.mjs.
//
// Block shapes are documented in ./privacyPolicy.js.

export const TERMS_AND_CONDITIONS = {
  title: "Terms & Conditions",
  intro: null,
  // No separate effective date was supplied. "Last updated" set per owner
  // instruction, pending confirmation that it is the approved revision date.
  effectiveDate: null,
  lastUpdated: "22 October 2026",
  sections: [
    {
      id: "welcome",
      heading: "Welcome to STRIKE",
      blocks: [
        { type: "p", text: "These Terms & Conditions (the “Terms”) govern access to and use of the STRIKE website, mobile application, digital membership services, subscription services and related technology platform (collectively, the “Platform”)." },
        { type: "p", text: "STRIKE is operated by Strike Technologies Private Limited (“STRIKE”, “we”, “us” or “our”), subject to confirmation of the exact registered legal name below." },
        { type: "p", text: "By accessing the Platform, creating an account, purchasing a membership or using a STRIKE service, you agree to these Terms and to the policies expressly incorporated into them. If you do not agree, do not use the Platform." },
      ],
    },
    {
      id: "about-strike",
      heading: "1. About STRIKE",
      blocks: [
        { type: "p", text: "STRIKE is a digital subscription and membership infrastructure platform that connects customers with participating local businesses (“Vendors”). Customers may discover, purchase and use digital membership cards, prepaid subscriptions, consumption-based benefits, offers and other services made available by participating Vendors." },
        { type: "p", text: "The Platform may support the following journey: discovery, purchase, digital membership, verification, redemption and usage tracking." },
        { type: "p", text: "Unless expressly stated otherwise, STRIKE provides the technology platform and is not the manufacturer, owner or direct provider of the food, beverages, salon, gym, study-hall or other goods and services supplied by a Vendor. This description does not exclude any responsibility that applicable law places on STRIKE." },
      ],
    },
    {
      id: "participating-vendors",
      heading: "2. Participating Vendors",
      blocks: [
        { type: "p", text: "Participating businesses are independent businesses. Subject to applicable law and the specific membership terms, Vendors are responsible for:" },
        {
          type: "ul",
          items: [
            "The goods and services they provide, including quality and quantity.",
            "Availability, operating hours and service delivery.",
            "Vendor-specific membership conditions and fulfilment of eligible benefits.",
            "Applicable warranties and compliance with laws relevant to their business.",
            "The accuracy of information they provide to STRIKE.",
            "Confirming redemptions where the Platform or membership rules require Vendor confirmation.",
          ],
        },
        { type: "p", text: "STRIKE provides technology infrastructure for memberships and transactions but does not control every aspect of a Vendor’s independent operations. STRIKE will handle matters for which it is responsible under these Terms and applicable law. Nothing in these Terms limits customer rights or remedies that cannot lawfully be excluded." },
      ],
    },
    {
      id: "eligibility",
      heading: "3. Eligibility",
      blocks: [
        { type: "p", text: "You may use STRIKE only in accordance with applicable laws of India. Users aged 18 years or older may create an account and enter into transactions for which they are legally eligible. A person under 18 may access only those features that are permitted by applicable law and STRIKE’s actual age policy, with the consent and supervision of a parent or legal guardian where required. A minor must not independently enter into a purchase or membership contract where the law requires contractual capacity; any such transaction must be completed by an eligible adult or otherwise handled as permitted by law. If a parent or legal guardian does not provide consent where consent is required, the minor must discontinue the relevant use. STRIKE may restrict or terminate access where it reasonably believes a user is ineligible or has misrepresented their age, subject to applicable law. You must provide accurate and complete information when using the Platform." },
      ],
    },
    {
      id: "strike-account",
      heading: "4. STRIKE Account",
      blocks: [
        { type: "p", text: "Some features require an account. You agree to:" },
        {
          type: "ul",
          items: [
            "Provide accurate and complete information and keep it updated.",
            "Protect your login credentials and one-time passwords (OTPs).",
            "Not share your account with unauthorised persons.",
            "Notify STRIKE through the published support channel if you suspect unauthorised access.",
            "Take reasonable care with activity carried out through your account, subject to applicable law and STRIKE’s own security obligations.",
          ],
        },
        { type: "p", text: "You must not use another person’s account without authorisation. You are responsible for keeping your login credentials, verification codes, passwords and other account-security information confidential and must not disclose them to unauthorised persons. You must promptly notify STRIKE through the published support channel if you suspect unauthorised access or use. You are responsible for activity carried out through your account to the extent permitted by applicable law, including activity resulting from your failure to take reasonable care of your credentials; this does not make you responsible for activity not reasonably attributable to you or remove STRIKE’s own legal obligations. STRIKE may disable, restrict, suspend or terminate an account or credentials where reasonably necessary because of suspected unauthorised use, fraud, security risk or a material breach of these Terms, subject to applicable law and any notice or review process that is required or offered by STRIKE." },
      ],
    },
    {
      id: "digital-memberships",
      heading: "5. Digital Memberships",
      blocks: [
        { type: "p", text: "STRIKE may offer digital memberships, subscriptions, passes and prepaid benefits. Each membership may have specific terms, which will be displayed before purchase where applicable and form part of the agreement for that membership." },
        {
          type: "ul",
          items: [
            "Price and applicable charges.",
            "Activation date and validity period.",
            "Benefits, units and usage limits.",
            "Participating Vendor(s), eligible locations and time restrictions.",
            "Redemption and Vendor-confirmation requirements.",
            "Renewal, cancellation and refund conditions.",
          ],
        },
        { type: "p", text: "Please review the membership-specific information before purchase. If a material restriction is not clearly disclosed before purchase, the matter will be handled in accordance with applicable law and the relevant approved policy." },
      ],
    },
    {
      id: "prepaid-memberships-and-consumption-units",
      heading: "6. Prepaid Memberships and Consumption Units",
      blocks: [
        { type: "p", text: "Some memberships may provide a specified number of meals, visits, services or other eligible consumption units during a defined validity period. The applicable membership information should state the unit type, number of units, activation and expiry rules, eligible Vendor, redemption conditions and restrictions." },
        { type: "p", text: "Unused units do not constitute cash or a deposit balance and cannot be exchanged for cash unless the membership terms expressly provide otherwise or applicable law requires a different outcome." },
      ],
    },
    {
      id: "membership-benefits",
      heading: "7. Membership Benefits",
      blocks: [
        { type: "p", text: "Depending on the membership, benefits may include prepaid products or services, discounts, special offers, member-only pricing, loyalty benefits, priority or early access, Vendor-specific benefits or other benefits described on the Platform." },
        { type: "p", text: "Benefits may vary by Vendor and plan. A Vendor or STRIKE may change or discontinue an offer only to the extent permitted by the disclosed membership terms and applicable law. Any change affecting an existing purchase will be handled under the applicable membership terms and law." },
      ],
    },
    {
      id: "purchase-and-payment",
      heading: "8. Purchase and Payment",
      blocks: [
        { type: "p", text: "Membership prices and applicable charges will be displayed before checkout is completed. The amount payable may include the membership price, applicable taxes, platform or service charges and other charges disclosed at checkout. You agree to pay the amount displayed at checkout." },
        { type: "p", text: "Payments may be processed through third-party payment service providers. A purchase is treated as successful after STRIKE receives confirmation of successful payment and the membership is issued or otherwise made available as described at checkout." },
        { type: "p", text: "If an amount is debited but the membership is not successfully issued, STRIKE will investigate the transaction and, where appropriate, facilitate a reversal or refund in accordance with applicable law and the payment provider’s processes. Pending, failed, duplicate or disputed transactions may be reported through the support channel in Section 26." },
      ],
    },
    {
      id: "pricing-and-promotions",
      heading: "9. Pricing and Promotions",
      blocks: [
        { type: "p", text: "The price applicable to a membership is generally the price displayed when you complete the purchase. STRIKE or Vendors may change prices for future purchases." },
        { type: "p", text: "Promotions, discounts and offers may be subject to eligibility rules, validity periods, maximum usage, minimum purchase requirements, Vendor or payment restrictions, geographic restrictions, blackout periods and limited availability. Unless expressly stated otherwise, promotions cannot be combined with other offers. STRIKE may correct pricing or promotional errors and modify or withdraw promotions where permitted by applicable law. Changes will not override mandatory customer rights." },
      ],
    },
    {
      id: "redemption",
      heading: "10. Redemption",
      blocks: [
        { type: "p", text: "A membership may be redeemed only in accordance with its applicable conditions. The Vendor may need to verify the membership before providing the relevant goods or services. STRIKE may record each redemption to maintain an accurate membership record. A successful redemption may reduce the available units or entitlement in accordance with the applicable membership rules." },
        { type: "p", text: "Where Vendor confirmation is required by the applicable redemption flow, a redemption is completed only after the Vendor confirms the transaction through STRIKE or another authorised STRIKE mechanism. STRIKE may investigate disputed, duplicate, suspicious or unauthorised redemptions and may correct records where appropriate, subject to applicable law and the evidence available." },
      ],
    },
    {
      id: "unauthorised-use-and-fraud",
      heading: "12. Unauthorised Use and Fraud",
      blocks: [
        { type: "p", text: "You must not:" },
        {
          type: "ul",
          items: [
            "Share screenshots, QR codes or credentials to enable unauthorised use.",
            "Duplicate or manipulate memberships, QR codes or digital credentials.",
            "Circumvent redemption controls or use another person’s membership without authorisation.",
            "Make fraudulent redemption claims or manipulate promotional benefits.",
            "Create fraudulent accounts or obtain benefits through technical or operational abuse.",
          ],
        },
        { type: "p", text: "STRIKE may restrict, suspend or terminate a membership or account involved in suspected fraud or abuse, subject to applicable law and any review process that applies." },
      ],
    },
    {
      id: "cancellation-and-refunds",
      heading: "13. Cancellation and Refunds",
      blocks: [
        { type: "p", text: "Cancellation and refund eligibility depends on the membership-specific terms, any applicable Vendor terms, activation status, benefits or units already used, the reason for the request, the refund policy shown at purchase and applicable law." },
        { type: "p", text: "A membership clearly identified as non-refundable may be non-refundable except where STRIKE expressly permits a refund or applicable law requires one. No term in this section removes any non-waivable statutory right. Where a refund is approved, it will generally be processed through the original payment method or another lawful method. Actual processing time may depend on the payment provider." },
      ],
    },
    {
      id: "vendor-closure-or-service-failure",
      heading: "14. Vendor Closure or Service Failure",
      blocks: [
        { type: "p", text: "If a Vendor permanently closes, materially stops providing a subscribed service or is unable to honour a purchased membership, STRIKE may, where reasonably possible and consistent with the membership terms and applicable law:" },
        {
          type: "ul",
          items: [
            "Assist with resolution and communicate with the Vendor.",
            "Offer an alternative solution or transfer to another participating Vendor, where available and appropriate.",
            "Facilitate an applicable refund or another reasonable remedy.",
          ],
        },
        { type: "p", text: "The available remedy will depend on the circumstances, the membership terms and applicable law. This section does not guarantee that a replacement Vendor or particular remedy will always be available." },
      ],
    },
    {
      id: "service-availability",
      heading: "15. Service Availability",
      blocks: [
        { type: "p", text: "Vendor services may be temporarily unavailable due to business hours, holidays, capacity limits, temporary closure, maintenance, public events, operational circumstances, force majeure events or other circumstances outside reasonable control. Purchasing a membership does not guarantee immediate availability at every moment unless the membership expressly provides such a guarantee. Any remedy for material unavailability remains subject to the applicable terms and law." },
      ],
    },
    {
      id: "customer-responsibilities",
      heading: "16. Customer Responsibilities",
      blocks: [
        { type: "p", text: "You agree to use STRIKE lawfully, honestly and responsibly. You must not:" },
        {
          type: "ul",
          items: [
            "Use STRIKE for unlawful purposes or provide false information.",
            "Commit fraud, abuse promotional offers or attempt unauthorised access.",
            "Reverse engineer the Platform or interfere with its security.",
            "Introduce malicious software or scrape or systematically copy Platform content without authorisation.",
            "Misrepresent your identity or harass or abuse Vendors or STRIKE personnel.",
            "Circumvent usage or redemption restrictions.",
            "Resell memberships or benefits where prohibited by the applicable terms or law.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "17. Intellectual Property",
      blocks: [
        { type: "p", text: "The STRIKE name, logo, trademarks, software, Platform design, interface, graphics, text, databases, technology and other intellectual property are owned by or licensed to Strike Technologies Private Limited. Except as expressly permitted by law or with prior written permission, you may not copy, modify, reproduce, distribute, sell, license, reverse engineer, create derivative works from or commercially exploit STRIKE intellectual property. Third-party trademarks remain the property of their respective owners." },
      ],
    },
    {
      id: "user-content-reviews-and-feedback",
      heading: "18. User Content, Reviews and Feedback",
      blocks: [
        { type: "p", text: "Where STRIKE allows reviews, ratings, comments, photographs, feedback or other user content, you are responsible for what you submit and represent that you have the necessary rights to submit it. You must not submit fake reviews, misleading or defamatory information, unlawful content, impersonation, content intended to manipulate ratings or content that infringes another person’s rights." },
        { type: "p", text: "Subject to applicable law, you grant STRIKE a non-exclusive, worldwide, royalty-free licence to use submitted content for operating, improving and promoting the Platform. STRIKE may remove content that violates these Terms or applicable law." },
      ],
    },
    {
      id: "platform-availability",
      heading: "19. Platform Availability",
      blocks: [
        { type: "p", text: "STRIKE aims to provide reliable services but does not guarantee that the Platform will always be available, uninterrupted, error-free, completely secure, free from technical defects or compatible with every device. Temporary interruptions may occur due to maintenance, technical problems, network failures, third-party services or circumstances outside STRIKE’s reasonable control. Nothing in this section excludes a responsibility that cannot lawfully be excluded." },
      ],
    },
    {
      id: "third-party-services",
      heading: "20. Third-Party Services",
      blocks: [
        { type: "p", text: "STRIKE may integrate with third-party services such as payment providers, authentication services, mapping services, cloud infrastructure, communication services, analytics services or other technology providers, to the extent actually used. Those services may be governed by their own terms and privacy policies. The Privacy Policy should identify relevant providers and describe data sharing accurately." },
      ],
    },
    {
      id: "strikes-role-and-vendor-responsibility",
      heading: "21. STRIKE’s Role and Vendor Responsibility",
      blocks: [
        { type: "p", text: "STRIKE provides technology infrastructure connecting customers and participating Vendors. Vendors remain responsible for the underlying goods and services they provide, including quality, availability, staff conduct, business operations and fulfilment obligations. STRIKE remains responsible for its own obligations under these Terms and applicable law. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited." },
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "22. Limitation of Liability",
      blocks: [
        { type: "p", text: "To the maximum extent permitted by applicable law, STRIKE will not be liable for indirect, incidental, special or consequential losses arising from matters outside STRIKE’s reasonable control or from independent acts or omissions of Vendors. This limitation applies only to the extent legally permitted and does not apply to liability that cannot lawfully be excluded or limited. Nothing in this section is intended to remove or restrict statutory rights available to consumers." },
      ],
    },
    {
      id: "fraud-security-and-misuse",
      heading: "23. Fraud, Security and Misuse",
      blocks: [
        { type: "p", text: "STRIKE may investigate activity that appears fraudulent, abusive, suspicious or inconsistent with legitimate use. Where appropriate and legally permitted, STRIKE may suspend an account, restrict a membership, disable redemption, cancel fraudulent transactions, require additional verification, seek recovery of amounts obtained through fraud or take appropriate legal action." },
      ],
    },
    {
      id: "suspension-and-termination",
      heading: "24. Suspension and Termination",
      blocks: [
        { type: "p", text: "STRIKE may suspend or terminate access to the Platform or particular services where reasonably necessary because of a violation of these Terms, fraud, abuse, security risks, illegal activity, membership misuse, repeated violations, payment-related issues or legal or regulatory requirements." },
        { type: "p", text: "Termination does not automatically eliminate rights or obligations that arose before termination. Treatment of active memberships, unused units and any applicable refund or statutory remedy will be determined under the relevant membership terms and applicable law." },
      ],
    },
    {
      id: "privacy",
      heading: "25. Privacy",
      blocks: [
        { type: "p", text: "Your use of STRIKE is also governed by the STRIKE Privacy Policy, which explains how STRIKE collects, uses, stores, shares and otherwise processes personal data. The Privacy Policy should be accessible from the Platform and kept consistent with actual app, backend, permission, payment and third-party SDK behaviour. It forms part of the overall framework governing use of the Platform to the extent permitted by law." },
      ],
    },
    {
      id: "complaints-and-grievance-redressal",
      heading: "26. Complaints and Grievance Redressal",
      blocks: [
        { type: "p", text: "For complaints about a membership, payment, redemption, Vendor service, refund, account, Platform functionality or another STRIKE-related matter, contact STRIKE using the support channel published on the Platform or in the contact details below. STRIKE will endeavour to acknowledge and address complaints within the manner and timelines required by applicable law." },
      ],
    },
    {
      id: "changes-to-these-terms",
      heading: "27. Changes to These Terms",
      blocks: [
        { type: "p", text: "STRIKE may update these Terms from time to time. The updated version will be published on the Platform with a revised “Last Updated” date. Where required by applicable law, STRIKE will provide additional notice of material changes. Continued use after the effective date of revised Terms constitutes acceptance only to the extent permitted by applicable law. Changes will not remove rights that have already accrued where law protects those rights." },
      ],
    },
    {
      id: "governing-law-and-jurisdiction",
      heading: "28. Governing Law and Jurisdiction",
      blocks: [
        { type: "p", text: "These Terms are governed by the laws of India. Subject to applicable consumer-protection laws and other mandatory legal requirements, disputes will be subject to the jurisdiction of courts having appropriate jurisdiction over the matter. Nothing in these Terms prevents a consumer from exercising a statutory right or remedy available under applicable law." },
      ],
    },
    {
      id: "severability",
      heading: "29. Severability",
      blocks: [
        { type: "p", text: "If any provision of these Terms is found invalid, unlawful or unenforceable, it will be interpreted or modified to the minimum extent necessary to make it enforceable where legally possible. The remaining provisions will continue in effect." },
      ],
    },
    {
      id: "entire-agreement",
      heading: "30. Entire Agreement",
      blocks: [
        { type: "p", text: "These Terms, together with the STRIKE Privacy Policy, applicable Cancellation and Refund Policy, membership-specific terms and any Vendor-specific terms disclosed at purchase, constitute the principal terms governing use of the Platform." },
        { type: "p", text: "If a specific membership term displayed at the time of purchase conflicts with these general Terms, the specific term will govern that membership to the extent of the conflict, subject to applicable law. No policy or term may override mandatory legal rights." },
      ],
    },
    {
      id: "contact-and-legal-information",
      heading: "31. Contact and Legal Information",
      blocks: [
        { type: "p", text: [{ b: "STRIKE" }] },
        { type: "p", text: [{ b: "Legal Entity:" }, " Strike Technologies Private Limited."] },
        { type: "p", text: [{ b: "Registered Office:" }, " Flat No. 305, Tirumala Enclave Apartment, Chirala, Prakasam, Bapatla District, Andhra Pradesh, India – 523155"] },
        { type: "p", text: [{ b: "Email:" }, " ", { a: "support.striketechnologies@gmail.com", to: "mailto:support.striketechnologies@gmail.com" }] },
        { type: "p", text: [{ b: "Phone:" }, " ", { a: "8143604709", to: "tel:+918143604709" }] },
        { type: "p", text: [{ b: "Website:" }, " ", { a: "www.strikeapp.in", to: "/" }] },
        { type: "p", text: "© 2026 Strike Technologies Private Limited. All rights reserved." },
      ],
    },
  ],
};
