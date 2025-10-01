import React, { useState } from 'react';

const BiocratGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const navLinks = [
    { name: "Home", active: false },
    { name: "Events", active: false },
    { name: "Gallery", active: true },
    { name: "Team", active: false },
    { name: "Contact", active: false }
  ];

  const galleryImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALQcUfdhfzLnKdUtdU9Qh3VgajJhca65X8tpQF2UvoA0f8Z476SK1EsE5uaK1sxMXBT0j8Ow7EqT-y4w4zYiqdyeLrWbbIHRrJqLHTyPN951aSbHZELD35IXtx55p43Irl3ouaBUiev34LUG8ZN29O7jcoVMcfPzuXZkSED2KhYqaiPj4fI-A8_japlH8lVHj4ObcgNAygsWI58AJ9Pst-AtXf6_yxuHaOwNOqefB_Kx_22zYrcNL885YGXA_DlTLD7qxvC7MXt06M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQPRJ6nA0M-_YmXOUH9q7ttdL9GDiOs05WyEV6z4L0Lrxo4q3TVBHdbvo1ozaIWdCvSs8ShmCWGRFWk4mEyoKzsYA_YisOMlP_xl6yk2TqlyBnOzJ0_n878Gzteq-J0yAuaXP3dTd6B3TKYamRTsveDJMTM5JRRJNZJzQqx60ygZoAIu19jseFCMPpkqgo4a7zESA2DQA2L6rJ-4zlRxxCry87UQRNrAUB4ijBn3MIqcX6ByuOL8b2iw6U6Y0R-2Ih7A2prEIzJULD",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBTySOBmJadoIf9AJWaXy5LKVUuS_LTDNwc7PpMQR3GuovclpmM0yShPQFzw1bCt-GAHIQxnUXxXfQ2fvy7b05h-PsWPmNgjkUdk1CCsNT4la_sFpY_a2GAVWIDsWpOpHSTM8fIg_CUsJW5AjVZh7jGrKvcVHF3P8uh3FxGgB7KNmtbuO9Wrpve_lqiycdjoSLcIXdoRMQZPGqrd97EFyEP4kpG3ScdaXyBwH8tTOkfZ0Qtk8Vca16aGpSvx_FiJpS3YUl5bZAIoqxp",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqnDKphg0Ohsv2Z4LGLYDVNQRVRGna6hcZ6BHkQ-cujSOHpu514D0NnvBrJ7QBqrb4TqSQ6xucUxmgIIi2BJr-0lSgNA7ajPvMVsrfaefyeTUqaZ5D0ioNoj8W-SU329tXawnvANNh_kqN3f9sbdktWVWJ6mwL-WTrtJzcNOwOKE7jqHPrk1oJZGGIJMXkWq-LknrXSHpFIW3wbnTPKc_Lgqgy8vrLTu-LIPPB25kWxpxkvJjx4gyfc5alxwXmQiWp34YKqMVLOvQS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdJcBCFpVzAAHDd4BrOtG17Ko0mvs8g-6wsMVkzrJDhqGnWdkQpOtYMuLtTdaD1T35n_8lyqiUINLvCZqNeNylb2WcMHwwk21sqEb7VqVbr_aiEnIttPF19xTE-moP7K8Eu3nq3_hAQU01bTo5RBEzwfUjxBoPUfEKDDq800SVLFnH_RB_f9_rqME01ESVUpeVVG43U2ZJzcrwhReyrJxucVtfHAT9yw7iMaPzF7mSk5vlicRatE6Lal0zZcwkoTrAmlyLkvC6tkb1",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7gqz8SO7PZYvV7R3YGqyVizBY2jLCLSKy7s5ahuLpRHuW7h8400qWIhiAD9aqDKGHn4WDBSe03GrLIjhcXEb9n3r9uPwlZ45blYiMMXoI7iJf-XYlL2XqcY9l4rTaIXgkhlLyrOmoioevDVl41Q7wMmDtJJvUbN-C_sXrIH74H2t928EmQ3ZpYFAXPUdDZGM9YsQte2_lrx5-Wi5jVwR7BiPybEedudXvrROOdG5vPLIgFzxiWZDCOdRvDg6Vt-90SExLHqZlFm6",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAD0B2affmYn2iscH33WIlMSNLwX1bEO6YvX9RZTDl6YkM7geOinR3piaF5AMPZnE-Q9HhHkc0bOZTiVI9D-o48gWOn2XOM7JkGS2Jt5IFQhQrZBt3f182KCDncZ-cnPsmBHbvdmd-_D72_OSKkgjfey-lDOsHhO18QsKm9-x8t4mnbJJxT3sm0hlygyvpCd_jwJx_QRKEzdsKXG8S7gmOqQsa8GmxwgUvChcJqESUaBfRmhht0veKc3rP-DWpi2WxA301yEEqIh34j",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgEJoHzqMTQfjSusVrJzx0dKQQCF3RBjpWP2eHUda3cQ6XmGDko5hq2XgKmC2PEpvD16zUottQy97ZtzPpOV-A_bXk4SiRxZ_1-37GUZv057N9_5xAVyibjCYsG04qUCYHQw96t7QZYHkI9l2w0TXNd4s7L5siNc0BXftkrzP9ci1csnD0etfT3QJHNEamd7PL1yjiSEf5lh2H3j_fJaNB_M3ajYRNLkPLI6_gbqLPCLC6ix8XM2cw4zp8dg1hDiZLwv4uJw4bR0K0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCRtr8CdnvECRVx-u6jM-_E802_ngOBQiuh-7j-wMWNE4khHUfynLukAvx0OWqLIS7ROXW099Q7pNWHibUQptS0lwxX-GCN1h2ThLtPzyty53UXzHaGrAw0YhTsPZ6Yycxz4Wf8p2tzAF-jYT0iegp7kzRRS-X72Foshc6hpVR3Uw9ALJO3Mj1vsQsKgLZVOKmFOulwYZzYljd36Cepz-OPYu6SEITZU_MEwzNcKCB0tJwIsXY6yq0xYtUqFHoUH7sEdU3JTPpXK7gD",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1f8TtLYApSWI2XeXlyqm47qUFKLoVDPmWscmbblTqv7vY9OuN6Chv6fb3F55VFT6Iv9l7Ab4yEJGQ2SdN1oFAuioHn7hMIyqzOZYAdmiyQbITIbNu6oGjtjTo44-L94itkWAYwc9V7sBfkiVyw-2M8xf0u2UUFPJyv6MmXwE1TkrGyiylfXAeFwRjNcMuUWvtv9Tu69kowMwsJpLUGu6FmDVMO59puzB-OZ793yn3BDKW9JeciPNm7111nV2KtNM5kmbCvIXw8Oh",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgHKYr3se3JshBGGKwodwdrOu3qh_xxBpaEw_LIvBIlPlnaKj3p-URkflOoT0IuPlbIhlfS8EhpG3e1SM-T0GJ6wjwGUKSgLOy30F9Pp6qznrohF6IVJRzO6xelZ62cSGEklZx7oWufId2KzzJZZ-YD0pzrZkzmZSjSLwhzE52AwF2yK8zuWMBfiqgPjRzHqhqt0IldFCTPVi-sod0pWTgrCE2HIP6ZxpjokR_YhuT5eSPPDU4_k3357XKcQcF7O6mNau3j4TbY0M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuNvQxr6yVb7LhtIt5kVjhEbJ8GhsVhTePP4ebWIPOCPpDBHgWK0_jrKG2bD2VZVN93HuBfxhRY96PGj7bcK8-uuoJMRQjZtx4MJM2XdHKTFDTVTzh5t4E29sw7PjdktWX33APCsSyWoSLdxsq6l7Nxy8lLR3MKGPjWx7zLsHrrnoTZgcCLlWfdcp3IfDHPKzxeV8CJa3Mzu2cwdZOcYj2hsoO85FUmPRr2qvhib6OaKUNSLNQqoUfk8vk_vzT8CUVyxme3BfCe9HI"
  ];

  const footerLinks = ["About", "Contact", "Privacy Policy", "Terms of Service"];

  const socialIcons = [
    {
      name: "Instagram",
      path: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
    },
    {
      name: "Facebook",
      path: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
    },
    {
      name: "Twitter",
      path: "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-4 shadow-sm bg-white">
        <div className="flex items-center gap-3 text-slate-800">
          <div className="text-blue-600">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">Biocrats Club</h2>
        </div>
        <nav className="flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`text-sm font-${link.active ? 'semibold' : 'medium'} leading-normal transition-colors cursor-pointer ${
                  link.active ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
                href="#"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-slate-800 text-white text-sm font-bold leading-normal tracking-wide hover:bg-slate-700 transition-colors">
            <span className="truncate">Login</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight tracking-tighter">Gallery</h1>
              <p className="text-slate-500 text-lg mt-4 max-w-3xl mx-auto">
                Explore the vibrant moments captured at Biocrats Club IIT Indore. From workshops to competitions, our gallery showcases the essence of our activities and the
                spirit of our community.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <a
                  key={index}
                  className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {socialIcons.map((icon, index) => (
                <a key={index} className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8 text-center">
            <p className="text-slate-500 text-sm">@2024 Biocrats Club IIT Indore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BiocratGalleryPage;