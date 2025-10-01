// import React, { useState } from 'react';

// const BiocratTeamPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const coreTeam = [
//     {
//       name: "Dr. Anya Sharma",
//       role: "Faculty Advisor",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUoN5qjLH5NEEQ4vztbsAURdLQifIFCyK4B5WJGJIb-CGDD_nzjTVKLXAWovIPr94846-ofgoHBETX_f2YAU8IOqKyJLqRcHY9wjx5wEBc22s4ROaJ5tKTyAwt78NHZiY517thLNItTVN4l0ju5GbzX6Vx1BRpdryXFG9nYJE4oRka9s9mQNGVtbOgj1zfsYYblLmLh9-cFHmJ_jK0Gt2oEYAf1n2SY_L4fldya081B5xapwLmFOy6fklqlbghjt31Y5x4lqLrEczw"
//     },
//     {
//       name: "Dr. Rohan Verma",
//       role: "Faculty Co-Advisor",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsgv8Jo4R5uFKbmQJVmwblhHI1_P6-iSzycd-Zq-DcIwU4w0DU9RKEgpRfdv1LaVQ2awFuuOEQS9r5ie870MgitpYL8GJ1NIbRJvU_5AHRboWTc4Jo3028MOKIho3dCAv0NYcSljjfcQLQQ6vpnb8JvzzhpbiA4AYMvJNwz-Kni0Skq1FfYimCac9jRf0AZQ8C8SYw3uFIUbjHiuswI6P74MCZxtUYM6Tx2hohoSSsGnISG9yreYp8COcxWj4BNgOf6-MKrqPWSKgv"
//     },
//     {
//       name: "Dr. Priya Kapoor",
//       role: "Faculty Co-Advisor",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9VgPJOx69XzKHXbzmpkT1FHJnboMUEzK0H1fjm8PRu_SpZpY-p4o2Yb4SKFerbR_XhG1srGKuHLCBvohs5xFCUrhqymA_Xi8_R5zXQKQgpJCF9Jbxhu3Fe2q8fPQffFo2yJPCVl-Sqye3ZOmk4JYuUNzalOhRXJ_fQSmcJlCjgSVYts1SSTHdxMLetblh29suQ32W0Ag1iXwCaH2jIzDmPgJXZk8J238t1WcE7BjYq68vMtCqCUnJ-t5IIt0y0Lrgv3aIMIYmjjgq"
//     }
//   ];

//   const coordinators = [
//     {
//       name: "Arjun Patel",
//       role: "President",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLXX2IFj5JB4cISuJ12gQLA-au1RpCtSS9NUf0X2MUPVftQPB84LOBRQI1hkbfdtFLfYKUnFum8d5ovHgN3N4ANI9GBGD-eIB0ax7ACAVrpUEsyOolwCJsjpVGExKWg219au8r2hG3DzMcO0PTbCUh1WDVI0_5IOQh_6_AmzjLt_4MUaPHX97a8xxv7038SETsnLywgnHu1iZjCmU2m8TJM7QuJ2KKHoHBKKKgM0nSzaSN9XrfHpvEQ7GIk9Qqp7pEDkWB2--sQC9z"
//     },
//     {
//       name: "Kiran Joshi",
//       role: "Vice President",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBImoZlMP7rxSftt9A9wvoTX9XJNOOB_nWTK44h_gGWp9pwjlAe7EtILSMqVLhHYzgM4br2BF3SgNzoNSiBxsvHAy1yz6pEQn-Wc8CYvaQkWfCm2j3qJgLJKRWR_yHhHdRK2nVsqWTNB8T3JVFzVNkd6WJUamzys6YLC1hsE08GTN8jxFgJX9ftPme1Qp2vuE2kYpTMkgQR9WUQyyPOuwmnH6LI5a0TYNTWlwMQDVNLhjeTzi8dvQnZDQ-UDLCL7-NKgimpauE_EIzc"
//     },
//     {
//       name: "Riya Singh",
//       role: "Secretary",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5Z_fSmDo2p3VrXl9r0kUG_a4N5IphFqd-SOlRGj1i6JffyNPYvzgPlwrOkSz5P9i1cuUAR567b6L-hXAGSV-7ifQwsRgt6pbkYZUOVeQdUj6ORWhNwhPwM2N5emLFCYZgMJx-IDtkXRRH2EwhBOysFureP07u3upZ3WjIkVlQbygFN6WUqMVrm1HfTo4NIOwmRmJnjuaGo-dIZPD2oRaHlXfSpqL3fgiOm-KlARqZJYjKhoOCqAGCxZ5Imx7wvCeZ99AYwa6YQORt"
//     },
//     {
//       name: "Vikram Mehra",
//       role: "Treasurer",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTjjtI-akhqyb0Ft6c3LFh1mnpW66oEbVy31eRTu2IA-fqZaTTTsKeV7yFB_FMuYTdHMCztEzBdn_mKd92m_0693gokQZadp3piVe0TEWpAyHIohOB3NZeAuq6DB6RPUZvJ5yb8ZmBVD5VJ6SwVv-8_I0-rY3yJg0rLN99q_sgMBgJrSRE_z9OhFTLKiziydsCwnMtLAsuyyoQniZ5xYX2Xqm0qIp-1T49tb1TxBSXeKIjJWJCSPtBaD4R3x8rJc1xm5aBvd3Uhm5L"
//     }
//   ];

