// import React from "react";
// import {
//   ArrowRight,
//   Award,
//   Calendar,
//   Users,
//   Microscope,
//   Lightbulb,
//   TrendingUp,
// } from "lucide-react";

// export default function BiocratsClub() {

//   const highlights = [
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Innovation Hub",
//       description: "Cutting-edge research and development in biotechnology",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Expert Network",
//       description: "Connect with industry leaders and academic experts",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Career Growth",
//       description: "Build skills and experience for future opportunities",
//     },
//   ];

//   return (
//     <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-50">

//  {/* Hero Section */}
//        <section
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
//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="#achievements"
//               className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
//             >
//               Explore Our Work
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href="#events"
//               className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
//             >
//               Upcoming Events
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {highlights.map((highlight, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center mb-4">
//                   {highlight.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">
//                   {highlight.title}
//                 </h3>
//                 <p className="text-slate-600">{highlight.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recent Achievements */}
//       <section id="achievements" className="py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
//               Our Success Story
//             </span>
//             <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
//               Recent Achievements
//             </h2>
//             <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//               Celebrating excellence and innovation in biotechnology
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
//             <div className="grid grid-cols-1 md:grid-cols-2 items-center">
//               <div className="relative h-64 md:h-full overflow-hidden group">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbwsGsUzLVrVLPzDASGhhVVIsIJQq9L1iw4yf_QeH_F5d-38oVk3L6XXL1uvTl9PEsfov9VtqjbgvFcmRSQ1l0xs5pRqEfnGYsGjATmiPcKaZe80CwaUAgWL_Rdx0o0utZwLn-NmyeV9Y4NQCXzhSvZNhalzsPbMq0TGvOqEXFqU-25BJ4yscMElQMo03vSWhHPtjij7FbrpvJUae2PWoqopHmPCBICUipIBK7tLOEqIrZB6C0nsKSBQXvYgg3_bTdOMNaywVWIuz"
//                   alt="Biocrats Team"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>

//               <div className="p-8 md:p-12">
//                 <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
//                   <Award className="w-4 h-4" />
//                   National Winner
//                 </div>

//                 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
//                   Biocrats Team Wins National Biotech Competition
//                 </h3>

//                 <p className="text-slate-600 text-lg leading-relaxed mb-6">
//                   Our team secured first place at the prestigious National
//                   Biotech Competition, showcasing their innovative research in
//                   genetic engineering and sustainable biotechnology solutions.
//                 </p>

//                 <a
//                   href="#"
//                   className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
//                 >
//                   Read Full Story
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section
//         id="events"
//         className="py-20 bg-gradient-to-b from-slate-50 to-white"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
//               What's Next
//             </span>
//             <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
//               Upcoming Events
//             </h2>
//             <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//               Join us for exciting workshops, seminars, and networking
//               opportunities
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
//             <div className="grid grid-cols-1 md:grid-cols-2 items-center">
//               <div className="relative h-64 md:h-full overflow-hidden group md:order-2">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFnT-38T99247CB-xlkuxI9yMmNAXi0jdPpVAtkNptYifA_FGwLBxA4V3HhdECVT4XH73fSNunSnx-EBjn-6wF0r7Xvgss41bbW0hFtG0ouulCwK6nOXoNC5X7EMXLDuFEUZjScfIzfh9rjKCUWHuvo45-W8RBbUOb6Ct4A3K401GiwHuRD0d_zb10VvjimjwVKW_WRZu5WRwX1kj8ZC5eqvTBmtuYIheLdCFQUlIlrhLVnl_KUFupaY5zyfWKulkSZX_UEu_4-3Uc"
//                   alt="Biotechnology Symposium"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>

//               <div className="p-8 md:p-12 md:order-1">
//                 <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
//                   <Calendar className="w-4 h-4" />
//                   Annual Event
//                 </div>

//                 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
//                   Biotechnology Symposium 2024
//                 </h3>

//                 <p className="text-slate-600 text-lg leading-relaxed mb-6">
//                   Join us for our annual Biotechnology Symposium, featuring
//                   renowned keynote speakers, hands-on workshops, panel
//                   discussions, and valuable networking opportunities with
//                   industry leaders.
//                 </p>

//                 <a
//                   href="#"
//                   className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
//                 >
//                   View Event Details
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  Users,
  Microscope,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import image1 from "../assets/Images/Image1.JPG";
import image2 from "../assets/Images/Image2.JPG";
import image3 from "../assets/Images/Image3.JPG";
import image4 from "../assets/Images/Image4.JPG";
// import image5 from "../assets/Images/Image5.jpg";
import image6 from "../assets/Images/Image6.JPG";
// import image7 from "../assets/Images/Image7.jpg";
import image8 from "../assets/Images/Image8.jpg";
// import VID from "../assets/Images/Vid.mp4";

export default function BiocratsClub() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const slides = [image1, image2, image3, image4, image6, image8];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-50">
      {/* Image Slider Section */}
      <section className="relative w-full h-[70vh] overflow-hidden bg-black">
        <div
          ref={sliderRef}
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
            </div>
          ))}

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto max-w-4xl px-4 text-center text-white">
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl drop-shadow-lg">
                Innovating the Future of Biotechnology
              </h1>
              <p className="mt-4 text-lg text-slate-100 md:text-xl drop-shadow-md">
                The Biocrats Club at IIT Indore is dedicated to fostering
                innovation and collaboration in the field of biotechnology.
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
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Upcoming Events */}
      {/* <section
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
        </section>  */}
    </div>
  );
}
