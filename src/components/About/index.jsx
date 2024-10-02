import React from "react";
import { NavbarDemo } from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "@fontsource/ramabhadra";
import "@fontsource/ramaraja";
import "./index.css";

function About() {
  return (
    <div>
      <NavbarDemo />
      <div>
        <div className="container m-auto py-32 px-6 text-gray-600 md:px-12 xl:px-6 bg-slate-50">
          <h2 className="text-2xl text-[#00bf63] font-bold md:text-4xl">
            <strong className="underline">కృష్ణవేణి మ్యారేజ్ బ్యూరో</strong>,
            సంప్రదాయాలను గౌరవించి, సంతోషకరమైన సంబంధాలను ఏర్పరుస్తాము
          </h2>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 py-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ecg2rsekjf9pnpeqakbk"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12 text-left leading-relaxed">
              కృష్ణవేణి మ్యారేజ్ బ్యూరో వద్ద నమ్మకమైన మరియు వ్యక్తిగత సేవలను
              అందించడానికి సిద్ధంగా ఉన్నాను.
              <h1> మా కథ </h1>
              మీరు సరైన భాగస్వామిని కనుగొనడంలో మీకు సహాయపడటమే మా ముఖ్యమైన
              లక్ష్యం! ప్రతి ప్రొఫైల్‌ను పరిశీలించడం, మీరు కోరుకునే విలువలు
              మరియు ఆశయాలను అర్థం చేసుకోవడం ద్వారా, మీకు సరిపోయే సంబంధాలను
              ఏర్పరచడం మా సర్వస్వం.
              <h1> మా ప్రత్యేకతలు </h1>
              <ul>
                <li>
                  <strong>సాంస్కృతిక సెన్సిటివిటీ:</strong> తెలుగు కుటుంబాలకు
                  ప్రత్యేకమైన సాంస్కృతిక నైపుణ్యాలను గౌరవిస్తూ, మా సేవలు ఈ
                  సంప్రదాయాలకు అనుగుణంగా రూపొందించబడ్డాయి.
                </li>
                <li>
                  <strong>వ్యక్తిగత సేవ:</strong> మీకు ప్రత్యేకమైన అవసరాలు
                  ఉన్నాయని మేము అర్థం చేసుకుంటాము. అందుకే, మీకు సరైన భాగస్వామిని
                  కనుగొనడం సులభంగా మరియు ఆనందంగా ఉండేలా మేము కృషి చేస్తాము.
                </li>
                <li>
                  <strong>గోప్యత:</strong> మీ వ్యక్తిగత సమాచారాన్ని మేము అత్యంత
                  గోప్యతతో నిర్వహిస్తాము. మీ నమ్మకం మాకు చాలా విలువైనది.
                </li>
                <li>
                  <strong>విశ్లేషణ మార్గనిర్దేశం:</strong> మా అనుభవంతో, మేము
                  మీకు ఉత్తమ మార్గనిర్దేశాన్ని అందించగలము, ఇది మీ కోసం సరైన
                  భాగస్వామిని కనుగొనడంలో సహాయపడుతుంది.
                </li>
              </ul>
              <h1>మా హామీ</h1>
              <p>
                మీ భాగస్వామిని కనుగొనడం మీకు సంతృప్తికరమైన అనుభవంగా
                మారాలనుకుంటున్నాము. మీ సంప్రదాయాలను గౌరవించే మరియు మీ ఆశయాలను
                నెరవేర్చే స్ఫూర్తితో, మేము మీకు సహాయపడేందుకు సిద్ధంగా ఉన్నాం.
              </p>
              <h1>మాతో సంప్రదించండి</h1>
              <p>
                మీరు మమ్మల్ని సంప్రదించి, మా సేవలను గురించి తెలుసుకోవడానికి
                స్వాగతం!
              </p>
              <ul className="leading-6 my-6">
                <li className="leading-6">
                  <strong>ఫోన్:</strong> +91 1111111111
                </li>
                <li className="leading-6">
                  <strong>ఇమెయిల్:</strong><Link to="mailto:abc@gmail.com">abc@gmail.com</Link>
                </li>
                <li className="leading-6">
                  <strong>చిరునామా:</strong> మీ ఆఫీసు చిరునామా
                </li>
              </ul>
              <p>
                <strong>
                  కృష్ణవేణి మ్యారేజ్ బ్యూరో"ని మీ అనుభవంలో భాగస్వామిగా ఎంపిక
                  చేసినందుకు ధన్యవాదాలు. మీ సంతోషకరమైన జీవితాన్ని కనుగొనడానికి
                  మేము ఎదురు చూస్తున్నాము!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
