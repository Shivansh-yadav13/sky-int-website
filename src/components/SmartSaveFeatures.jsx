import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";
import { fadeInUp } from "../lib/motion";
import {
  LayoutGrid,
  Laptop,
  ArrowRight,
  Shield,
  CheckCircle2,
  Palette,
  Smartphone,
  FileCode,
  Database,
  Code2,
  Code,
} from "lucide-react";

// Card content for each type
// const CardContent = ({ type }) => {
//   if (type === "currencies") {
//     return (
//       <div className="flex flex-wrap justify-center gap-3 p-6">
//         {["¥", "$", "€", "£", "₩", "₸", "฿", "Ξ"].map((c, i) => (
//           <div
//             key={i}
//             className="bg-stone-100 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-stone-700 shadow-sm"
//           >
//             {c}
//           </div>
//         ))}
//       </div>
//     );
//   }
//   if (type === "payment") {
//     return (
//       <div className="flex flex-col gap-2 p-6">
//         <div className="flex items-center gap-2">
//           <span className="text-xs text-stone-500">Payment to</span>
//           <span className="font-inter font-semibold text-stone-900">
//             Finns Inc.
//           </span>
//           <span className="ml-auto text-stone-700 font-inter bg-stone-100 rounded-full px-2 py-1 text-xs">
//             - $1,240.00
//           </span>
//         </div>
//         <div className="flex items-center gap-2 mt-2">
//           <span className="bg-lime-100 text-stone-900 rounded-full px-2 py-1 text-xs font-inter">
//             Finns Inc. <span className="text-stone-500">(ending in 1234)</span>
//           </span>
//         </div>
//       </div>
//     );
//   }
//   if (type === "workflow") {
//     return (
//       <div className="flex flex-col gap-2 p-6">
//         <div className="flex flex-wrap gap-2 items-center">
//           <span className="bg-stone-100 rounded-full px-2 py-1 text-xs font-inter">
//             If
//           </span>
//           <span className="bg-stone-100 rounded-full px-2 py-1 text-xs font-inter">
//             purchase
//           </span>
//           <span className="bg-lime-100 rounded-full px-2 py-1 text-xs font-inter">
//             &gt; $1,200
//           </span>
//           <span className="bg-stone-100 rounded-full px-2 py-1 text-xs font-inter">
//             then
//           </span>
//         </div>
//         <div className="flex flex-wrap gap-2 items-center">
//           <span className="bg-stone-100 rounded-full px-2 py-1 text-xs font-inter">
//             request approval
//           </span>
//           <span className="text-xs text-stone-500">from</span>
//           <span className="bg-lime-100 rounded-full px-2 py-1 text-xs font-inter">
//             CFO
//           </span>
//           <span className="bg-lime-100 rounded-full px-2 py-1 text-xs font-inter">
//             CTO
//           </span>
//         </div>
//       </div>
//     );
//   }
//   if (type === "expenses") {
//     return (
//       <div className="flex flex-col gap-2 p-6">
//         <div className="flex items-center gap-2">
//           <span className="font-inter font-semibold text-stone-900">
//             Hana L.
//           </span>
//           <span className="text-xs text-stone-500">requested</span>
//           <button className="ml-auto bg-stone-900 text-white rounded-full px-3 py-1 text-xs font-inter">
//             Approve
//           </button>
//         </div>
//         <div className="flex flex-wrap gap-2 mt-2">
//           <span className="bg-lime-100 text-stone-900 rounded-full px-2 py-1 text-xs font-inter">
//             Conference ticket
//           </span>
//           <span className="bg-lime-100 text-stone-900 rounded-full px-2 py-1 text-xs font-inter">
//             Food
//           </span>
//           <span className="bg-lime-100 text-stone-900 rounded-full px-2 py-1 text-xs font-inter">
//             Hotel
//           </span>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

