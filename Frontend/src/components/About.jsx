import React from 'react';

const BiocratAboutPage = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and the development of novel solutions to challenges in biotechnology."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and interdisciplinary collaboration to achieve common goals."
    },
    {
      title: "Excellence",
      description: "We are committed to maintaining high standards in all our activities and projects."
    },
    {
      title: "Learning",
      description: "We foster a culture of continuous learning and professional development among our members."
    },
    {
      title: "Impact",
      description: "We aim to make a positive impact on the biotechnology field and society through our initiatives."
    }
  ];

  const navLinks = ["Home", "Events", "Projects", "Team", "Contact"];

  const socialIcons = [
    {
      name: "Instagram",
      path: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
    },
    {
      name: "Twitter",
      path: "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
    },
    {
      name: "Facebook",
      path: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
    },
    {
      name: "LinkedIn",
      path: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-3">
        <div className="flex items-center gap-4 text-gray-900">
          <div className="w-6 h-6 text-blue-600">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Biocrats Club</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="text-gray-800 text-sm font-medium leading-normal hover:text-blue-600 transition-colors cursor-pointer"
                href="#"
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
            <span className="truncate">Login</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-5xl flex-1">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-gray-900 tracking-tight text-4xl sm:text-5xl font-bold leading-tight">About Us</h1>
            <p className="text-slate-600 text-lg font-normal leading-normal mt-4 max-w-3xl mx-auto">
              Biocrats Club at IIT Indore is a vibrant community dedicated to fostering innovation and collaboration in the field of biotechnology. Our mission is to provide a platform
              for students to explore, learn, and contribute to advancements in biotechnology through various activities and projects.
            </p>
          </div>

          <div className="space-y-12">
            {/* History Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Our History</h2>
                <p className="text-slate-600 text-base font-normal leading-relaxed">
                  Founded in 2018, Biocrats Club has grown from a small group of enthusiastic students to a thriving hub for biotechnology enthusiasts at IIT Indore. Over the years,
                  we have organized numerous workshops, seminars, and competitions, attracting participants from diverse academic backgrounds. Our journey has been marked by a
                  commitment to excellence and a passion for biotechnology.
                </p>
              </div>
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-lg"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwA-ucNHARD-w3eHuHF4InRTGhQ2Gjt_v5GpEl0pDCa3BWOs1bv1ts6pxYhbF0Kkn3oZhmooYJmkpaFVr1kfdbz-B6yCNl3Bh334CByaVo9ft5PCBE9CiGqtMIAxs4jL47qVxLP0Oz-mmcG59MT0RXw9sdJrUHXC72HC0HogH7C9weN1Vi5YzL69IKGu3ECQBrNZ0GkyoIzpe_cQRxdntcwm5u8HxI_Ta8Mu7WtPzRQZI9HcVCaS-9ExumiuR1vn4c1259AA71uJnV")' }}
              />
            </div>

            {/* Vision & Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Our Vision & Mission</h2>
                <p className="text-slate-600 text-base font-normal leading-relaxed mb-4">
                  <strong>Vision:</strong> To be the leading student-led biotechnology club in India, recognized for our contributions to research, innovation, and education in the field.
                  We aim to create a dynamic environment where students can develop their skills, network with experts, and make a meaningful impact on the biotechnology landscape.
                </p>
                <p className="text-slate-600 text-base font-normal leading-relaxed">
                  <strong>Mission:</strong> To provide a platform for students to explore and engage with biotechnology through workshops, seminars, projects, and competitions. We strive
                  to foster a collaborative and innovative environment, encouraging students to develop their skills, network with experts, and contribute to advancements in the field.
                </p>
              </div>
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-lg md:order-1"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByaVbab5I8S3S2U4HPtAkmFNnBF9GfqNfhKmBaJcCZVCtvfopUGvXVzNwC-_Lnhvq4ihjfA7Zkdho-ceuxthkLKvGNvpR9KWMD2mDcc1pslnVFi1rC8xSikgW7k0bq3HnyAxvnkPFWMnDM75ugL4vQRhGSd3r6P7TFhT-_hvldq0bhVJhEtq_Jfaxn4rlg1aGMgZdVmBzQowD_kcjt7RM4q2-xR2LDaj0gcBjKVnCMlzzH3ZH0UdQm30i2wE_fyjHQRvCZ3oLabdyy")' }}
              />
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-16">
            <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Us Unique */}
          <div className="mt-16 text-center bg-blue-50 p-12 rounded-lg">
            <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">What Makes Us Unique</h2>
            <p className="text-slate-600 text-lg font-normal leading-relaxed max-w-3xl mx-auto">
              Biocrats Club stands out due to our focus on hands-on learning and practical application of biotechnology concepts. Our projects and workshops are designed to provide
              students with real-world experience, preparing them for future careers in the field. We also emphasize networking and collaboration, connecting students with industry
              professionals and researchers.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto py-10 px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-slate-600 text-base font-normal leading-normal hover:text-blue-600 transition-colors cursor-pointer"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex justify-center gap-6">
              {socialIcons.map((icon, index) => (
                <a key={index} className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <p className="text-slate-600 text-base font-normal leading-normal text-center mt-8">@2024 Biocrats Club IIT Indore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BiocratAboutPage;