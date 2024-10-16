import React from "react";
import { Link } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import "@fontsource/roboto";

const TermsAndConditions = () => {
  return (
    <div>
      <NavbarDemo />
      <div className="container m-auto py-32 px-6 text-gray-600 border border-b-0 border-green-400">
        <h2 className="sm:text-base text-[#00bf63] font-bold lg:text-2xl pb-8">
          <strong className="underline about-strong">
            Terms and Conditions
          </strong>
        </h2>

        <p className="about-p sm:text-base lg:text-xl">
          Welcome to Krishnaveni Marriage Bureau. By accessing or using our
          services, you agree to comply with and be bound by the following terms
          and conditions.
        </p>

        <div className="w-full text-left sm:text-sm lg:text-xl leading-relaxed ">
          <h1 className="about-h1">1. Acceptance of Terms</h1>
          <p>
            By using our services, you confirm that you accept these terms and
            conditions and that you agree to comply with them. If you do not
            agree to these terms, you must not use our services.
          </p>

          <h1 className="about-h1">2. Eligibility</h1>
          <p>
            You must be at least 18 years of age to use our services. By using
            our services, you represent and warrant that you meet this
            eligibility requirement.
          </p>

          <h1 className="about-h1">3. User Responsibilities</h1>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to:
          </p>
          <ul>
            <li>
              Provide accurate, current, and complete information during
              registration.
            </li>
            <li>
              Update your account information to keep it accurate, current, and
              complete.
            </li>
            <li>
              Notify us immediately of any unauthorized use of your account.
            </li>
          </ul>

          <h1 className="about-h1">4. Use of Services</h1>
          <p>
            Our services are intended for personal use only. You agree not to
            use our services for any illegal or unauthorized purpose, including
            but not limited to:
          </p>
          <ul>
            <li>Impersonating any person or entity.</li>
            <li>Engaging in any fraudulent or deceptive activities.</li>
            <li>Interfering with or disrupting our services.</li>
          </ul>

          <h1 className="about-h1">5. Content Responsibility</h1>
          <p>
            You are solely responsible for any content you submit, post, or
            transmit through our services. We do not endorse or guarantee the
            accuracy of any user-generated content and are not responsible for
            any claims, losses, or damages resulting from your content.
          </p>

          <h1 className="about-h1">6. Termination</h1>
          <p>
            We reserve the right to suspend or terminate your access to our
            services at any time, without notice, for conduct that we believe
            violates these terms or is harmful to other users or our business.
          </p>

          <h1 className="about-h1">7. Limitation of Liability</h1>
          <p>
            To the fullest extent permitted by law, Krishnaveni Marriage Bureau
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of our
            services.
          </p>

          <h1 className="about-h1">8. Changes to Terms</h1>
          <p>
            We may update these terms and conditions from time to time. We will
            notify you of any changes by posting the new terms on this page.
            Your continued use of our services after any changes constitutes
            your acceptance of the revised terms.
          </p>

          <h1 className="about-h1">9. Governing Law</h1>
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of [Your Country/State], without regard to
            its conflict of law principles.
          </p>

          <h1 className="about-h1">10. Contact Us</h1>
          <p className="about-p">
            If you have any questions about these terms and conditions, please
            contact us:
          </p>
          <ul className="leading-6 my-6">
            <li className="leading-6">
              <strong className="about-strong">Phone:</strong> +91 1111111111
            </li>
            <li className="leading-6">
              <strong className="about-strong">Email:</strong>
              <Link to="mailto:abc@gmail.com">abc@gmail.com</Link>
            </li>
            <li className="leading-6">
              <strong className="about-strong">Address:</strong> office address
            </li>
          </ul>
        </div>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>

        <h2 className="sm:text-base py-12 text-[#00bf63] font-bold lg:text-xl pb-8">
          Thank you for choosing Krishnaveni Marriage Bureau. We look forward to
          helping you find your perfect match!
        </h2>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
