import LegalPage, { LegalSection } from "@/components/fluent/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Fluent AI · Legal" title="Privacy Policy" updated="August 20, 2026" introduction="This Privacy Policy explains how information is handled when you use Fluent AI, an iOS application for practicing foreign languages through AI conversations and personalized feedback.">
      <LegalSection title="1. Scope and verified practices">
        <p>This policy covers the Fluent AI application, this website, and related support communications.</p>
        <p>The website project available when this policy was prepared does not contain the iOS application source code, service configuration, or an authoritative list of its SDKs. For that reason, this policy does not name an AI, speech-recognition, analytics, authentication, or subscription provider that has not been verified, and it does not claim a specific retention period that has not been established.</p>
      </LegalSection>
      <LegalSection title="2. Information processed when you use Fluent AI">
        <p>Fluent AI processes the information you choose to provide during language practice, including conversation messages, spoken input or its transcription, language selections, proficiency level, and the corrections or feedback generated during a session.</p>
        <p>If you contact support, we process your email address, your message, and any information you choose to include so we can respond.</p>
        <p>No account-registration system or mandatory email collection is established by the available project materials. If a version of Fluent AI asks you to create an account, the information requested in that version must be disclosed in the app before collection and reflected in an updated policy.</p>
      </LegalSection>
      <LegalSection title="3. Voice and conversation content">
        <p>When you choose a voice feature, Fluent AI must access spoken input to recognize what you say and provide the conversation, transcription, corrections, or feedback you request. AI conversation content must likewise be processed to generate a relevant reply.</p>
        <p>Use voice features only when you are comfortable submitting what you say for processing. Do not include another person’s voice, confidential material, or sensitive personal information unless you have the right and a genuine need to do so.</p>
      </LegalSection>
      <LegalSection title="4. How information is used">
        <ul><li>Provide AI conversations, transcription, corrections, and feedback.</li><li>Adapt practice to the language and level you select.</li><li>Maintain speaking progress where that feature is enabled.</li><li>Process and respond to support and privacy requests.</li><li>Protect the service, investigate errors, and comply with legal obligations where applicable.</li></ul>
      </LegalSection>
      <LegalSection title="5. Subscriptions and purchases">
        <p>If Fluent AI offers an in-app purchase or subscription, Apple processes the payment through the App Store. We do not receive your complete payment-card details. Apple may provide purchase status and transaction information needed to unlock or restore paid access.</p>
        <p>The available project materials do not establish a separate subscription-management provider. This policy will be updated before naming one.</p>
      </LegalSection>
      <LegalSection title="6. Service providers and disclosure">
        <p>AI and voice features require technical processing to return conversations, transcriptions, corrections, or feedback. The available materials do not identify the production providers, so this policy does not attribute processing to a specific company.</p>
        <p>Information may also be disclosed when required by law, to protect users and the service, or with your direction. Fluent AI does not claim to sell personal information or use it for cross-app advertising; if those practices are introduced, this policy and the app’s privacy disclosures must be updated before they begin.</p>
      </LegalSection>
      <LegalSection title="7. Retention">
        <p>No verified fixed retention period is available in the supplied project. Information should be kept only as long as needed to provide the requested feature, maintain legitimate service records, resolve disputes, protect the service, or meet legal obligations. Any confirmed product-specific retention schedule will be added to this policy.</p>
      </LegalSection>
      <LegalSection title="8. Security">
        <p>Reasonable technical and organizational safeguards are used to protect information. No internet transmission or storage system can be guaranteed to be completely secure, so avoid sharing information that is not needed for language practice.</p>
      </LegalSection>
      <LegalSection title="9. Your choices, rights, and deletion">
        <p>You may control microphone access in iOS Settings. Disabling access may prevent voice features from working. Depending on where you live, you may have rights to request access, correction, deletion, restriction, objection, or portability of personal information, and to withdraw consent where processing relies on consent.</p>
        <p>To request access to or deletion of your personal data, email <a href="mailto:hypernovationtech@gmail.com?subject=Fluent%20AI%20Privacy%20Request">hypernovationtech@gmail.com</a> with the subject “Fluent AI Privacy Request.” We may request limited information needed to verify and locate the relevant data. Deleting app data does not automatically cancel an Apple subscription; subscriptions must be managed separately through Apple.</p>
      </LegalSection>
      <LegalSection title="10. Children’s privacy">
        <p>Fluent AI is not directed to children below the minimum age permitted to use the service independently in their location. If you believe a child has provided personal information without appropriate authorization, contact us so the request can be reviewed.</p>
      </LegalSection>
      <LegalSection title="11. Changes and contact">
        <p>This policy may be updated when Fluent AI’s features, verified providers, or legal obligations change. The date above will be revised when updates are posted.</p><p>Privacy questions and requests: <a href="mailto:hypernovationtech@gmail.com">hypernovationtech@gmail.com</a>.</p>
      </LegalSection>
    </LegalPage>
  );
}
