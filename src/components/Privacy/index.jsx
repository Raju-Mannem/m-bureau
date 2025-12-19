import { Link } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import "@fontsource/roboto";
import '@fontsource-variable/noto-serif';

function Privacy() {
  return (
    <div>
      <NavbarDemo />
      <div className="container m-auto py-32 px-6 text-gray-600 border border-b-0 border-green-400">
        <h2 className="sm:text-base text-[#00bf63] font-bold lg:text-2xl pb-8">
          <strong className="underline about-strong">Privacy Policy</strong>
        </h2>

        <p className="about-p sm:text-base lg:text-xl">
          At Krishnaveni Marriage Bureau, your privacy is our priority. This
          privacy policy outlines how we collect, use, and protect your personal
          information.
        </p>

        <div className="w-full text-left sm:text-sm lg:text-xl leading-relaxed ">
          <h1 className="about-h1">Information We Collect</h1>
          <p>
            We collect personal information that you voluntarily provide when
            you register, create a profile, or communicate with us. This may
            include:
          </p>
          <ul>
            <li>Name</li>
            <li>Contact information (phone number, email address)</li>
            <li>Demographic information (age, gender, etc.)</li>
            <li>Preferences and interests related to matchmaking</li>
          </ul>

          <h1 className="about-h1">How We Use Your Information</h1>
          <p>The information we collect is used to:</p>
          <ul>
            <li>Facilitate your matchmaking experience</li>
            <li>Improve our services and customer experience</li>
            <li>Communicate with you regarding your profile and services</li>
            <li>Provide customer support</li>
          </ul>

          <h1 className="about-h1">Data Protection</h1>
          <p>
            We take the security of your personal information seriously. We
            implement various security measures to protect your data from
            unauthorized access, alteration, disclosure, or destruction.
            However, please remember that no method of transmission over the
            internet or electronic storage is 100% secure.
          </p>

          <h1 className="about-h1">Sharing Your Information</h1>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties without your consent, except to
            provide our services or comply with legal obligations. Your
            information may be shared with trusted third parties who assist us
            in operating our website, conducting our business, or servicing you,
            as long as those parties agree to keep this information
            confidential.
          </p>

          <h1 className="about-h1">Your Rights</h1>
          <p>
            You have the right to access, correct, or delete your personal
            information at any time. If you wish to exercise these rights or
            have any questions about your data, please contact us using the
            information below.
          </p>

          <h1 className="about-h1">Changes to This Privacy Policy</h1>
          <p>
            We may update this privacy policy periodically. We encourage you to
            review this policy regularly for any changes. Your continued use of
            our services after any modifications will constitute your
            acknowledgment of the changes and your consent to abide by and be
            bound by the modified policy.
          </p>

          <h1 className="about-h1">Contact Us</h1>
          <p className="about-p">
            If you have any questions or concerns about this privacy policy,
            please reach out to us:
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
              <strong className="about-strong">Address:</strong> Your office
              address
            </li>
          </ul>
        </div>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>

        <h2 className="sm:text-base py-12 text-[#00bf63] font-bold lg:text-xl pb-8">
          Thank you for trusting Krishnaveni Marriage Bureau with your personal
          information. We are committed to protecting your privacy.
        </h2>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
