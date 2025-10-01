// import React from "react";
// import logo from "../assets/logo.png";
// import { FaArrowRight } from "react-icons/fa";
// export default function BiocratsClub() {
//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-slate-50 text-slate-800"
//       style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
//     >

//       {/* Hero Section */}
//       <section
//         className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-white"
//         style={{
//           backgroundImage:
//             'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEeyN8orr60Ahxe60O6CuNSmcyrCRCyZ6a136yoc9-wDCTecW1UixLlvbed6DnwekGsD-KvrQ8P0Hzy8NUkweNE-vaRPW_1O8pWnkvS3E0zbFo4hiAZc_HaTNU6cIoek0k9-LfHMGnXafqWHt7J16Ge8n-mjiUgEmK-1cftmg_zYMaY9vnzsshpPmAD8xK71axNULcIvRKN3HmeflQ5rsLYQm2pnDrtlGLUvFUZ4xylQ0VYiaP8aV7_h8A9RGZW38nRcxR-VglMy57")',
//         }}
//       >
//         <div className="container mx-auto max-w-4xl px-4 text-center">
//           <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
//             Innovating the Future of Biotechnology
//           </h1>
//           <p className="mt-4 text-lg text-slate-200 md:text-xl">
//             The Biocrats Club at IIT Indore is dedicated to fostering innovation
//             and collaboration in the field of biotechnology. Join us to explore
//             the latest advancements and contribute to groundbreaking research.
//           </p>
//           <a
//             href="#"
//             className="mt-8 inline-block rounded-md bg-[#1173d4] px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
//           >
//             Learn More
//           </a>
//         </div>
//       </section>

