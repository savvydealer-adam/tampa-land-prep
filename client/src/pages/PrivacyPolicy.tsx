import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Savvy Dealer</title>
        <meta
          name="description"
          content="Learn about how Savvy Dealer collects, uses, and protects your personal information. Read our comprehensive privacy policy."
        />
      </Helmet>

      <Header />

      <main id="main-content" className="min-h-screen bg-background pt-20">
        <div className="container mx-auto max-w-4xl px-6 py-16">
          <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl">
            Privacy Policy
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Last Updated: 9/20/2024
            </p>

            <p className="text-lg leading-relaxed">
              Your privacy is paramount to us. As you engage with our services,
              both on our website and at our physical locations, we want you to
              be confident in how we manage and protect your personal
              information. This Privacy Policy has been crafted to offer clarity
              on our data collection, usage, and disclosure practices. We're
              dedicated to upholding the highest standards, ensuring you have a
              clear understanding of our commitment to your privacy.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Notice of Collection</h2>

            <h3 className="mt-8 text-2xl font-semibold">
              Information We Collect
            </h3>
            <p>
              In the past 12 months, we have collected categories of personal
              information including names, addresses, contact details, vehicle
              preferences, and other information voluntarily submitted through
              online forms or chat functionality. We collect this information
              directly from our customers, through our website, phone calls, in
              person visits, and from third-party services related to automotive
              sales and services.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              Purpose of Collection
            </h3>
            <p>
              We collect this information to provide you with a tailored website
              experience, process sales, offer post-sales services, respond to
              your inquiries, and support your use of our website and related
              services. This may include promotional offers, advertising,
              marketing, financing, fraud prevention, and legal defense against
              claims and litigation.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              Cookies and Similar Technologies
            </h2>
            <p>
              We utilize "cookies" and similar technologies, including pixels
              and web beacons, to enhance your online experience, analyze our
              website's performance, help our sites remember your choices, and
              tailor content and advertisements to your preferences.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">First-Party Cookies</h3>
            <p>
              These are set by our website directly, and necessary for basic
              website functionality. They are used to remember your preferences,
              such as login details, improve the functionality of the website,
              and provide a more personalized experience. Our sites do not have
              a default mechanism to opt-out of first-party cookies.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">Third-Party Cookies</h3>
            <p>
              These are set by third-party providers on our behalf and may be
              used to track your online activities across different websites.
              They help us understand how our advertising campaigns are
              performing and allow us to show you relevant advertisements on
              other websites.
            </p>

            <p>
              You can opt-out of some third-party cookies on our cookie banner
              the first time you visit our site. Additionally, you can use a
              browser plugin or browser that supports the GPC – Global Privacy
              Control (see below).
            </p>

            <p>
              Some third-party cookies will not opt-out on selection. Examples
              of such cookies are those used to perform analytics exclusively on
              our sites by third-parties, and those required for essential
              capabilities exclusively on our sites.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              GPC – Global Privacy Control
            </h3>
            <p>
              Our site is designed to support GPC (Global Privacy Control). GPC
              lets you communicate to us how your private information should be
              used. GPC requires the use of settings in your browser or an
              extension that can be installed. If you have enabled GPC, then it
              will automatically replace the cookie and privacy preferences set
              on this site.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Information Disclosure</h2>
            <p>
              We're committed to safeguarding your data with utmost integrity.
              We may share your information in specific, transparent scenarios:
            </p>

            <ul>
              <li>
                <strong>Service Enhancement:</strong> Our trusted partners,
                pivotal in enhancing our services, may have access to certain
                data. This includes partners ensuring website functionality,
                data analytics, and customer support.
              </li>
              <li>
                <strong>Legal Imperatives:</strong> We strictly adhere to legal
                obligations, disclosing data when mandated, such as during legal
                proceedings or in response to official requests.
              </li>
              <li>
                <strong>Business Dynamics:</strong> In events like mergers or
                asset sales, your information might be part of the transitioned
                assets. In all instances, our dedication to your privacy remains
                steadfast, ensuring continued protection of your data.
              </li>
              <li>
                <strong>Business Partners:</strong> We occasionally partner with
                select retailers and other companies to offer expanded services
                to our visitors. As part of such collaborations, we may share
                access to specific interactive website functions like email
                reminders. Information provided by visitors through these
                interactive functions may be accessible to both our dealership
                and our partners.
              </li>
              <li>
                <strong>Agents:</strong> We employ other companies and
                individuals to execute certain tasks on our behalf, such as
                managing email services or organizing special promotions.
              </li>
            </ul>

            <h2 className="mt-12 text-3xl font-bold">
              Children's Information
            </h2>
            <p>
              Our platforms, both online and offline, are not targeted at or
              designed for children under the age of 16. We are committed to
              protecting the privacy of young individuals. We do not
              intentionally gather or use personal information from those under
              16 years of age, nor do we share such information with third
              parties. If you believe that we have inadvertently collected
              information from someone under 16, contact us immediately. If you
              are below 16 years old, please do not submit any data on our
              platforms.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Your Personal Data</h2>
            <p>
              We are committed to upholding the highest standards of data
              privacy, it's important to note that the rights detailed in our
              privacy policy may vary depending on your state of residency and
              the specific privacy laws applicable in your state.
            </p>

            <p>
              The rights outlined might differ based on the legislation enacted
              in your state. We encourage you to familiarize yourself with the
              privacy laws of your state to understand the rights available to
              you. Regardless of where you reside, we remain dedicated to
              treating all our customers with respect and transparency, ensuring
              that your personal information is handled with care.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Contact Us</h2>
            <p>
              We welcome your feedback, if you have any questions on our Privacy
              Policy or the use of your personal information, please contact us
              by email at{" "}
              <a
                href="mailto:support@savvydealer.com"
                className="text-primary hover:underline"
              >
                support@savvydealer.com
              </a>
              , phone at{" "}
              <a
                href="tel:+18135013229"
                className="text-primary hover:underline"
              >
                (813) 501-3229
              </a>
              , or in person.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Consent for Use</h2>
            <p>
              By interacting with our website, you give consent to the practices
              described in this Privacy Policy. If these terms aren't agreeable
              to you, you must stop using our platform.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              Policy Updates | Revisions
            </h2>
            <p>
              Note that we might revise this Privacy Policy over time, and such
              updates will be signified by a changed "Revision Date". Regularly
              reviewing this policy will ensure you're always informed.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              Collection of Non-Personally Identifiable Information
            </h2>
            <p>
              Whenever you access our website, we gather specific non-personally
              identifiable information related to your visit. This encompasses
              details like your browser type, service provider, IP address, and
              the search engine you might have used to find our site.
            </p>

            <p>
              We utilize this data to diagnose server issues, enhance the
              website's functionality, and generate comprehensive statistical
              reports. We track navigational patterns to understand the most
              visited areas of our website, ensuring we cater to our visitors'
              preferences. We may share this aggregated data with third parties
              or use it for our own analytical and marketing insights, always
              ensuring your privacy remains uncompromised.
            </p>

            <p>
              While this information is aggregated and remains anonymous, we
              assure you that it will never be linked to your personal details
              until you voluntarily provide them.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Online Chat</h2>
            <p>
              Our interactive chat is designed to provide you with real-time
              assistance and enhance your online experience. When you engage
              with our chat, we may collect personal information you provide,
              such as your name, phone number, email, mailing address, and other
              identifiers. Transcripts of our chat conversations may be stored
              for quality assurance, training, and service improvement purposes,
              and these transcripts could be linked to your personal
              information.
            </p>

            <p>
              For a tailored user experience, we may perform data analytics
              using information like geolocation, IP address, browsing history,
              online activity, pixel tags, and other analytics. This helps us
              present you with relevant products and services. By using our chat
              module, you consent to these collection practices and understand
              that we may use this data to communicate with you about our
              offerings. We prioritize your security and privacy, and while
              we've implemented advanced security protocols, we advise against
              sharing sensitive or confidential details within the chat. Your
              trust is paramount to us, and we're committed to safeguarding the
              information you share.
            </p>

            <h2 className="mt-12 text-3xl font-bold">Information Security</h2>
            <p>
              We are committed to safeguarding your personal information and
              employ reasonable technical and organizational measures to protect
              against unauthorized access, disclosure, alteration, or
              destruction.
            </p>

            <p>
              These measures include encryption technologies and firewalls to
              enhance online security, as well as stringent offline protocols
              where access to your data is restricted to essential personnel
              only. The data itself is stored in a secure facility.
            </p>

            <p>
              While we make every effort to ensure the security of your data,
              it's important to note that no online transmission can be
              guaranteed 100% secure. In the unlikely event of a security
              breach, we may attempt to notify you, allowing you to take
              necessary precautions. By using our services, you acknowledge the
              inherent risks of online data transmission.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              Third-Party | External Links
            </h2>
            <p>
              Our website may feature links to third-party websites, including
              advertisers, partners, and affiliates. We want to emphasize that
              we don't have control over, nor are we responsible for, the
              privacy practices or content of these external websites. For your
              own security and privacy, we strongly encourage you to review and
              familiarize yourself with the privacy policies of any third-party
              sites you visit through our website.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              Global Data Storage and Transfers
            </h2>
            <p>
              While our platform serves a global audience, it's essential for
              our users to know that all personal information they provide is
              securely stored on servers located exclusively within the United
              States. Regardless of where you access our services, all data
              connections and transfers are channeled through these U.S.-based
              servers. By choosing to use our services, you explicitly consent
              to this method of data storage and transfer, acknowledging your
              data is managed in the United States.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
