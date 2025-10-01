// // import { Linkedin } from "lucide-react";
// import React, { useState } from "react";

// const BiocratGalleryPage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const navLinks = [
//     { name: "Home", active: false },
//     { name: "Events", active: false },
//     { name: "Gallery", active: true },
//     { name: "Team", active: false },
//     { name: "Contact", active: false },
//   ];

//   const galleryImages = [
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuALQcUfdhfzLnKdUtdU9Qh3VgajJhca65X8tpQF2UvoA0f8Z476SK1EsE5uaK1sxMXBT0j8Ow7EqT-y4w4zYiqdyeLrWbbIHRrJqLHTyPN951aSbHZELD35IXtx55p43Irl3ouaBUiev34LUG8ZN29O7jcoVMcfPzuXZkSED2KhYqaiPj4fI-A8_japlH8lVHj4ObcgNAygsWI58AJ9Pst-AtXf6_yxuHaOwNOqefB_Kx_22zYrcNL885YGXA_DlTLD7qxvC7MXt06M",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuCQPRJ6nA0M-_YmXOUH9q7ttdL9GDiOs05WyEV6z4L0Lrxo4q3TVBHdbvo1ozaIWdCvSs8ShmCWGRFWk4mEyoKzsYA_YisOMlP_xl6yk2TqlyBnOzJ0_n878Gzteq-J0yAuaXP3dTd6B3TKYamRTsveDJMTM5JRRJNZJzQqx60ygZoAIu19jseFCMPpkqgo4a7zESA2DQA2L6rJ-4zlRxxCry87UQRNrAUB4ijBn3MIqcX6ByuOL8b2iw6U6Y0R-2Ih7A2prEIzJULD",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuBTySOBmJadoIf9AJWaXy5LKVUuS_LTDNwc7PpMQR3GuovclpmM0yShPQFzw1bCt-GAHIQxnUXxXfQ2fvy7b05h-PsWPmNgjkUdk1CCsNT4la_sFpY_a2GAVWIDsWpOpHSTM8fIg_CUsJW5AjVZh7jGrKvcVHF3P8uh3FxGgB7KNmtbuO9Wrpve_lqiycdjoSLcIXdoRMQZPGqrd97EFyEP4kpG3ScdaXyBwH8tTOkfZ0Qtk8Vca16aGpSvx_FiJpS3YUl5bZAIoqxp",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuDqnDKphg0Ohsv2Z4LGLYDVNQRVRGna6hcZ6BHkQ-cujSOHpu514D0NnvBrJ7QBqrb4TqSQ6xucUxmgIIi2BJr-0lSgNA7ajPvMVsrfaefyeTUqaZ5D0ioNoj8W-SU329tXawnvANNh_kqN3f9sbdktWVWJ6mwL-WTrtJzcNOwOKE7jqHPrk1oJZGGIJMXkWq-LknrXSHpFIW3wbnTPKc_Lgqgy8vrLTu-LIPPB25kWxpxkvJjx4gyfc5alxwXmQiWp34YKqMVLOvQS",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuAdJcBCFpVzAAHDd4BrOtG17Ko0mvs8g-6wsMVkzrJDhqGnWdkQpOtYMuLtTdaD1T35n_8lyqiUINLvCZqNeNylb2WcMHwwk21sqEb7VqVbr_aiEnIttPF19xTE-moP7K8Eu3nq3_hAQU01bTo5RBEzwfUjxBoPUfEKDDq800SVLFnH_RB_f9_rqME01ESVUpeVVG43U2ZJzcrwhReyrJxucVtfHAT9yw7iMaPzF7mSk5vlicRatE6Lal0zZcwkoTrAmlyLkvC6tkb1",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7gqz8SO7PZYvV7R3YGqyVizBY2jLCLSKy7s5ahuLpRHuW7h8400qWIhiAD9aqDKGHn4WDBSe03GrLIjhcXEb9n3r9uPwlZ45blYiMMXoI7iJf-XYlL2XqcY9l4rTaIXgkhlLyrOmoioevDVl41Q7wMmDtJJvUbN-C_sXrIH74H2t928EmQ3ZpYFAXPUdDZGM9YsQte2_lrx5-Wi5jVwR7BiPybEedudXvrROOdG5vPLIgFzxiWZDCOdRvDg6Vt-90SExLHqZlFm6",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuAD0B2affmYn2iscH33WIlMSNLwX1bEO6YvX9RZTDl6YkM7geOinR3piaF5AMPZnE-Q9HhHkc0bOZTiVI9D-o48gWOn2XOM7JkGS2Jt5IFQhQrZBt3f182KCDncZ-cnPsmBHbvdmd-_D72_OSKkgjfey-lDOsHhO18QsKm9-x8t4mnbJJxT3sm0hlygyvpCd_jwJx_QRKEzdsKXG8S7gmOqQsa8GmxwgUvChcJqESUaBfRmhht0veKc3rP-DWpi2WxA301yEEqIh34j",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuCgEJoHzqMTQfjSusVrJzx0dKQQCF3RBjpWP2eHUda3cQ6XmGDko5hq2XgKmC2PEpvD16zUottQy97ZtzPpOV-A_bXk4SiRxZ_1-37GUZv057N9_5xAVyibjCYsG04qUCYHQw96t7QZYHkI9l2w0TXNd4s7L5siNc0BXftkrzP9ci1csnD0etfT3QJHNEamd7PL1yjiSEf5lh2H3j_fJaNB_M3ajYRNLkPLI6_gbqLPCLC6ix8XM2cw4zp8dg1hDiZLwv4uJw4bR0K0",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuCRtr8CdnvECRVx-u6jM-_E802_ngOBQiuh-7j-wMWNE4khHUfynLukAvx0OWqLIS7ROXW099Q7pNWHibUQptS0lwxX-GCN1h2ThLtPzyty53UXzHaGrAw0YhTsPZ6Yycxz4Wf8p2tzAF-jYT0iegp7kzRRS-X72Foshc6hpVR3Uw9ALJO3Mj1vsQsKgLZVOKmFOulwYZzYljd36Cepz-OPYu6SEITZU_MEwzNcKCB0tJwIsXY6yq0xYtUqFHoUH7sEdU3JTPpXK7gD",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1f8TtLYApSWI2XeXlyqm47qUFKLoVDPmWscmbblTqv7vY9OuN6Chv6fb3F55VFT6Iv9l7Ab4yEJGQ2SdN1oFAuioHn7hMIyqzOZYAdmiyQbITIbNu6oGjtjTo44-L94itkWAYwc9V7sBfkiVyw-2M8xf0u2UUFPJyv6MmXwE1TkrGyiylfXAeFwRjNcMuUWvtv9Tu69kowMwsJpLUGu6FmDVMO59puzB-OZ793yn3BDKW9JeciPNm7111nV2KtNM5kmbCvIXw8Oh",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgHKYr3se3JshBGGKwodwdrOu3qh_xxBpaEw_LIvBIlPlnaKj3p-URkflOoT0IuPlbIhlfS8EhpG3e1SM-T0GJ6wjwGUKSgLOy30F9Pp6qznrohF6IVJRzO6xelZ62cSGEklZx7oWufId2KzzJZZ-YD0pzrZkzmZSjSLwhzE52AwF2yK8zuWMBfiqgPjRzHqhqt0IldFCTPVi-sod0pWTgrCE2HIP6ZxpjokR_YhuT5eSPPDU4_k3357XKcQcF7O6mNau3j4TbY0M",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuDuNvQxr6yVb7LhtIt5kVjhEbJ8GhsVhTePP4ebWIPOCPpDBHgWK0_jrKG2bD2VZVN93HuBfxhRY96PGj7bcK8-uuoJMRQjZtx4MJM2XdHKTFDTVTzh5t4E29sw7PjdktWX33APCsSyWoSLdxsq6l7Nxy8lLR3MKGPjWx7zLsHrrnoTZgcCLlWfdcp3IfDHPKzxeV8CJa3Mzu2cwdZOcYj2hsoO85FUmPRr2qvhib6OaKUNSLNQqoUfk8vk_vzT8CUVyxme3BfCe9HI",
//   ];

