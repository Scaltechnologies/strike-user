// Canonical source for the STRIKE Privacy Policy.
//
// Text is reproduced verbatim from the owner-approved document
// (STRIKE_Privacy_Policy.pdf, effective 22 October 2026). Do not edit the
// wording here without owner/legal approval — rendered by
// src/pages/PrivacyPolicy.jsx and checked by scripts/check-legal.mjs.
//
// Block shapes (rendered by src/components/LegalContent.jsx):
//   { type: "p",  text }            paragraph
//   { type: "ul", items: [text] }   bulleted list
//   { type: "ol", items: [text] }   numbered list
// `text` is a string or an array of parts:
//   string | { b: string } | { i: string } | { a: string, to: "/route" | "mailto:…" }
// A link part only adds a hyperlink; its visible text is still the approved wording.

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  intro:
    "A clear statement of how STRIKE collects, uses, shares and protects personal information.",
  effectiveDate: "22 October 2026",
  lastUpdated: "22 October 2026",
  sections: [
    {
      id: "introduction",
      heading: "1. Introduction",
      blocks: [
        { type: "p", text: "Strike Technologies (“STRIKE”, “Company”, “we”, “us” or “our”) is committed to protecting the privacy and personal information of individuals who access or use our mobile application, website, and associated services (collectively, the “Platform”)." },
        { type: "p", text: "This Privacy Policy explains how we collect, receive, use, store, process, disclose, retain and protect personal information when you access or use STRIKE, create an account, explore participating businesses, purchase or redeem offers, subscribe to meal plans or memberships, make payments, or otherwise interact with our Platform." },
        { type: "p", text: "STRIKE is designed to connect users with participating businesses and service providers through digital offers, food cards, meal plans, and membership benefits across Food, Wellness and Beauty." },
        { type: "p", text: "This Policy is intended to be read together with our Terms and Conditions and any additional privacy notices displayed when you use particular features of the Platform." },
        { type: "p", text: "Please read this Policy carefully before using STRIKE. Where applicable law requires consent for the collection or processing of personal information, we will seek such consent before undertaking the relevant processing." },
      ],
    },
    {
      id: "scope-and-applicability",
      heading: "2. Scope and Applicability",
      blocks: [
        { type: "p", text: "This Policy applies to:" },
        {
          type: "ul",
          items: [
            "Users who register for or access the STRIKE application or website.",
            "Individuals who purchase, subscribe to, redeem or use STRIKE offers, food cards, meal plans or memberships.",
            "Individuals who communicate with our customer support team.",
            "Visitors who interact with our Platform without creating an account.",
            "Representatives of participating businesses and vendors who interact with STRIKE.",
          ],
        },
        { type: "p", text: "Certain information may be processed by third-party payment providers, authentication providers, vendors or other service providers under their own privacy policies and applicable legal obligations." },
        { type: "p", text: "This Policy does not automatically govern third-party websites, applications or services that STRIKE does not operate or control." },
      ],
    },
    {
      id: "information-we-collect",
      heading: "3. Information We Collect",
      blocks: [
        { type: "p", text: "We collect only the information reasonably necessary to provide, maintain, secure and improve our services, subject to applicable law and the permissions you provide." },
      ],
      subsections: [
        {
          id: "account-and-registration-information",
          heading: "3.1 Account and Registration Information",
          blocks: [
            { type: "p", text: "When you create or access a STRIKE account, we may collect:" },
            {
              type: "ul",
              items: [
                "Full name.",
                "Mobile phone number.",
                "Email address.",
                "Account identifiers and authentication-related information.",
                "Information made available through Google sign-in, if you choose that authentication method.",
                "Account preferences and other details you voluntarily provide.",
              ],
            },
            { type: "p", text: "We use this information to establish and manage your account, verify access, communicate with you and provide the services you request." },
          ],
        },
        {
          id: "address-and-location-information",
          heading: "3.2 Address and Location Information",
          blocks: [
            { type: "p", text: "STRIKE may collect or process address and location information to provide location-dependent features. Depending on the feature you use, this may include:" },
            {
              type: "ul",
              items: [
                "Your saved or provided address.",
                "Your approximate or precise device location, where you grant the relevant permission.",
                "Location information associated with vendor discovery or an eligible delivery or fulfilment service.",
                "Selected service areas and location preferences.",
              ],
            },
            { type: "p", text: "Location information may be used to:" },
            {
              type: "ul",
              items: [
                "Display participating vendors and businesses near you.",
                "Show relevant offers and available services in your area.",
                "Support delivery or fulfilment where such a service is offered.",
                "Determine the applicability of geographical restrictions on offers or memberships.",
                "Help prevent suspicious transactions or misuse of location-dependent benefits.",
              ],
            },
            { type: "p", text: "You may be able to disable device location access through your device settings. However, certain features may not function fully without the relevant permission." },
            { type: "p", text: "STRIKE will not treat permission to access device location as unrestricted permission to track you for unrelated purposes." },
          ],
        },
        {
          id: "transaction-and-purchase-information",
          heading: "3.3 Transaction and Purchase Information",
          blocks: [
            { type: "p", text: "When you purchase or use a STRIKE product or service, we may collect information relating to:" },
            {
              type: "ul",
              items: [
                "Strike Monthly food cards and associated offers.",
                "Strike Mealo weekly, bi-weekly or monthly meal plans.",
                "Strike Memberships across Food, Wellness and Beauty.",
                "Selected offers, participating vendors and membership plans.",
                "Purchase amounts, transaction references and payment status.",
                "Subscription or plan validity, where applicable.",
                "Redemption history, QR-code validation and usage status.",
                "Refund, cancellation, dispute and customer-support records.",
              ],
            },
            { type: "p", text: "This information enables STRIKE to process transactions, administer entitlements, verify eligible redemptions, maintain transaction records and assist with complaints or disputes." },
          ],
        },
        {
          id: "payment-information",
          heading: "3.4 Payment Information",
          blocks: [
            { type: "p", text: "Payments made through STRIKE may be processed by Razorpay or another payment service provider appointed by STRIKE." },
            { type: "p", text: "Payment-related information may include transaction identifiers, payment status, order references, refunds and other information necessary to reconcile transactions." },
            { type: "p", text: "Your payment provider may independently collect and process information such as payment instrument details, billing information and authentication data in accordance with its own terms, privacy policy and applicable regulations." },
            {
              type: "p",
              text: [
                { b: "STRIKE does not intend to collect or store your complete card number, card security code, UPI PIN or banking authentication credentials on its own systems." },
                " Such information should be entered only into the authorised payment provider's secure payment interface.",
              ],
            },
            { type: "p", text: "The actual handling of payment information depends on the payment integration implemented in the Platform." },
          ],
        },
        {
          id: "camera-and-qr-code-information",
          heading: "3.5 Camera and QR-Code Information",
          blocks: [
            { type: "p", text: "STRIKE may request camera permission to enable the scanning of vendor QR codes or other codes used by supported Platform features." },
            { type: "p", text: "Camera access is intended to support the relevant scanning function. STRIKE does not intend to use this permission to capture photographs or videos unrelated to that function." },
            { type: "p", text: "If a scanned QR code contains or refers to transaction, vendor or redemption information, the relevant data may be processed to verify an offer, membership or other eligible benefit." },
            { type: "p", text: "You may deny or revoke camera permission through your device settings, although QR-based features may then be unavailable." },
          ],
        },
        {
          id: "device-technical-and-usage-information",
          heading: "3.6 Device, Technical and Usage Information",
          blocks: [
            { type: "p", text: "When you use STRIKE, we and our authorised technical service providers may process certain technical information, where collected by the application or its underlying infrastructure, including:" },
            {
              type: "ul",
              items: [
                "Device type, operating system and application version.",
                "IP address and basic network information.",
                "Application logs, diagnostic information and crash reports.",
                "Session information and timestamps.",
                "Feature interactions and usage events.",
                "Security-related events and authentication logs.",
              ],
            },
            { type: "p", text: "This information may be used to troubleshoot technical issues, improve application stability, protect accounts, detect fraud and understand how the Platform is used." },
            { type: "p", text: "STRIKE does not intend to collect an Advertising ID as part of its current stated data-collection design. If our implementation or use of third-party software changes, we will update the relevant disclosures and permissions as required." },
          ],
        },
        {
          id: "communications-and-customer-support",
          heading: "3.7 Communications and Customer Support",
          blocks: [
            { type: "p", text: "When you contact STRIKE, we may collect the information you choose to provide, including your name, contact details, transaction references, complaint details and communications with our support team." },
            { type: "p", text: "We use this information to answer enquiries, resolve complaints, investigate disputed transactions and improve our services." },
          ],
        },
        {
          id: "vendor-and-business-information",
          heading: "3.8 Vendor and Business Information",
          blocks: [
            { type: "p", text: "Participating vendors may provide business-related information such as their business name, location, contact information, operating details, products, services, offers, membership benefits and redemption rules." },
            { type: "p", text: "Where a vendor's representative uses a STRIKE business account, we may also process the representative's name, contact details, account credentials and activity records as necessary to administer the business relationship." },
            { type: "p", text: "Vendor information may be displayed to users to facilitate discovery and use of available offers and services." },
          ],
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "4. How We Use Your Information",
      blocks: [
        { type: "p", text: "Subject to applicable law and the purposes disclosed to you, STRIKE may use personal information for the following purposes:" },
        {
          type: "ol",
          items: [
            [{ b: "Account management:" }, " To create, authenticate, maintain and secure your account."],
            [{ b: "Service delivery:" }, " To provide access to food cards, meal plans, memberships, offers and other available Platform features."],
            [{ b: "Vendor discovery:" }, " To display relevant participating businesses and location-dependent offers."],
            [{ b: "Transaction processing:" }, " To process purchases, verify payments, record redemptions and administer refunds or cancellations."],
            [{ b: "Membership administration:" }, " To verify membership eligibility, plan validity, usage limits and available benefits."],
            [{ b: "QR verification:" }, " To validate eligible vendor visits, offer redemptions or other supported transactions."],
            [{ b: "Customer support:" }, " To respond to questions, complaints, refund requests and disputes."],
            [{ b: "Communication:" }, " To send account verification messages, transaction confirmations, service notices, security alerts and important policy updates."],
            [{ b: "Personalisation:" }, " To present relevant vendors, categories, offers and features based on your stated preferences and permitted usage information."],
            [{ b: "Security and fraud prevention:" }, " To detect suspicious activities, unauthorised access, fraudulent redemptions and misuse of the Platform."],
            [{ b: "Platform improvement:" }, " To diagnose errors, improve performance, test features and understand aggregated usage patterns."],
            [{ b: "Legal compliance:" }, " To comply with applicable laws, lawful requests, tax obligations, accounting requirements and regulatory requirements."],
            [{ b: "Business operations:" }, " To maintain records, administer vendor relationships and support legitimate business operations."],
            [{ b: "Marketing communications:" }, " To send promotional communications where permitted by applicable law and, where required, with your consent."],
          ],
        },
        { type: "p", text: "Where processing is based on consent, you may withdraw that consent through the applicable mechanism, subject to legal requirements and the consequences explained in this Policy." },
      ],
    },
    {
      id: "cookies-and-similar-technologies",
      heading: "5. Cookies and Similar Technologies",
      blocks: [
        { type: "p", text: "If STRIKE operates a website or uses web-based features, cookies or similar technologies may be used where applicable to:" },
        {
          type: "ul",
          items: [
            "Maintain sessions and authenticate users.",
            "Remember preferences.",
            "Improve website functionality.",
            "Measure performance and diagnose technical issues.",
            "Understand aggregated traffic and usage patterns.",
          ],
        },
        { type: "p", text: "The use of these technologies depends on the services and technical integrations actually deployed." },
        { type: "p", text: "You may manage cookies through your browser settings where supported. Disabling certain cookies may affect the operation of some website features." },
        { type: "p", text: "This section does not imply that every cookie, tracking technology or advertising tool described above is currently deployed by STRIKE." },
      ],
    },
    {
      id: "how-we-share-your-information",
      heading: "6. How We Share Your Information",
      blocks: [
        { type: "p", text: "STRIKE does not intend to sell users' personal information as a standalone commercial product." },
        { type: "p", text: "We may share information with the following categories of recipients when necessary for the purposes described in this Policy and subject to applicable law." },
      ],
      subsections: [
        {
          id: "participating-vendors-and-businesses",
          heading: "6.1 Participating Vendors and Businesses",
          blocks: [
            { type: "p", text: "We may share relevant information with the vendor or business you choose to engage with so that it can verify your purchase, validate an eligible offer, confirm membership benefits, process a redemption or provide the relevant service." },
            { type: "p", text: "For example, a participating restaurant may need a transaction reference or redemption status to verify a STRIKE food card or meal-plan entitlement." },
            { type: "p", text: "We aim to limit vendor access to the information reasonably required for the relevant transaction or service." },
            { type: "p", text: "Vendors are responsible for handling information they receive in accordance with applicable law and their own legal obligations. They must not assume that STRIKE authorises them to use your information for unrelated purposes." },
          ],
        },
        {
          id: "payment-service-providers",
          heading: "6.2 Payment Service Providers",
          blocks: [
            { type: "p", text: "We may share transaction and other necessary information with Razorpay or another authorised payment provider to facilitate payment processing, transaction verification, refunds, dispute resolution and fraud prevention." },
            { type: "p", text: "Payment providers may process information under their own privacy policies and applicable regulatory requirements." },
          ],
        },
        {
          id: "authentication-hosting-and-technical-service-providers",
          heading: "6.3 Authentication, Hosting and Technical Service Providers",
          blocks: [
            { type: "p", text: "We may use third-party providers for services such as:" },
            {
              type: "ul",
              items: [
                "Google sign-in or other authentication functions.",
                "Cloud hosting and database infrastructure.",
                "Application maintenance and technical support.",
                "Security monitoring and fraud prevention.",
                "Diagnostic tools and permitted analytics.",
                "Communication and notification delivery.",
              ],
            },
            { type: "p", text: "Such providers may process relevant information on our behalf to provide the services for which they have been engaged, subject to applicable contractual and legal safeguards." },
            { type: "p", text: "The actual providers used by STRIKE will depend on its deployed technical infrastructure." },
          ],
        },
        {
          id: "legal-and-regulatory-authorities",
          heading: "6.4 Legal and Regulatory Authorities",
          blocks: [
            { type: "p", text: "We may disclose information where reasonably necessary to:" },
            {
              type: "ul",
              items: [
                "Comply with applicable law or a lawful order.",
                "Respond to a valid request from an authorised public authority.",
                "Investigate suspected fraud, unlawful activity or security incidents.",
                "Establish, exercise or defend legal claims.",
                "Protect the rights, safety and property of STRIKE, its users, participating businesses or other persons.",
              ],
            },
            { type: "p", text: "We will handle such disclosures in accordance with applicable law." },
          ],
        },
        {
          id: "business-transfers",
          heading: "6.5 Business Transfers",
          blocks: [
            { type: "p", text: "If STRIKE undergoes a merger, acquisition, restructuring, financing, sale of assets or similar corporate transaction, relevant information may be transferred to the parties involved where legally permitted and subject to appropriate safeguards." },
          ],
        },
        {
          id: "with-your-direction-or-consent",
          heading: "6.6 With Your Direction or Consent",
          blocks: [
            { type: "p", text: "We may disclose information where you specifically request or authorise the disclosure, or where another lawful basis permits it." },
            { type: "p", text: "STRIKE does not authorise unrelated third parties to access personal information merely because they participate in the same business ecosystem." },
          ],
        },
      ],
    },
    {
      id: "location-permissions-and-user-control",
      heading: "7. Location Permissions and User Control",
      blocks: [
        { type: "p", text: "STRIKE may request access to your device's location to show nearby participating businesses or support a location-dependent service." },
        { type: "p", text: "You can manage location permissions through your device settings. You may also be able to enter an address manually where the relevant feature supports it." },
        { type: "p", text: "If you disable location access, nearby vendor discovery or certain delivery-related features may become less accurate or unavailable." },
        { type: "p", text: "We will use location information only for disclosed purposes and other purposes permitted by applicable law." },
      ],
    },
    {
      id: "data-retention-and-deletion",
      heading: "8. Data Retention and Deletion",
      blocks: [
        { type: "p", text: "STRIKE retains personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, subject to applicable law." },
        { type: "p", text: "Retention periods may vary according to the category of information and the reason it is held." },
        { type: "p", text: "For example:" },
        {
          type: "ul",
          items: [
            "Account information may be retained while your account remains active.",
            "Transaction and financial records may be retained for applicable accounting, tax, payment, audit or legal requirements.",
            "Customer-support and dispute records may be retained until the relevant matter is resolved and for any necessary subsequent period.",
            "Security and diagnostic records may be retained for an appropriate period to investigate incidents and protect the Platform.",
            "Information that no longer needs to identify you may be deleted, anonymised or aggregated where appropriate.",
          ],
        },
        { type: "p", text: "When information is no longer required, STRIKE will take reasonable steps to delete it or render it non-identifiable, subject to applicable legal obligations and legitimate retention requirements." },
      ],
      subsections: [
        {
          id: "account-deletion",
          heading: "Account Deletion",
          blocks: [
            {
              type: "p",
              text: [
                "You may request deletion of your STRIKE account and associated personal information through the account-deletion facility made available in the application or through the ",
                { a: "designated external deletion-request mechanism published by STRIKE", to: "/delete-account" },
                ".",
              ],
            },
            { type: "p", text: "Account deletion requests will be processed in accordance with applicable law and the Platform's operational requirements. Information that must lawfully be retained for financial records, fraud prevention, dispute resolution or other legal obligations may be retained for the necessary period, with access and use appropriately restricted where required." },
            { type: "p", text: "Deleting your account may result in the loss of access to unused offers, memberships, meal-plan benefits or other account-linked entitlements, subject to applicable consumer rights and the relevant terms." },
            { type: "p", text: "The availability of an in-app deletion function and an external deletion-request page must be confirmed before the application is published." },
          ],
        },
      ],
    },
    {
      id: "data-security",
      heading: "9. Data Security",
      blocks: [
        { type: "p", text: "STRIKE takes reasonable technical and organisational measures designed to protect personal information against unauthorised access, disclosure, alteration, loss, misuse or destruction." },
        { type: "p", text: "Depending on the systems deployed, these measures may include:" },
        {
          type: "ul",
          items: [
            "Access controls and permission management.",
            "Authentication and account-security safeguards.",
            "Secure communication and data transmission practices.",
            "Monitoring for suspicious activity.",
            "Restricted access to business and administrative systems.",
            "Appropriate safeguards for third-party service providers.",
            "Procedures for responding to security incidents.",
          ],
        },
        { type: "p", text: "No electronic transmission or storage system can be guaranteed to be completely secure. Although we work to protect your information, we cannot promise absolute security." },
        { type: "p", text: "You are responsible for maintaining the confidentiality of your account credentials and promptly reporting suspected unauthorised access." },
        { type: "p", text: "Where a personal data breach triggers a notification obligation under applicable law, STRIKE will take the required steps to notify affected individuals and relevant authorities." },
      ],
    },
    {
      id: "third-party-services-and-external-links",
      heading: "10. Third-Party Services and External Links",
      blocks: [
        { type: "p", text: "The STRIKE Platform may integrate with or direct users to third-party services, including payment gateways, authentication providers and participating businesses." },
        { type: "p", text: "Your interaction with such services may be governed by their own terms and privacy policies." },
        { type: "p", text: "STRIKE does not control the independent privacy practices of third parties and cannot guarantee how they process information outside STRIKE's control. However, where a third party processes information on our behalf, we will take appropriate steps to address applicable privacy and security obligations." },
        { type: "p", text: "We encourage users to review the privacy policies of relevant third-party services before providing information directly to them." },
      ],
    },
    {
      id: "children-and-minors",
      heading: "11. Children and Minors",
      blocks: [
        { type: "p", text: "STRIKE recognises the importance of protecting children’s personal information." },
        { type: "p", text: "Where minors are permitted to use the Platform under STRIKE’s Terms and Conditions, applicable law and the relevant service requirements, the collection and processing of their personal information will be subject to the safeguards and consent requirements prescribed by applicable law." },
        { type: "p", text: "Where verifiable parental or guardian consent is legally required, STRIKE will obtain such consent before undertaking the relevant processing and will apply any additional safeguards required by law." },
        { type: "p", text: "STRIKE will not knowingly process children's personal information in a manner prohibited by applicable law." },
        { type: "p", text: "Parents or lawful guardians who believe that a child's information has been provided or processed inappropriately may contact STRIKE using the contact details below." },
        { type: "p", text: "STRIKE will assess such requests and take appropriate action in accordance with applicable law." },
      ],
    },
    {
      id: "your-privacy-rights-and-choices",
      heading: "12. Your Privacy Rights and Choices",
      blocks: [
        { type: "p", text: "Subject to applicable law, you may have rights to:" },
        {
          type: "ul",
          items: [
            "Obtain information about the personal data STRIKE processes about you.",
            "Request correction or updating of inaccurate or incomplete information.",
            "Request deletion of personal information where legally available.",
            "Withdraw consent for processing where processing is based on consent.",
            "Raise a grievance concerning the handling of your personal information.",
            "Nominate another person to exercise applicable rights in the event of death or incapacity, where provided under applicable law.",
          ],
        },
        { type: "p", text: "To exercise an applicable right, contact us using the details in Section 16. We may request reasonable information to verify your identity and protect your account before acting on your request." },
        { type: "p", text: "We will respond within the period prescribed by applicable law." },
        { type: "p", text: "Withdrawal of consent does not affect processing lawfully completed before withdrawal. It may also affect our ability to provide features that depend on the relevant information." },
        { type: "p", text: "You may opt out of promotional communications using an available unsubscribe mechanism or by contacting us. Essential account, security, transactional and legally required notices may continue where necessary." },
      ],
    },
    {
      id: "data-protection-and-applicable-law",
      heading: "13. Data Protection and Applicable Law",
      blocks: [
        { type: "p", text: "STRIKE intends to handle personal information in accordance with applicable Indian laws and regulations, including, as applicable to the relevant processing and effective legal provisions:" },
        {
          type: "ul",
          items: [
            "The Digital Personal Data Protection Act, 2023 and the applicable rules made under it.",
            "The Information Technology Act, 2000 and applicable rules.",
            "Applicable consumer-protection and electronic-commerce requirements.",
            "Applicable tax, accounting and payment-related obligations.",
          ],
        },
        { type: "p", text: "The applicability and commencement of particular statutory obligations may depend on the relevant legal provisions and implementation timelines." },
        { type: "p", text: "Where required, STRIKE will provide appropriate privacy notices, obtain valid consent, facilitate applicable rights, maintain reasonable security safeguards and comply with legal obligations relating to retention, deletion and personal data breaches." },
      ],
    },
    {
      id: "cross-border-processing",
      heading: "14. Cross-Border Processing",
      blocks: [
        { type: "p", text: "STRIKE may use third-party technology or infrastructure providers whose operations or systems are located in India or other jurisdictions." },
        { type: "p", text: "Where personal information is transferred, accessed or processed outside India, STRIKE will comply with applicable Indian legal requirements and any relevant restrictions or safeguards governing such transfers." },
        { type: "p", text: "The locations of STRIKE’s actual hosting, backup and third-party processing systems depend on the infrastructure deployed." },
      ],
    },
    {
      id: "changes-to-this-privacy-policy",
      heading: "15. Changes to This Privacy Policy",
      blocks: [
        { type: "p", text: "STRIKE may update this Privacy Policy from time to time to reflect changes in its services, technical systems, business practices or legal obligations." },
        { type: "p", text: "The revised version will be published on the STRIKE Platform or another appropriate public location, together with an updated effective date." },
        { type: "p", text: "Where a change materially affects the purposes of processing, the information collected or the rights of users, STRIKE will provide appropriate notice and obtain fresh consent where required by applicable law." },
        { type: "p", text: "We encourage users to review this Policy periodically." },
      ],
    },
    {
      id: "grievance-redressal-and-contact-information",
      heading: "16. Grievance Redressal and Contact Information",
      blocks: [
        { type: "p", text: "If you have any questions, concerns, requests or complaints regarding the collection, use, disclosure, retention or deletion of your personal information, you may contact STRIKE using the details below." },
        { type: "p", text: [{ b: "Platform:" }, " STRIKE"] },
        { type: "p", text: [{ b: "Organisation:" }, " Strike Technologies"] },
        { type: "p", text: [{ b: "Privacy and Support Email:" }, " ", { a: "support.striketechnologies@gmail.com", to: "mailto:support.striketechnologies@gmail.com" }] },
        { type: "p", text: "Please include sufficient details to help us identify your account and understand your request. Do not include passwords, UPI PINs, complete card details or other authentication secrets in your communication." },
        { type: "p", text: "STRIKE will review privacy-related requests and grievances and respond in accordance with applicable law." },
        { type: "p", text: "If STRIKE is required to appoint a designated grievance officer or data protection officer under applicable law, the relevant name, designation and contact details will be published on the Platform." },
      ],
    },
    {
      id: "your-acknowledgement",
      heading: "17. Your Acknowledgement",
      blocks: [
        { type: "p", text: "By accessing or using STRIKE, you acknowledge that you have been provided access to this Privacy Policy." },
        { type: "p", text: "Where processing requires consent, your personal information will be processed on the basis of consent or another lawful basis available under applicable law, as appropriate to the circumstances." },
        { type: "p", text: "This Privacy Policy is intended to explain STRIKE’s data-handling practices transparently. It does not override any rights available to you under applicable law." },
        { type: "p", text: [{ b: "STRIKE TECHNOLOGIES" }] },
        { type: "p", text: [{ i: "Privacy, transparency and responsible use of personal information." }] },
      ],
    },
  ],
};
