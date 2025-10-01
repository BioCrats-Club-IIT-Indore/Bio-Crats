import React from "react";

export default function BiocratsClub() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-slate-50 text-slate-800"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-3">
            <div className="text-[#1173d4]">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Biocrats Club
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "About Us", "Team", "Alumni", "Gallery", "Events", "Contact Us"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`text-slate-700 hover:text-[#1173d4] transition-colors duration-300 ${
                    item === "Home" ? "text-[#1173d4] font-semibold" : ""
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEeyN8orr60Ahxe60O6CuNSmcyrCRCyZ6a136yoc9-wDCTecW1UixLlvbed6DnwekGsD-KvrQ8P0Hzy8NUkweNE-vaRPW_1O8pWnkvS3E0zbFo4hiAZc_HaTNU6cIoek0k9-LfHMGnXafqWHt7J16Ge8n-mjiUgEmK-1cftmg_zYMaY9vnzsshpPmAD8xK71axNULcIvRKN3HmeflQ5rsLYQm2pnDrtlGLUvFUZ4xylQ0VYiaP8aV7_h8A9RGZW38nRcxR-VglMy57")',
        }}
      >
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Innovating the Future of Biotechnology
          </h1>
          <p className="mt-4 text-lg text-slate-200 md:text-xl">
            The Biocrats Club at IIT Indore is dedicated to fostering innovation
            and collaboration in the field of biotechnology. Join us to explore
            the latest advancements and contribute to groundbreaking research.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md bg-[#1173d4] px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
            Recent Achievements
          </h2>
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center md:flex-row">
              <div className="w-full md:w-1/2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbwsGsUzLVrVLPzDASGhhVVIsIJQq9L1iw4yf_QeH_F5d-38oVk3L6XXL1uvTl9PEsfov9VtqjbgvFcmRSQ1l0xs5pRqEfnGYsGjATmiPcKaZe80CwaUAgWL_Rdx0o0utZwLn-NmyeV9Y4NQCXzhSvZNhalzsPbMq0TGvOqEXFqU-25BJ4yscMElQMo03vSWhHPtjij7FbrpvJUae2PWoqopHmPCBICUipIBK7tLOEqIrZB6C0nsKSBQXvYgg3_bTdOMNaywVWIuz"
                  alt="Biocrats Team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Biocrats Team Wins National Biotech Competition
                </h3>
                <p className="mt-4 text-slate-600">
                  Our team secured first place at the prestigious National
                  Biotech Competition, showcasing their innovative research in
                  genetic engineering.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center font-semibold text-[#1173d4] hover:text-blue-700 transition-colors duration-300"
                >
                  Read More
                  <span className="material-symbols-outlined ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
            Upcoming Events
          </h2>
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFnT-38T99247CB-xlkuxI9yMmNAXi0jdPpVAtkNptYifA_FGwLBxA4V3HhdECVT4XH73fSNunSnx-EBjn-6wF0r7Xvgss41bbW0hFtG0ouulCwK6nOXoNC5X7EMXLDuFEUZjScfIzfh9rjKCUWHuvo45-W8RBbUOb6Ct4A3K401GiwHuRD0d_zb10VvjimjwVKW_WRZu5WRwX1kj8ZC5eqvTBmtuYIheLdCFQUlIlrhLVnl_KUFupaY5zyfWKulkSZX_UEu_4-3Uc"
                  alt="Biotechnology Symposium"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Biotechnology Symposium 2024
                </h3>
                <p className="mt-4 text-slate-600">
                  Join us for our annual Biotechnology Symposium, featuring
                  keynote speakers, workshops, and networking opportunities.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center font-semibold text-[#1173d4] hover:text-blue-700 transition-colors duration-300"
                >
                  Read More
                  <span className="material-symbols-outlined ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