//   const executiveMembers = [
//     {
//       name: "Neha Verma",
//       role: "Event Manager",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnXULbLHzCNixLWSDpoR32aA7mcu5lE8LNiA1PSeim-bvV2yff4uA4VANRytS-FhJ1qH4X3EfRwFFojosVykRwc3cCokY4d92czwRLRzy5385wugri6kamtEU6i_P-QaCvaMB2w4CKL_e8FfVi5MTQwYaDtEDSI7YoRVg4r34tvyD-PbEfzW9Mpq-XPfm1Si7HHEdnZyDJNjtcRkUEa3SdbDQDB5R4W1B52YYMc5pyZ--7XdO3cROX7DP44HR3yhOLmNdnNNR9RxRR"
//     },
//     {
//       name: "Siddharth Kapoor",
//       role: "Technical Lead",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW3wnROSAqPtjpLE-hCYYs_Ur5FOO1uqFJs3y-F2VrtPLd2GkWPwszMBuLBN2CQ_IfWgBiTlj0nPieyGn5SIPQZJW-2j2nAzIj4aaz83ARA7LebiO5BVHhPCYtP53Oo_KGdvGVHz5ZMn1diVm73JbkDz1hN8EJWP6rddc8r_Do1KKl1TzMXza4qZip-Xnz9JJXN14iDvIQRI5tFK-awbYfm0G-W4SpZkUtuEmO-a4CHcxMnkWhj0peDY-f9Mcx9hykgLdVJBO6m2R4"
//     },
//     {
//       name: "Anika Sharma",
//       role: "Outreach Coordinator",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDme78RmAqS164kH_ti4EVmhHeYZvOIUDtsv9r0hcEFnbEyWZMXmGUk5tjXPaTE94u8NbrpXGkEL27EcLaqvO3FtyRss12KVtM1CyH06DIXGuLCE9mjjNUqF9vU1L02ZF3iu0jH_vdnNB6BzP9Pm0-k1_sbpF-LNLgfV2zM6igf4zuye1B53YiP70jYy4jPGFzanNHuD7PW98_JxHb561ETp3Oipc8sEkVE_CtVjiAshcWEnYFiduW-c5JkWkuIgenhn6zydtfTaneP"
//     },
//     {
//       name: "Rohan Patel",
//       role: "Design Head",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAbyZTU5uZAWfpDLOleI8RBZJ0geqOTK59JEAZAqKECWoZdUyFwPgjoJSCC-MVyVcW2A2PkwBwvMhSOtcRBpjxOMnBVmQNaObJLEMAZD11hZV62tI8yTyRbfOU6Pk_rSm4Bpuoi9D7etsTNwy3yQa3LCjKRzh2OX9m01NyrLv6WjZNwBI-kQ-UkrmyE9EikonMLOQWdKGrQ7Gq8Op_8PTOjV2Kbr4SaJNmEqFBc5Pn5ynMMVNYZ6_SED-7WyHzc4UcrtIieh3QkK_5"
//     },
//     {
//       name: "Pooja Joshi",
//       role: "Content Writer",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3K4gwaSswV4PANeXg-v7B6_OfCl5pOsrWfi5m0xGkpWMDNRXn0T3bUI1JnuS-4n74i0k08wyY-G8ZKhMWKYTOHOl2BeF_NOupo0DkYdztz_M2LyIIutEOs86ATyy_4agt8kvcYSt7z5eVVMAK0NDhr4eDm_VAiD-A-L5FlTwbaGMHewXWCnwtlt9nohSCYuvC9Jp8C8mB4Xhrt9vprin2343vvMHyVMg_yHpI9WapGBEb1TlNAlS6rivML2mWy6hMLJdbu-0TnXBL"
//     },
//     {
//       name: "Aryan Singh",
//       role: "Social Media Manager",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYXm4tufH4t12vtA4yj-MZiopZDICjsX-N4ie42SXzs_mdW3EsxvI4Yj9QmYRbQdlHIbQCHj_ZM688DM1bvIXF7ftfzYmXbXug_0TMhVMgqjCNvSfFr0wwj3SE10XBxiBbSDRBf-dyP31xi2Rr7LTZeTNtmkVpo7KFLqOzJGg525XtQom8UmuU1BQLiCImVKbaj_4Y-MN-l7jxgatdUmu-ql0k78GQj1dWoTrCUOnvw5M_xqdjlpcINT0DetG0mqnMDoUyUhRP4koo"
//     }
//   ];

