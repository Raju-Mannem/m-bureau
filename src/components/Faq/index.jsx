import React from "react";

const Faq = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("your-background-image-url.jpg")' }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mx-4 my-20">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          FAQ - Krishna Veni Marriage Bureau
        </h1>
        <div className="space-y-4">
          <details
            className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How does Krishna Veni Marriage Bureau work?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Krishna Veni Marriage Bureau collects your details to help find
              your wedding partner. After you share your preferences, family
              background, and other aspects, suitable profiles will be provided
              to you.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How are profiles selected?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              I select suitable profiles based on your interests, family
              traditions, and the values you wish to have. This selection is
              made considering all the details you provide.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                What are the initial consultations like?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              In the initial consultations, you can discuss directly with me or
              talk over the phone. Clearly conveying your thoughts and
              preferences will be helpful.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Can I trust the profiles you provide?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              I verify the details of each member, but you can check the details
              at any time. In the meantime, you can also share your preferred
              profiles with me.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Where to contact for more information?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              You can find all the information you need in the contact section
              of the Krishna Veni Marriage Bureau website. I will respond to
              your questions soon.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
