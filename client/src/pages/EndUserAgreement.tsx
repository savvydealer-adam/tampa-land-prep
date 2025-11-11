import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EndUserAgreement() {
  return (
    <>
      <Helmet>
        <title>End User Agreement | Savvy Dealer</title>
        <meta
          name="description"
          content="Read the Savvy Dealer End User Agreement governing the use of our products and services."
        />
      </Helmet>

      <Header />

      <main id="main-content" className="min-h-screen bg-background pt-20">
        <div className="container mx-auto max-w-4xl px-6 py-16">
          <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl">
            End User Agreement
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              The customer signing the Savvy Dealer Subscription Agreement (the
              "Customer") agrees that Customer's use of any products or services
              (the "Service" or "Services") offered by Savvy Dealer, Inc.
              ("Savvy Dealer") will be subject to these standard terms and
              conditions (this "Agreement").
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              1. Agreement and Services
            </h2>
            <p>
              This Agreement governs Customer's use of all Services ordered from
              Savvy Dealer by Customer from time to time. These Services will be
              identified on invoices (each, an "Invoice") issued to Customer
              from Savvy Dealer. Subject to Customer's payment of any applicable
              Fees (as defined below), Savvy Dealer will provide to Customer the
              Services identified in each Invoice. As further specified in the
              applicable Invoice, the Services may consist of professional
              services, such as, but not limited to, website development and
              hosting services and/or access to online products and services
              (including any hardware or equipment provided by Savvy Dealer)
              that Savvy Dealer may make available to its customers from time to
              time via this website or any other digital platform (collectively,
              the "Savvy Dealer Site").
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              2. Access to Savvy Dealer Online Services
            </h2>

            <h3 className="mt-8 text-2xl font-semibold">2.1 Grant of Rights</h3>
            <p>
              Subject to Customer's compliance with the terms of this Agreement,
              including, without limitation, the restrictions set forth in
              section 2.2 below, Savvy Dealer grants to Customer and its
              Authorized Users a non-exclusive, non-transferable, limited
              license, during the Term of this Agreement (as defined below), to
              access and use the Services on and through the Savvy Dealer Site,
              solely for the purpose of enhancing, managing, distributing, and
              displaying data and photos relating to the motor vehicles customer
              has in inventory or may acquire (collectively, "Inventory Data")
              via the Internet. Customer shall be responsible for compliance
              with, and any breach of, this agreement by Customer's authorized
              users. For purposes of this Agreement, "Authorized Users" means
              (a) Customer's employees, officers, directors and/or contractors
              who access any Services on behalf of Customer, and (b) if Customer
              obtains website development and/or hosting services from Savvy
              Dealer, the end-users of Customer's website(s).
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              2.2 Restrictions on Use
            </h3>
            <p>
              Customer acknowledges and agrees that the Services are licensed
              for use at a single dealer location or rooftop, and Customer shall
              not use the Services for more than one dealer location or rooftop
              unless Customer enters into a separate agreement with Savvy Dealer
              for each additional dealer location or rooftop. Customer may not
              (i) provide, disclose, make available, allow access to, or permit
              use of any Service by any third party; (ii) modify, adapt,
              translate, or create derivative works based upon the underlying
              software code of any Service; (iii) reverse engineer, decompile,
              disassemble or otherwise attempt to discover the source code of
              any Service except to the extent Customer may be expressly
              permitted to do under applicable law; or (iv) use any Service to
              provide services to a third party.
            </p>

            <h2 className="mt-12 text-3xl font-bold">3. Data Rights</h2>

            <h3 className="mt-8 text-2xl font-semibold">3.1 Inventory Data</h3>
            <p>
              Customer acknowledges that certain Services will require Savvy
              Dealer, its Affiliates (as defined in Section 9.1, below) and/or
              its service providers to access, store and manage Customer's
              Inventory Data. If Customer requests any such Service, Customer
              agrees that Savvy Dealer, its Affiliates and/or such service
              providers may access Customer's dealer management system for
              purposes of acquiring Inventory Data for use for their respective
              business purposes, which may include, without limitation,
              performing VIN decoding/enhancement, distributing Inventory Data,
              and preparing and distributing statistical analysis based on the
              Inventory Data. Customer alone is responsible for ensuring the
              accuracy and integrity of the Inventory Data. Customer must notify
              Savvy Dealer immediately of any problems with the Services or any
              errors in the Inventory Data.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              3.2 Performance/Transaction Data
            </h3>
            <p>
              Customer may use the Services to manage leads, transactions, and
              other customer interactions in connection with the operation of
              its motor vehicle dealerships and to assess and enhance the
              performance of its marketing efforts (collectively, this data is
              referred to as the "Performance/Transaction Data"). Customer
              hereby grants to Savvy Dealer and its Affiliates a perpetual
              non-exclusive, royalty-free, irrevocable right and license to (i)
              use, copy, perform, display, distribute and modify the
              Performance/Transaction Data in any manner or medium, now known or
              hereafter developed, for Savvy Dealer's and its Affiliates'
              business purposes, and (ii) prepare statistical analysis based on
              such Performance/Transaction Data ("Statistical Data") which Savvy
              Dealer and its Affiliates may use to improve their Services and
              may combine with other similar data from other customers and
              disseminate and otherwise use in aggregate form.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              3.3 Proprietary Rights in Customer Data
            </h3>
            <p>
              Subject to the licenses granted pursuant to section 3.1 and 3.2,
              above, as between the Customer and Savvy Dealer, Customer will own
              and retain all right, title and interest in and to all Inventory
              Data and Performance/Transaction Data (collectively, "Customer
              Data") provided or made available to Savvy Dealer, or otherwise
              collected or received by Savvy Dealer, in connection with
              Customer's use of the Services.
            </p>

            <h2 className="mt-12 text-3xl font-bold">4. Term; Termination</h2>

            <h3 className="mt-8 text-2xl font-semibold">4.1 Term</h3>
            <p>
              The Term of this Agreement will commence as of the date on which
              Customer signs the Savvy Dealer Subscription Agreement and will
              remain in effect unless and until terminated as set forth below
              ("Term").
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              4.2 Termination for Cause
            </h3>
            <p>
              Savvy Dealer may terminate this Agreement and/or cancel any
              Service(s) ordered under an Invoice or Savvy Dealer Subscription
              Agreement in the event of a breach of the terms of this Agreement
              by Customer that remains uncured for a period of five (5) days
              following Customer's receipt of written notice of such breach from
              Savvy Dealer. Customer may terminate this Agreement in the event
              of a material breach of the terms of this Agreement by Savvy
              Dealer that remains uncured for a period of thirty (30) days
              following Savvy Dealer's receipt of written notice of such
              material breach from Customer.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              4.3 Termination for Convenience
            </h3>
            <p>
              Without limiting section 4.2 above, Customer may terminate this
              Agreement and/or cancel any Service(s) at any time, with or
              without cause, upon ninety (90) days' prior written notice to
              Savvy Dealer. Savvy Dealer may terminate this Agreement and/or
              cancel any Service(s) at any time, without cause, upon thirty (30)
              days' prior written notice to Customer. The cancellation of any
              Service will not terminate this Agreement nor cancel any other
              Service unless expressly stated in the applicable notice of
              termination or cancellation.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              4.4 Effects of Termination
            </h3>
            <p>
              Upon expiration or termination of this Agreement or any Service:
              (i) Customer's right to use the Services will immediately
              terminate; and (ii) all unpaid Fees outstanding from Customer will
              become immediately due and payable. Sections 2.2, 3, 4.4, 6, 7, 8,
              9, 10, 11, 12 and 14 will survive any termination of this
              Agreement.
            </p>

            <h2 className="mt-12 text-3xl font-bold">5. Fees; Payment</h2>

            <h3 className="mt-8 text-2xl font-semibold">5.1 Fees</h3>
            <p>
              Customer will pay Savvy Dealer the fee specified in each invoice
              ("Fees"). Payments of Fees are due monthly in advance. If Fees are
              to be paid by credit card, Savvy Dealer may charge the credit card
              as of the first business day of the first month after Customer
              requests the corresponding Services, and on the first business day
              of each subsequent month thereafter, until termination of the
              applicable Service in accordance with Section 4.3, above. If
              Customer is to be invoiced for payment, Customer will be invoiced
              for all Services monthly, in advance. All amounts paid by Customer
              pursuant to this Agreement are non-refundable. Late payments may
              bear interest at the rate of one and one-half percent (1.5%) per
              month or the highest rate permitted by law, if lower. If Customer
              fails to make payments when due, Customer will be responsible for
              all reasonable expenses (including attorneys' fees) incurred by
              Savvy Dealer in collecting such amounts. Customer will be
              responsible for and will pay all federal, state and local taxes
              that are imposed on the Fees paid or Services provided hereunder.
              If Customer cancels any Service that was priced by Savvy Dealer as
              part of a bundle of Services, but does not cancel all of such
              Services, Savvy Dealer may adjust the Fees for such service.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">5.2 Overage Charges</h3>
            <p>
              In addition to regular monthly Service Fees, Customer may be
              subject to overage charges in connection with usage of Customer's
              call tracking account, MMS text messaging, or cellular data plans
              in connection with Customer's use of the Services under this
              Agreement. If Customer purchases one of these Services, the
              monthly usage limits will be set by the product package in effect
              at the time of purchase. If Customer exceeds the set limit of the
              product package, Customer will automatically be enrolled in the
              next highest product package for the month in which the overage
              occurs. All fees associated with the next highest product package
              will be applied as overage fees for that particular month and
              Customer will be obligated to pay such amount. Overage charges
              will be applied on a month-to-month basis and will not
              automatically enroll Customer in any level of product package
              beyond the month in which the overage charges were incurred. By
              purchasing any product package with a set limit of monthly usage,
              Customer consents to being temporarily enrolled in the next
              highest product package in order to pay for any overage charges
              that occur for any given month.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              6. Representations and Warranties
            </h2>

            <h3 className="mt-8 text-2xl font-semibold">
              6.1 Customer Warranties
            </h3>
            <p>
              Customer represents and warrants that (i) it is a legal entity
              duly organized, validly existing and in good standing; (ii) it has
              all requisite corporate powers and authority to execute, deliver
              and perform its obligations hereunder; (iii) it has all rights
              necessary to provide the Customer Data and any other materials
              (including any trademarks, service marks, logos, photographs,
              images, graphics, audio, video, or other creative materials
              (collectively, "Customer Materials")) provided or made available
              by Customer, and that such Customer Data and Customer Materials do
              not and will not infringe any rights of any third party,
              including, but not limited to, any contractual rights, trademark
              or trade secret rights or any right of privacy or publicity; (iv)
              Customer's use of the Services will comply with all applicable
              laws, rules and regulations, including without limitation, any
              privacy laws; and (v) to the extent Customer purchases website
              hosting services from Savvy Dealer, Customer will provide Savvy
              Dealer with a written privacy statement to post on such websites
              that complies with applicable law and that contains any terms that
              Savvy Dealer may from time to time, provide to Customer for
              inclusion in such privacy statement.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">6.2 Disclaimer</h3>
            <p className="font-semibold uppercase">
              Savvy Dealer makes no warranties, express or implied, regarding
              the services provided under this agreement, including, without
              limitation, any implied warranty of merchantability, fitness for a
              particular purpose or non-infringement. The services are provided
              "as is" and "with all faults" and Savvy Dealer makes no warranty
              that the services (i) will be uninterrupted or error-free or will
              operate in connection with any particular software, or that any
              errors will be corrected; (ii) will meet Customer's requirements
              or expectations; (iii) will produce accurate or reliable results;
              or (iv) will be free of viruses or other harmful or malicious
              code.
            </p>

            <h2 className="mt-12 text-3xl font-bold">7. Indemnification</h2>
            <p>
              Customer will indemnify, defend and hold Savvy Dealer, its
              Affiliates, successors and assigns, and all of their respective
              officers, directors, employees and agents harmless from and
              against any and all claims, demands, causes of action, debts or
              liabilities, costs, and expenses, including reasonable attorneys'
              fees, arising out of a third-party claim resulting from (i) any
              breach or alleged breach of Customer's obligations,
              representations or warranties under this Agreement; (ii)
              Customer's use of the Services; or (iii) any claim that any
              Customer trademarks, service marks, trade names, logos or other
              content or materials furnished by Customer for use in connection
              with the Services, including, without limitation any Customer Data
              and any Customer Materials (including, if Customer obtains any
              website development and hosting services from Savvy Dealer, any
              content or advertising posted on such website by Customer's end
              users), but excluding any content provided by Savvy Dealer, (a)
              misappropriates any third party's confidential information; (b)
              violates any applicable law, rule or regulation; (c) libels any
              person or entity; or (d) otherwise violates or infringes the
              rights of any third party, including, without limitation, any
              patent, copyright, trademark, trade secret, or other intellectual
              property or proprietary right, or any right of privacy or
              publicity.
            </p>

            <h2 className="mt-12 text-3xl font-bold">
              8. Limitation of Liability
            </h2>
            <p className="font-semibold uppercase">
              In no event will Savvy Dealer, its affiliates, subsidiaries, or
              licensors be liable to Customer or any third party for any
              special, indirect, punitive, consequential, or incidental damages,
              including, without limitation, lost profits, loss of use, or loss
              of data, arising out of or related to this agreement, under any
              cause of action, whether based on breach of contract, tort
              (including negligence), or any other legal theory, even if advised
              of the possibility of such damages. Savvy Dealer, its affiliates
              and its and their licensors total liability to Customer or any
              third party claiming through Customer for any claim arising out of
              Savvy Dealer performance under this agreement or its provision of
              the services hereunder will not exceed, in the aggregate, the
              total fees actually paid by Customer to Savvy Dealer during the
              twelve (12) month period immediately preceding the event giving
              rise to such claim.
            </p>

            <div className="mt-12 rounded-lg bg-muted p-6">
              <p className="text-sm text-muted-foreground">
                For questions about this agreement, please contact us at{" "}
                <a
                  href="mailto:support@savvydealer.com"
                  className="text-primary hover:underline"
                >
                  support@savvydealer.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+18135013229"
                  className="text-primary hover:underline"
                >
                  (813) 501-3229
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