//       {/* Recent Achievements */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
//             Recent Achievements
//           </h2>
//           <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
//             <div className="flex flex-col items-center md:flex-row">
//               <div className="w-full md:w-1/2">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbwsGsUzLVrVLPzDASGhhVVIsIJQq9L1iw4yf_QeH_F5d-38oVk3L6XXL1uvTl9PEsfov9VtqjbgvFcmRSQ1l0xs5pRqEfnGYsGjATmiPcKaZe80CwaUAgWL_Rdx0o0utZwLn-NmyeV9Y4NQCXzhSvZNhalzsPbMq0TGvOqEXFqU-25BJ4yscMElQMo03vSWhHPtjij7FbrpvJUae2PWoqopHmPCBICUipIBK7tLOEqIrZB6C0nsKSBQXvYgg3_bTdOMNaywVWIuz"
//                   alt="Biocrats Team"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="w-full p-8 md:w-1/2">
//                 <h3 className="text-2xl font-bold text-slate-900">
//                   Biocrats Team Wins National Biotech Competition
//                 </h3>
//                 <p className="mt-4 text-slate-600">
//                   Our team secured first place at the prestigious National
//                   Biotech Competition, showcasing their innovative research in
//                   genetic engineering.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-6 inline-flex items-center font-semibold text-[#1173d4] hover:text-blue-700 transition-colors duration-300"
//                 >
//                   Read More
//                   <span className="material-symbols-outlined ml-1">
//                   <FaArrowRight />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="bg-slate-100 py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
//             Upcoming Events
//           </h2>
//           <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
//             <div className="flex flex-col items-center md:flex-row-reverse">
//               <div className="w-full md:w-1/2">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFnT-38T99247CB-xlkuxI9yMmNAXi0jdPpVAtkNptYifA_FGwLBxA4V3HhdECVT4XH73fSNunSnx-EBjn-6wF0r7Xvgss41bbW0hFtG0ouulCwK6nOXoNC5X7EMXLDuFEUZjScfIzfh9rjKCUWHuvo45-W8RBbUOb6Ct4A3K401GiwHuRD0d_zb10VvjimjwVKW_WRZu5WRwX1kj8ZC5eqvTBmtuYIheLdCFQUlIlrhLVnl_KUFupaY5zyfWKulkSZX_UEu_4-3Uc"
//                   alt="Biotechnology Symposium"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="w-full p-8 md:w-1/2">
//                 <h3 className="text-2xl font-bold text-slate-900">
//                   Biotechnology Symposium 2024
//                 </h3>
//                 <p className="mt-4 text-slate-600">
//                   Join us for our annual Biotechnology Symposium, featuring
//                   keynote speakers, workshops, and networking opportunities.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-6 inline-flex items-center font-semibold text-[#1173d4] hover:text-blue-700 transition-colors duration-300"
//                 >
//                   Read More
//                   <span className="material-symbols-outlined ml-1">
//                    <FaArrowRight />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  Users,
  Microscope,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function BiocratsClub() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Active Members",
    },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Awards Won" },
    {
      icon: <Calendar className="w-6 h-6" />,
      number: "100+",
      label: "Events Hosted",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      number: "30+",
      label: "Research Projects",
    },
  ];

  const highlights = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Hub",
      description: "Cutting-edge research and development in biotechnology",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Network",
      description: "Connect with industry leaders and academic experts",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Build skills and experience for future opportunities",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEeyN8orr60Ahxe60O6CuNSmcyrCRCyZ6a136yoc9-wDCTecW1UixLlvbed6DnwekGsD-KvrQ8P0Hzy8NUkweNE-vaRPW_1O8pWnkvS3E0zbFo4hiAZc_HaTNU6cIoek0k9-LfHMGnXafqWHt7J16Ge8n-mjiUgEmK-1cftmg_zYMaY9vnzsshpPmAD8xK71axNULcIvRKN3HmeflQ5rsLYQm2pnDrtlGLUvFUZ4xylQ0VYiaP8aV7_h8A9RGZW38nRcxR-VglMy57")',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <div className="inline-block mb-6">
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30">
              IIT Indore's Premier Biotechnology Club
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
            Innovating the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
              Biotechnology
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            The Biocrats Club at IIT Indore is dedicated to fostering innovation
            and collaboration in biotechnology. Join us to explore cutting-edge
            advancements and contribute to groundbreaking research.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#achievements"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
            >
              Upcoming Events
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-slate-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Our Success Story
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Recent Achievements
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Celebrating excellence and innovation in biotechnology
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="relative h-64 md:h-full overflow-hidden group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbwsGsUzLVrVLPzDASGhhVVIsIJQq9L1iw4yf_QeH_F5d-38oVk3L6XXL1uvTl9PEsfov9VtqjbgvFcmRSQ1l0xs5pRqEfnGYsGjATmiPcKaZe80CwaUAgWL_Rdx0o0utZwLn-NmyeV9Y4NQCXzhSvZNhalzsPbMq0TGvOqEXFqU-25BJ4yscMElQMo03vSWhHPtjij7FbrpvJUae2PWoqopHmPCBICUipIBK7tLOEqIrZB6C0nsKSBQXvYgg3_bTdOMNaywVWIuz"
                  alt="Biocrats Team"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8 md:p-12">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  National Winner
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Biocrats Team Wins National Biotech Competition
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our team secured first place at the prestigious National
                  Biotech Competition, showcasing their innovative research in
                  genetic engineering and sustainable biotechnology solutions.
                </p>

                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        id="events"
        className="py-20 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              What's Next
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Join us for exciting workshops, seminars, and networking
              opportunities
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="relative h-64 md:h-full overflow-hidden group md:order-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFnT-38T99247CB-xlkuxI9yMmNAXi0jdPpVAtkNptYifA_FGwLBxA4V3HhdECVT4XH73fSNunSnx-EBjn-6wF0r7Xvgss41bbW0hFtG0ouulCwK6nOXoNC5X7EMXLDuFEUZjScfIzfh9rjKCUWHuvo45-W8RBbUOb6Ct4A3K401GiwHuRD0d_zb10VvjimjwVKW_WRZu5WRwX1kj8ZC5eqvTBmtuYIheLdCFQUlIlrhLVnl_KUFupaY5zyfWKulkSZX_UEu_4-3Uc"
                  alt="Biotechnology Symposium"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8 md:p-12 md:order-1">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Calendar className="w-4 h-4" />
                  Annual Event
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Biotechnology Symposium 2024
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Join us for our annual Biotechnology Symposium, featuring
                  renowned keynote speakers, hands-on workshops, panel
                  discussions, and valuable networking opportunities with
                  industry leaders.
                </p>

                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  View Event Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Biocrats Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of a dynamic community driving innovation in biotechnology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Become a Member
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