//   const TeamCard = ({ member, isPrimary = false }) => (
//     <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//       <img
//         alt={member.name}
//         className="w-32 h-32 rounded-full mb-4 object-cover"
//         src={member.image}
//       />
//       <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
//       <p className={`text-sm font-medium ${isPrimary ? 'text-blue-600' : 'text-slate-500'}`}>
//         {member.role}
//       </p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
//       <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4 shadow-sm bg-white">
//         <div className="flex items-center gap-4">
//           <svg className="text-blue-600 h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//             <path
//               clipRule="evenodd"
//               d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
//               fill="currentColor"
//               fillRule="evenodd"
//             />
//           </svg>
//           <h1 className="text-xl font-bold tracking-tight">Biocrats Club</h1>
//         </div>
//         <nav className="flex items-center gap-8">
//           <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer" href="#">Home</a>
//           <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer" href="#">Events</a>
//           <a className="text-sm font-bold text-blue-600 cursor-pointer" href="#">Team</a>
//           <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer" href="#">Gallery</a>
//           <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer" href="#">Contact</a>
//         </nav>
//         <div className="relative">
//           <input
//             className="h-10 w-64 rounded-md border border-slate-300 bg-slate-100 pl-10 pr-4 text-sm placeholder-slate-500 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
//             placeholder="Search"
//             type="search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </div>
//       </header>

//       <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Our Team</h1>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
//               Meet the dedicated individuals who drive the Biocrats Club at IIT Indore.
//             </p>
//           </div>