const SmartSaveFeatures = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-32 items-start">
      <React.Fragment>
        {/* Left: Tag, Title, Desc */}
        <motion.div {...fadeInUp} className="mb-8 md:mb-0 flex flex-col gap-8">
          <Tag>For Teams</Tag>
          <div>
            <div className="text-2xl md:text-3xl font-geist font-semibold text-stone-900">
              Reliable Hardware, Ready to Deploy
            </div>
            <div className="mt-2 text-stone-500 text-base font-inter max-w-md">
              From laptops to accessories, we source and supply business-grade
              hardware from trusted brands — configured and delivered to meet
              your startup's real needs.
            </div>
          </div>
          {/* Feature Card */}
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 shadow-sm border border-sky-200">
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-stone-700">
                    Bulk orders supported
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-stone-700">
                    Pre-installed software
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-stone-700">Fast shipping</span>
                </div>
              </div>
              <p className="text-stone-700 font-inter text-sm">
                Spend less time shopping, more time building.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Right: Feature Cards */}
        <motion.div {...fadeInUp} className="flex flex-col gap-6 w-full">
          {/* Brand Icons Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <div className="flex flex-wrap justify-center gap-8 items-center mb-4">
              <img
                src="/dell_logo.png"
                alt="Dell"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/hp_logo.png"
                alt="HP"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lenovo_logo.png"
                alt="Lenovo"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/asus_logo.png"
                alt="Asus"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/nvidia_logo.png"
                alt="Asus"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-center text-stone-600 font-inter text-sm">
              Top brands, tested for business.
            </p>
          </div>

          {/* Laptop Accessories Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <div className="flex justify-center gap-6 items-center mb-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-stone-500">Laptops</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <span className="text-xs text-stone-500">Accessories</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-stone-500">Devices</span>
              </div>
            </div>
            <p className="text-center text-stone-600 font-inter text-sm">
              Everything your team needs in one place.
            </p>
          </div>
        </motion.div>
      </React.Fragment>
      <React.Fragment>
        {/* Left: Tag, Title, Desc */}
        <motion.div {...fadeInUp} className="mb-8 md:mb-0 flex flex-col gap-8">
          <Tag>For Founders</Tag>

          <div>
            <div className="text-2xl md:text-3xl font-geist font-semibold text-stone-900">
              Launch-Ready MVPs. <br />
              Built Fast, Built Right
            </div>
            <div className="mt-2 text-stone-500 text-base font-inter max-w-md">
              Got an idea? We turn it into a working MVP in just weeks. From UX
              to launch, we build fast, functional products so you can validate,
              pitch, or scale with confidence.
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 shadow-sm border border-sky-200">
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-sky-600" />
                  <span className="text-sm text-stone-700">Web & Mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-sky-600" />
                  <span className="text-sm text-stone-700">UX Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-600" />
                  <span className="text-sm text-stone-700">Full Ownership</span>
                </div>
              </div>
              <p className="text-stone-700 font-inter text-sm">
                Everything you need, nothing you don't.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Right: Feature Cards */}
        <motion.div {...fadeInUp} className="flex flex-col gap-6 w-full">
          {/* Wireframe to App Mockup Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <div className="flex justify-center items-center mb-4">
              <div className="w-[100px] pr-4">
                <div className="bg-stone-100 rounded-lg p-4 aspect-[4/3] flex items-center justify-center">
                  <LayoutGrid className="w-12 h-12 text-stone-400" />
                </div>
                <p className="text-center text-xs text-stone-500 mt-2">
                  Wireframe
                </p>
              </div>
              <div className="w-8 flex justify-center">
                <ArrowRight className="w-6 h-6 text-sky-600" />
              </div>
              <div className="w-[100px] pl-4">
                <div className="bg-sky-50 rounded-lg p-4 aspect-[4/3] flex items-center justify-center">
                  <Laptop className="w-12 h-12 text-sky-600" />
                </div>
                <p className="text-center text-xs text-stone-500 mt-2">
                  App Mockup
                </p>
              </div>
            </div>
            <p className="text-center text-stone-600 font-inter text-sm">
              From concept to clickable MVP.
            </p>
          </div>

          {/* Timeline and Tools Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-50 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 font-semibold">3</span>
                  </div>
                  <span className="text-stone-400">→</span>
                  <div className="w-8 h-8 bg-sky-50 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 font-semibold">6</span>
                  </div>
                  <span className="text-stone-500 text-sm">weeks</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="bg-sky-50 text-sky-600 rounded-full px-3 py-1 text-xs font-inter flex items-center gap-1">
                  <Code2 className="w-3 h-3" />
                  Next.js
                </span>
                <span className="bg-sky-50 text-sky-600 rounded-full px-3 py-1 text-xs font-inter flex items-center gap-1">
                  <Code2 className="w-3 h-3" />
                  Node.js
                </span>
                <span className="bg-sky-50 text-sky-600 rounded-full px-3 py-1 text-xs font-inter flex items-center gap-1">
                  <Database className="w-3 h-3" />
                  PostgreSQL / MongoDB / MySQL
                </span>
                <span className="bg-sky-50 text-sky-600 rounded-full px-3 py-1 text-xs font-inter flex items-center gap-1">
                  <FileCode className="w-3 h-3" />
                  Tailwind CSS + Framer Motion + Shadcn UI
                </span>
              </div>
            </div>
            <p className="text-center text-stone-600 font-inter text-sm">
              Built using fast, scalable tools.
            </p>
          </div>
        </motion.div>
      </React.Fragment>
    </section>
  );
};

export default SmartSaveFeatures;