//   const footerLinks = [
//     "About",
//     "Contact",
//     "Privacy Policy",
//     "Terms of Service",
//   ];

//   const socialIcons = [
//     // {
//     //   name: "Instagram",
//     //   path: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
//     // },
//     // {
//     //   name: "Facebook",
//     //   path: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
//     // },
//     // {
//     //   name: "LinkedIn",
//     //   link: "https://www.linkedin.com/company/biocrats-iiti",
//     //   // icon: <Linkedin className="w-5 h-5" />,
//     //   path: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
//     // },
//     // {
//     //   name: "Twitter",
//     //   path: "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z",
//     // },


//   {
//     name: "Instagram",
//     link: "https://www.instagram.com/biocrats_iiti/",
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 256 256"
//         className="w-6 h-6 fill-white"
//       >
//         <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
//         {/* <path d="M128 80a48 48 0 1 0 48 48 48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm48-112H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V96a48 48 0 0 0-48-48Zm0 176H80a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32v96a32 32 0 0 1-32 32ZM188 76a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" /> */}
//       </svg>
//     ),
//     bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
//   },
//   {
//     name: "Facebook",
//     link: "https://www.facebook.com/biocratsiiti",
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 256 256"
//         className="w-6 h-6 fill-white"
//       >
//         <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />

//         {/* <path d="M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24Zm8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0Z" /> */}
//       </svg>
//     ),
//     bg: "bg-blue-600",
//   },
//   {
//     name: "LinkedIn",
//     link: "https://www.linkedin.com/in/biocratsclub-iiti/",
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 256 256"
//         className="w-6 h-6 fill-white"
//       >
//         <path d="M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24Zm-28 152h-20v-64h20Zm-10-72a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm82 72h-20v-32c0-8.84-7.16-16-16-16s-16 7.16-16 16v32h-20v-64h20v10.94a27.94 27.94 0 0 1 20-8.94c16.57 0 30 13.43 30 30Z" />
//       </svg>
//     ),
//     bg: "bg-blue-700",
//   },
//   {
//     name: "Twitter",
//     link: "https://x.com/biocrats_iiti",
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 256 256"
//         className="w-6 h-6 fill-white"
//       >
//         <path d="M247.39 68.94A8 8 0 0 0 240 64h-30.43A48.66 48.66 0 0 0 168.1 40a47 47 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a111 111 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72ZM202.43 98.35a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08 11.51-6.25 27.56-17 37.88-32.48a8 8 0 0 0-2.66-11.44c-.47-.27-43.91-26.34-44-96 16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A31 31 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21A8 8 0 0 0 204.67 80h16Z" />
//       </svg>
//     ),
//     bg: "bg-sky-500",
//   },
//   {
//     name: "Email",
//     link: "mailto:biocrats@iiti.ac.in",
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 256 256"
//         className="w-6 h-6 fill-white"
//       >
//         <path d="M224 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16Zm-8 24-88 55-88-55Zm-176 96V85l84 53a8 8 0 0 0 8 0l84-53v91Z" />
//       </svg>
//     ),
//     bg: "bg-red-600",
//   },
//   ];

//   return (
//     <div
//       className="min-h-screen bg-slate-50"
//       style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
//     >
//       {/* Main Content */}
//       <main className="flex-1">
//         <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20">
//           <div className="mx-auto max-w-7xl">
//             <div className="text-center mb-12">
//               <h1 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
//                 Gallery
//               </h1>
//               <p className="text-slate-500 text-lg mt-4 max-w-3xl mx-auto">
//                 Explore the vibrant moments captured at Biocrats Club IIT
//                 Indore. From workshops to competitions, our gallery showcases
//                 the essence of our activities and the spirit of our community.
//               </p>
//             </div>

//             {/* Gallery Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {galleryImages.map((image, index) => (
//                 <a
//                   key={index}
//                   className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//                   onClick={() => setSelectedImage(image)}
//                 >
//                   <div
//                     className="w-full bg-center bg-no-repeat aspect-square bg-cover transition-transform duration-300 group-hover:scale-105"
//                     style={{ backgroundImage: `url("${image}")` }}
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-5xl max-h-[90vh]">
//             <button
//               className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✕
//             </button>
//             <img
//               src={selectedImage}
//               alt="Gallery"
//               className="max-w-full max-h-[90vh] object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-slate-100 border-t border-slate-200">
//         <div className="mx-auto max-w-7xl px-5 py-12">
//           <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//             <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
//               {footerLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
//                   href="#"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//             <div className="flex justify-center gap-4">
//               {/* {socialIcons.map((icon, index) => (
//                 <a
//                   key={index}
//                   className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
//                   href="#"
//                 >
//                   <svg
//                     fill="currentColor"
//                     height="24"
//                     viewBox="0 0 256 256"
//                     width="24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d={icon.path} />
//                   </svg>
//                 </a>
//               ))} */}
//                 {socialIcons.map((item) => (
//         <a
//           key={item.name}
//           href={item.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`${item.bg} w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform`}
//           aria-label={item.name}
//         >
//           {item.svg}
//         </a>
//       ))}
//             </div>
//           </div>
//           <div className="mt-8 border-t border-slate-200 pt-8 text-center">
//             <p className="text-slate-500 text-sm">
//               @2024 Biocrats Club IIT Indore. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BiocratGalleryPage;
import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const BiocratGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuNvQxr6yVb7LhtIt5kVjhEbJ8GhsVhTePP4ebWIPOCPpDBHgWK0_jrKG2bD2VZVN93HuBfxhRY96PGj7bcK8-uuoJMRQjZtx4MJM2XdHKTFDTVTzh5t4E29sw7PjdktWX33APCsSyWoSLdxsq6l7Nxy8lLR3MKGPjWx7zLsHrrnoTZgcCLlWfdcp3IfDHPKzxeV8CJa3Mzu2cwdZOcYj2hsoO85FUmPRr2qvhib6OaKUNSLNQqoUfk8vk_vzT8CUVyxme3BfCe9HI",
  ];

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in">
              Gallery
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore the vibrant moments captured at Biocrats Club IIT Indore
            </p>
            <p className="mt-4 text-base sm:text-lg text-blue-200 max-w-2xl mx-auto">
              From workshops to competitions, our gallery showcases the essence of our activities and the spirit of our community
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openImage(image, index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={closeModal}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 hidden sm:block"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 hidden sm:block"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between sm:hidden">
            <button
              className="text-white hover:text-gray-300 transition-colors p-3 rounded-full bg-white/10"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="text-white hover:text-gray-300 transition-colors p-3 rounded-full bg-white/10"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BiocratGalleryPage;