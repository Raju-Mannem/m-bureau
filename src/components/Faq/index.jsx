import React, { useEffect, useRef } from "react";

const Faq = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("your-background-image-url.jpg")' }}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mx-4 my-20">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">FAQ - కృష్ణవేణి మేరేజ్ బ్యూర</h1>
        <div className="space-y-4">
          <details
            className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                కృష్ణవేణి మేరేజ్ బ్యూర ఎలా పనిచేస్తుంది?
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
              కృష్ణవేణి మేరేజ్ బ్యూర మీ పెళ్లి జంటను కనుగొనడం కోసం మీ వివరాలను సేకరిస్తుంది.
              మీరు మీ ఇష్టాలు, కుటుంబ నేపథ్యం మరియు ఇతర అంశాలను చెప్పిన తర్వాత, మీకు అనువైన ప్రొఫైళ్లు అందించబడతాయి.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                ప్రొఫైల్స్ ఎలా ఎంపిక చేస్తారు?
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
              మీ ఆసక్తులు, కుటుంబ పద్ధతులు మరియు మీరు పొందాలనుకున్న విలువల ఆధారంగా, నేను అనువైన ప్రొఫైళ్లు ఎంపిక చేస్తాను.
              మీకు కావాల్సిన అన్ని వివరాలను పరిగణనలోకి తీసుకుని ఈ ఎంపిక చేయబడుతుంది.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                మొదటి సంప్రదింపులు ఎలా ఉంటాయ్?
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
              మొదటి సంప్రదింపులలో, మీరు నాతో ప్రత్యక్షంగా చర్చించవచ్చు లేదా ఫోన్ ద్వారా మాట్లాడవచ్చు.
              మీరు మాతో మీరు అనుకుంటున్న అంశాలను, అభిరుచులను స్పష్టంగా తెలియజేస్తే, అది సహాయపడుతుంది.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                మీరు ఇచ్చే ప్రొఫైల్స్ పై నమ్మకం ఉందా?
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
              నేను ప్రతి సభ్యుడి వివరాలను ధృవీకరిస్తాను, కానీ మీరు ఎప్పుడైనా వివరాలను తనిఖీ చేసుకోవచ్చు.
              ఇంతలో మీరు మీకు ఇష్టమైన ప్రొఫైల్‌ గురించి నాకూ చెప్పొచ్చు.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:bg-green-100">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                మరింత సమాచారం కోసం ఎక్కడ సంప్రదించాలి?
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
              మీకు కావాల్సిన ప్రతి సమాచారాన్ని కృష్ణవేణి మేరేజ్ బ్యూర వెబ్‌సైట్‌లోని సంప్రదింపు విభాగంలో కనుగొనవచ్చు.
              మీ ప్రశ్నలకు త్వరలోనే సమాధానం అందిస్తాను.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