//           <div className="mb-16">
//             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 border-b-2 border-blue-600 pb-3">
//               Core Team
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {coreTeam.map((member, index) => (
//                 <TeamCard key={index} member={member} isPrimary={true} />
//               ))}
//             </div>
//           </div>

//           <div className="mb-16">
//             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 border-b-2 border-blue-600 pb-3">
//               Student Coordinators
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {coordinators.map((member, index) => (
//                 <TeamCard key={index} member={member} />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 border-b-2 border-blue-600 pb-3">
//               Executive Members
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
//               {executiveMembers.map((member, index) => (
//                 <TeamCard key={index} member={member} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BiocratTeamPage;
import React, { useState } from 'react';
import { Search, Mail, Linkedin, Twitter } from 'lucide-react';

const BiocratTeamPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const coreTeam = [
    {
      name: "Dr. Anya Sharma",
      role: "Faculty Advisor",
      department: "Biotechnology",
      bio: "Leading research in synthetic biology and metabolic engineering",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUoN5qjLH5NEEQ4vztbsAURdLQifIFCyK4B5WJGJIb-CGDD_nzjTVKLXAWovIPr94846-ofgoHBETX_f2YAU8IOqKyJLqRcHY9wjx5wEBc22s4ROaJ5tKTyAwt78NHZiY517thLNItTVN4l0ju5GbzX6Vx1BRpdryXFG9nYJE4oRka9s9mQNGVtbOgj1zfsYYblLmLh9-cFHmJ_jK0Gt2oEYAf1n2SY_L4fldya081B5xapwLmFOy6fklqlbghjt31Y5x4lqLrEczw"
    },
    {
      name: "Dr. Rohan Verma",
      role: "Faculty Co-Advisor",
      department: "Bioinformatics",
      bio: "Expert in computational biology and genomics",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsgv8Jo4R5uFKbmQJVmwblhHI1_P6-iSzycd-Zq-DcIwU4w0DU9RKEgpRfdv1LaVQ2awFuuOEQS9r5ie870MgitpYL8GJ1NIbRJvU_5AHRboWTc4Jo3028MOKIho3dCAv0NYcSljjfcQLQQ6vpnb8JvzzhpbiA4AYMvJNwz-Kni0Skq1FfYimCac9jRf0AZQ8C8SYw3uFIUbjHiuswI6P74MCZxtUYM6Tx2hohoSSsGnISG9yreYp8COcxWj4BNgOf6-MKrqPWSKgv"
    },
    {
      name: "Dr. Priya Kapoor",
      role: "Faculty Co-Advisor",
      department: "Molecular Biology",
      bio: "Specializing in cellular mechanisms and disease pathways",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9VgPJOx69XzKHXbzmpkT1FHJnboMUEzK0H1fjm8PRu_SpZpY-p4o2Yb4SKFerbR_XhG1srGKuHLCBvohs5xFCUrhqymA_Xi8_R5zXQKQgpJCF9Jbxhu3Fe2q8fPQffFo2yJPCVl-Sqye3ZOmk4JYuUNzalOhRXJ_fQSmcJlCjgSVYts1SSTHdxMLetblh29suQ32W0Ag1iXwCaH2jIzDmPgJXZk8J238t1WcE7BjYq68vMtCqCUnJ-t5IIt0y0Lrgv3aIMIYmjjgq"
    }
  ];

  const coordinators = [
    {
      name: "Arjun Patel",
      role: "President",
      year: "Final Year",
      category: "leadership",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLXX2IFj5JB4cISuJ12gQLA-au1RpCtSS9NUf0X2MUPVftQPB84LOBRQI1hkbfdtFLfYKUnFum8d5ovHgN3N4ANI9GBGD-eIB0ax7ACAVrpUEsyOolwCJsjpVGExKWg219au8r2hG3DzMcO0PTbCUh1WDVI0_5IOQh_6_AmzjLt_4MUaPHX97a8xxv7038SETsnLywgnHu1iZjCmU2m8TJM7QuJ2KKHoHBKKKgM0nSzaSN9XrfHpvEQ7GIk9Qqp7pEDkWB2--sQC9z"
    },
    {
      name: "Kiran Joshi",
      role: "Vice President",
      year: "Third Year",
      category: "leadership",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBImoZlMP7rxSftt9A9wvoTX9XJNOOB_nWTK44h_gGWp9pwjlAe7EtILSMqVLhHYzgM4br2BF3SgNzoNSiBxsvHAy1yz6pEQn-Wc8CYvaQkWfCm2j3qJgLJKRWR_yHhHdRK2nVsqWTNB8T3JVFzVNkd6WJUamzys6YLC1hsE08GTN8jxFgJX9ftPme1Qp2vuE2kYpTMkgQR9WUQyyPOuwmnH6LI5a0TYNTWlwMQDVNLhjeTzi8dvQnZDQ-UDLCL7-NKgimpauE_EIzc"
    },
    {
      name: "Riya Singh",
      role: "Secretary",
      year: "Third Year",
      category: "leadership",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5Z_fSmDo2p3VrXl9r0kUG_a4N5IphFqd-SOlRGj1i6JffyNPYvzgPlwrOkSz5P9i1cuUAR567b6L-hXAGSV-7ifQwsRgt6pbkYZUOVeQdUj6ORWhNwhPwM2N5emLFCYZgMJx-IDtkXRRH2EwhBOysFureP07u3upZ3WjIkVlQbygFN6WUqMVrm1HfTo4NIOwmRmJnjuaGo-dIZPD2oRaHlXfSpqL3fgiOm-KlARqZJYjKhoOCqAGCxZ5Imx7wvCeZ99AYwa6YQORt"
    },
    {
      name: "Vikram Mehra",
      role: "Treasurer",
      year: "Third Year",
      category: "leadership",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTjjtI-akhqyb0Ft6c3LFh1mnpW66oEbVy31eRTu2IA-fqZaTTsKeV7yFB_FMuYTdHMCztEzBdn_mKd92m_0693gokQZadp3piVe0TEWpAyHIohOB3NZeAuq6DB6RPUZvJ5yb8ZmBVD5VJ6SwVv-8_I0-rY3yJg0rLN99q_sgMBgJrSRE_z9OhFTLKiziydsCwnMtLAsuyyoQniZ5xYX2Xqm0qIp-1T49tb1TxBSXeKIjJWJCSPtBaD4R3x8rJc1xm5aBvd3Uhm5L"
    }
  ];

  const executiveMembers = [
    {
      name: "Neha Verma",
      role: "Event Manager",
      year: "Second Year",
      category: "events",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnXULbLHzCNixLWSDpoR32aA7mcu5lE8LNiA1PSeim-bvV2yff4uA4VANRytS-FhJ1qH4X3EfRwFFojosVykRwc3cCokY4d92czwRLRzy5385wugri6kamtEU6i_P-QaCvaMB2w4CKL_e8FfVi5MTQwYaDtEDSI7YoRVg4r34tvyD-PbEfzW9Mpq-XPfm1Si7HHEdnZyDJNjtcRkUEa3SdbDQDB5R4W1B52YYMc5pyZ--7XdO3cROX7DP44HR3yhOLmNdnNNR9RxRR"
    },
    {
      name: "Siddharth Kapoor",
      role: "Technical Lead",
      year: "Second Year",
      category: "technical",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW3wnROSAqPtjpLE-hCYYs_Ur5FOO1uqFJs3y-F2VrtPLd2GkWPwszMBuLBN2CQ_IfWgBiTlj0nPieyGn5SIPQZJW-2j2nAzIj4aaz83ARA7LebiO5BVHhPCYtP53Oo_KGdvGVHz5ZMn1diVm73JbkDz1hN8EJWP6rddc8r_Do1KKl1TzMXza4qZip-Xnz9JJXN14iDvIQRI5tFK-awbYfm0G-W4SpZkUtuEmO-a4CHcxMnkWhj0peDY-f9Mcx9hykgLdVJBO6m2R4"
    },
    {
      name: "Anika Sharma",
      role: "Outreach Coordinator",
      year: "Second Year",
      category: "outreach",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDme78RmAqS164kH_ti4EVmhHeYZvOIUDtsv9r0hcEFnbEyWZMXmGUk5tjXPaTE94u8NbrpXGkEL27EcLaqvO3FtyRss12KVtM1CyH06DIXGuLCE9mjjNUqF9vU1L02ZF3iu0jH_vdnNB6BzP9Pm0-k1_sbpF-LNLgfV2zM6igf4zuye1B53YiP70jYy4jPGFzanNHuD7PW98_JxHb561ETp3Oipc8sEkVE_CtVjiAshcWEnYFiduW-c5JkWkuIgenhn6zydtfTaneP"
    },
    {
      name: "Rohan Patel",
      role: "Design Head",
      year: "Second Year",
      category: "creative",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAbyZTU5uZAWfpDLOleI8RBZJ0geqOTK59JEAZAqKECWoZdUyFwPgjoJSCC-MVyVcW2A2PkwBwvMhSOtcRBpjxOMnBVmQNaObJLEMAZD11hZV62tI8yTyRbfOU6Pk_rSm4Bpuoi9D7etsTNwy3yQa3LCjKRzh2OX9m01NyrLv6WjZNwBI-kQ-UkrmyE9EikonMLOQWdKGrQ7Gq8Op_8PTOjV2Kbr4SaJNmEqFBc5Pn5ynMMVNYZ6_SED-7WyHzc4UcrtIieh3QkK_5"
    },
    {
      name: "Pooja Joshi",
      role: "Content Writer",
      year: "Second Year",
      category: "creative",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3K4gwaSswV4PANeXg-v7B6_OfCl5pOsrWfi5m0xGkpWMDNRXn0T3bUI1JnuS-4n74i0k08wyY-G8ZKhMWKYTOHOl2BeF_NOupo0DkYdztz_M2LyIIutEOs86ATyy_4agt8kvcYSt7z5eVVMAK0NDhr4eDm_VAiD-A-L5FlTwbaGMHewXWCnwtlt9nohSCYuvC9Jp8C8mB4Xhrt9vprin2343vvMHyVMg_yHpI9WapGBEb1TlNAlS6rivML2mWy6hMLJdbu-0TnXBL"
    },
    {
      name: "Aryan Singh",
      role: "Social Media Manager",
      year: "Second Year",
      category: "creative",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYXm4tufH4t12vtA4yj-MZiopZDICjsX-N4ie42SXzs_mdW3EsxvI4Yj9QmYRbQdlHIbQCHj_ZM688DM1bvIXF7ftfzYmXbXug_0TMhVMgqjCNvSfFr0wwj3SE10XBxiBbSDRBf-dyP31xi2Rr7LTZeTNtmkVpo7KFLqOzJGg525XtQom8UmuU1BQLiCImVKbaj_4Y-MN-l7jxgatdUmu-ql0k78GQj1dWoTrCUOnvw5M_xqdjlpcINT0DetG0mqnMDoUyUhRP4koo"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Members' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'technical', label: 'Technical' },
    { id: 'events', label: 'Events' },
    { id: 'creative', label: 'Creative' },
    { id: 'outreach', label: 'Outreach' }
  ];

  const filteredExecutive = executiveMembers.filter(member =>
    activeFilter === 'all' || member.category === activeFilter
  );

  const filteredCoordinators = coordinators.filter(member =>
    activeFilter === 'all' || member.category === activeFilter
  );

  const allMembers = [...coreTeam, ...coordinators, ...executiveMembers];
  const searchResults = searchQuery
    ? allMembers.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const TeamCard = ({ member, isPrimary = false, showYear = false }) => (
    <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
          <img
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            src={member.image}
          />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
        <p className={`text-sm font-semibold mb-2 ${isPrimary ? 'text-blue-600' : 'text-purple-600'}`}>
          {member.role}
        </p>
        {member.department && (
          <p className="text-xs text-slate-500 mb-2">{member.department}</p>
        )}
        {member.year && showYear && (
          <p className="text-xs text-slate-500 mb-2">{member.year}</p>
        )}
        {member.bio && (
          <p className="text-xs text-slate-600 mt-2 px-2 leading-relaxed">{member.bio}</p>
        )}
        <div className="flex gap-3 justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Mail className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
          <Linkedin className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
          <Twitter className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50" style={{ fontFamily: '"Inter", "Public Sans", sans-serif' }}>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <main className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg className="text-blue-600 h-12 w-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Biocrats Club
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Meet the passionate minds driving innovation in biotechnology at IIT Indore
            </p>

            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  className="w-full h-12 rounded-full border-2 border-slate-200 bg-white pl-12 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all shadow-md"
                  placeholder="Search team members..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {searchResults ? (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Search Results ({searchResults.length})
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {searchResults.map((member, index) => (
                    <TeamCard key={index} member={member} showYear={true} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-slate-500 py-12">No members found matching your search.</p>
              )}
            </div>
          ) : (
            <>
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                    Faculty Advisors
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {coreTeam.map((member, index) => (
                    <TeamCard key={index} member={member} isPrimary={true} />
                  ))}
                </div>
              </div>

              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                    Student Leadership
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {coordinators.map((member, index) => (
                    <TeamCard key={index} member={member} showYear={true} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                    Executive Team
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3 mb-10 justify-center">
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeFilter === filter.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                          : 'bg-white text-slate-600 hover:bg-slate-100 shadow-md'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                  {filteredExecutive.map((member, index) => (
                    <TeamCard key={index} member={member} showYear={true} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default BiocratTeamPage;