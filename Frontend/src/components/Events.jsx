// import React, { useState } from 'react';
// import { Search, ArrowRight } from 'lucide-react';

// const BiocratIcon = () => (
//   <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
//     <path
//       clipRule="evenodd"
//       d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
//       fill="currentColor"
//       fillRule="evenodd"
//     />
//   </svg>
// );

// const EventCard = ({ event }) => {
//   const isPastEvent = event.status === 'Past Event';

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
//       <div className="relative">
//         <div
//           className="h-48 bg-center bg-cover"
//           style={{ backgroundImage: `url("${event.image}")` }}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-20" />
//       </div>
//       <div className="p-6">
//         <p className="text-sm text-slate-500 mb-1">{event.status}</p>
//         <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
//         <p className="text-slate-600 text-sm mb-4">{event.description}</p>
//         <button
//           className={`w-full flex items-center justify-center gap-2 rounded-md h-10 px-4 text-sm font-semibold transition-colors ${
//             isPastEvent
//               ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
//               : 'bg-blue-600 text-white hover:bg-blue-700'
//           }`}
//         >
//           <span>{isPastEvent ? 'Learn More' : 'Register Now'}</span>
//           {!isPastEvent && <ArrowRight className="w-4 h-4" />}
//         </button>
//       </div>
//     </div>
//   );
// };

// const BiocatsEventsPage = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const navLinks = [
//     { name: 'Home', href: '#', active: false },
//     { name: 'Events', href: '#', active: true },
//     { name: 'Gallery', href: '#', active: false },
//     { name: 'Team', href: '#', active: false },
//     { name: 'Contact', href: '#', active: false }
//   ];

//   const events = [
//     {
//       id: 1,
//       status: 'Upcoming',
//       title: 'Biotech Innovation Challenge',
//       description: 'A competition focused on innovative solutions in biotechnology. Present your ideas to a panel of experts.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDR_fYLKFYjh3TbdiIjx22y94Tu1hvnf--ZacmrvDdLJEZTsbbyHDaQktYvq0B5nfLBsUEtloo5_Ed5-OANLyLw4isYGBHXfe9YGgP0bRFEtfc7ZFR89RmMUzCBzAKcQ_W-E98zPrb0H0zGe9BgvYtNrjqqOZq-Hzy6Ma0g7eyeC7M0rEuJztUWSXST0hrjnuABtRMx_3iEz9AnrwkkARQBImXzDtm3-LGkbcfv6SGu0sJTvugyY7MrYXVQ0knrVUSwtvGdDG1idKS'
//     },
//     {
//       id: 2,
//       status: 'Past Event',
//       title: 'Genomics Workshop',
//       description: 'A hands-on workshop covering the fundamentals of genomics and its applications in modern research.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-wfgrWgtlgeDprwEfcqAcvwdAyo8zz4aIA1-rC9hgO-A5kMpJ1IEosk9MYrdKWxp0VWIwDzphMfOTg9uE8VxyMcxOJ7kG71DFhA-vkpghFORSj6W67BwqM702JsUqJZ8qEJyu9FfuxHo9KJY4Jj-3-459sa6oD8Gd9U2m-nhmGxGS3hFj_sUBsrECjACns4kTQJjvfNrxRJ94s9DTfjs7lQsLSs-VmUW7e4pW6Qb_Ee_dMEpXTFTLRZqhGCYxanMqlYh1W8_wK8zi'
//     },
//     {
//       id: 3,
//       status: 'Past Event',
//       title: 'Bioinformatics Symposium',
//       description: 'A symposium featuring talks from leading researchers in bioinformatics, discussing the latest advancements.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJaDctduvk6ms3-TOzd_olJm_j3rnWJo6GcGQ_vh-TPA-KPnadjy6hOuMShU4gz3v5apc0DoihX8Cb4Dr85cVe5G3wBERUq6awRRgIKzK91EI-NThnMOxknI79DjyuVEJcSjIYsGqmiHjtQi2EzuONADJBHbKROF8sbdNpynnBNgaACE20hi8-j4OIjhE1Fesk4o6Sfjyz4fGhyWSzfFYm_C75Cx6FiAhpEACyFRJ-Wvk5QtmQytbqcmn3Nh2vehOH0vXzupCflVlg'
//     },
//     {
//       id: 4,
//       status: 'Past Event',
//       title: 'Synthetic Biology Hackathon',
//       description: 'A hackathon focused on synthetic biology, where participants will work on projects involving genetic engineering.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxizQm3SKZsed6EMrnu-vDKpniteumdDGiUCQ4b7lKzKYQ_feRrmu6M-uGu044TrrmmuXzeDS1jUMO1c1h7UCimJaR0vQfN-B3zE5_8fkYtOTU5vyQnASAtpUdNeJT1PMp5SjnrfLH6B_dCVdUduip9urF427J4yMaMoTfb9nga0lWo7obT7qEuV1ZIcTIeOZnfYq_t_rD5HcNcVq_mMaa5eZxv85KXp0sls_zmKLrGDhLGcxm_jREzz8Tili1PPR_bwPsDeLseOq_'
//     },
//     {
//       id: 5,
//       status: 'Past Event',
//       title: 'Microbiology Seminar Series',
//       description: 'A series of seminars covering various topics in microbiology, presented by experts in the field.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAZQZRy2XqPa4K_JDVlShbUaRfDDhHSwkGygo8lfiANJlvimx_uDeYVvxsDvf1VdxChmL6VFmDzZ0Yyme1xS6GYkMgBrK0TM43vKQt2NYCayQRHiuH69u9gP3eybT75f19VMge6my7JF_e7W0JJG_d7AshmA2R5GMRE6vqDDa0mkn05xmnWNKkhf1HxW9Wzfhq2JGrvDV3C4WYRQwzhuRTtGwkSo5WflqUpPBm_bO95nLt00-TqC-Uc1cxDJ8qQmSKyLBvBTTUbY_j'
//     },
//     {
//       id: 6,
//       status: 'Past Event',
//       title: 'Biomedical Engineering Workshop',
//       description: 'A workshop exploring the intersection of biology and engineering, focusing on biomedical devices.',
//       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_QTLjp86sMA6xdxDhh8Zzr0yEnhqILXAbZp5OgSLLzbV5ii4H5B2gdRtwARHqi9VRh8aawbSzHZGXa42ncnISI9lDipbUUGVmgbXTJhBuZz-2klGKgry2jbBuHooH3SgneK__L2K4X2JH8s_kd5nTCvux_1W6nJjhZ2LgpD53zzOBwY_DFoteyR3-s5g7uOwfg9MHykPJ07ogo5W_brfMEx7p1CYeDRnSZdEMOQYUp0QLvm-B3WKR1d8otpstiZtDgX2wiHZ8AT1L'
//     }
//   ];

//   const filteredEvents = events.filter(event => {
//     if (activeFilter === 'all') return true;
//     if (activeFilter === 'upcoming') return event.status === 'Upcoming';
//     if (activeFilter === 'past') return event.status === 'Past Event';
//     return true;
//   });

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4 shadow-sm bg-white">
//         <div className="flex items-center gap-3 text-slate-800">
//           <div className="text-blue-600">
//             <BiocratIcon />
//           </div>
//           <h2 className="text-slate-900 text-xl font-bold leading-tight">Biocrats Club IIT Indore</h2>
//         </div>
//         <nav className="flex flex-1 justify-end items-center gap-8">
//           <div className="flex items-center gap-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`text-sm font-medium leading-normal transition-colors ${
//                   link.active
//                     ? 'text-blue-600 font-bold'
//                     : 'text-slate-600 hover:text-blue-600'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//           <button className="flex items-center justify-center rounded-md h-10 w-10 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-colors">
//             <Search className="w-5 h-5" />
//           </button>
//         </nav>
//       </header>

//       <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
//               Club Events
//             </h1>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
//               Explore the exciting events organized by the Biocrats Club. From workshops to competitions, there's something for everyone passionate about biosciences.
//             </p>
//           </div>

//           <div className="flex justify-center items-center gap-3 mb-10">
//             <button
//               onClick={() => setActiveFilter('all')}
//               className={`px-4 py-2 text-sm font-semibold rounded-md shadow-md transition-colors ${
//                 activeFilter === 'all'
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-slate-700 hover:bg-slate-100'
//               }`}
//             >
//               All Events
//             </button>
//             <button
//               onClick={() => setActiveFilter('upcoming')}
//               className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                 activeFilter === 'upcoming'
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-slate-700 hover:bg-slate-100'
//               }`}
//             >
//               Upcoming
//             </button>
//             <button
//               onClick={() => setActiveFilter('past')}
//               className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                 activeFilter === 'past'
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-slate-700 hover:bg-slate-100'
//               }`}
//             >
//               Past
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredEvents.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BiocatsEventsPage;
import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  Filter,
} from "lucide-react";

const BiocratIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <path
      clipRule="evenodd"
      d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const EventCard = ({ event }) => {
  const isPastEvent = event.status === "Past Event";

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <div
          className="h-56 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url("${event.image}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isPastEvent
                ? "bg-slate-600 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {event.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900 leading-tight pr-2">
            {event.title}
          </h3>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          {event.date && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          )}
          {event.participants && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users className="w-4 h-4" />
              <span>{event.participants}</span>
            </div>
          )}
        </div>

        <button
          className={`w-full flex items-center justify-center gap-2 rounded-md h-11 px-4 text-sm font-semibold transition-all duration-300 ${
            isPastEvent
              ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
          }`}
        >
          <span>{isPastEvent ? "View Details" : "Register Now"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const BiocatsEventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      status: "Upcoming",
      title: "Biotech Innovation Challenge",
      description:
        "A competition focused on innovative solutions in biotechnology. Present your ideas to a panel of experts and compete for exciting prizes.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDDR_fYLKFYjh3TbdiIjx22y94Tu1hvnf--ZacmrvDdLJEZTsbbyHDaQktYvq0B5nfLBsUEtloo5_Ed5-OANLyLw4isYGBHXfe9YGgP0bRFEtfc7ZFR89RmMUzCBzAKcQ_W-E98zPrb0H0zGe9BgvYtNrjqqOZq-Hzy6Ma0g7eyeC7M0rEuJztUWSXST0hrjnuABtRMx_3iEz9AnrwkkARQBImXzDtm3-LGkbcfv6SGu0sJTvugyY7MrYXVQ0knrVUSwtvGdDG1idKS",
      date: "November 15, 2025",
      location: "Main Auditorium, IIT Indore",
      participants: "150+ participants expected",
      category: "competition",
    },
    {
      id: 2,
      status: "Past Event",
      title: "Genomics Workshop",
      description:
        "A comprehensive hands-on workshop covering the fundamentals of genomics and its applications in modern research and healthcare.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-wfgrWgtlgeDprwEfcqAcvwdAyo8zz4aIA1-rC9hgO-A5kMpJ1IEosk9MYrdKWxp0VWIwDzphMfOTg9uE8VxyMcxOJ7kG71DFhA-vkpghFORSj6W67BwqM702JsUqJZ8qEJyu9FfuxHo9KJY4Jj-3-459sa6oD8Gd9U2m-nhmGxGS3hFj_sUBsrECjACns4kTQJjvfNrxRJ94s9DTfjs7lQsLSs-VmUW7e4pW6Qb_Ee_dMEpXTFTLRZqhGCYxanMqlYh1W8_wK8zi",
      date: "September 20, 2025",
      location: "Biology Lab Complex",
      participants: "80 participants attended",
      category: "workshop",
    },
    {
      id: 3,
      status: "Past Event",
      title: "Bioinformatics Symposium",
      description:
        "A symposium featuring talks from leading researchers in bioinformatics, discussing the latest advancements and future directions.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJaDctduvk6ms3-TOzd_olJm_j3rnWJo6GcGQ_vh-TPA-KPnadjy6hOuMShU4gz3v5apc0DoihX8Cb4Dr85cVe5G3wBERUq6awRRgIKzK91EI-NThnMOxknI79DjyuVEJcSjIYsGqmiHjtQi2EzuONADJBHbKROF8sbdNpynnBNgaACE20hi8-j4OIjhE1Fesk4o6Sfjyz4fGhyWSzfFYm_C75Cx6FiAhpEACyFRJ-Wvk5QtmQytbqcmn3Nh2vehOH0vXzupCflVlg",
      date: "August 12, 2025",
      location: "Conference Hall",
      participants: "200+ attendees",
      category: "symposium",
    },
    {
      id: 4,
      status: "Past Event",
      title: "Synthetic Biology Hackathon",
      description:
        "A 48-hour hackathon focused on synthetic biology, where participants worked on innovative projects involving genetic engineering.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxizQm3SKZsed6EMrnu-vDKpniteumdDGiUCQ4b7lKzKYQ_feRrmu6M-uGu044TrrmmuXzeDS1jUMO1c1h7UCimJaR0vQfN-B3zE5_8fkYtOTU5vyQnASAtpUdNeJT1PMp5SjnrfLH6B_dCVdUduip9urF427J4yMaMoTfb9nga0lWo7obT7qEuV1ZIcTIeOZnfYq_t_rD5HcNcVq_mMaa5eZxv85KXp0sls_zmKLrGDhLGcxm_jREzz8Tili1PPR_bwPsDeLseOq_",
      date: "July 5-7, 2025",
      location: "Innovation Center",
      participants: "50 teams participated",
      category: "competition",
    },
    {
      id: 5,
      status: "Past Event",
      title: "Microbiology Seminar Series",
      description:
        "A series of enlightening seminars covering various topics in microbiology, presented by renowned experts in the field.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAZQZRy2XqPa4K_JDVlShbUaRfDDhHSwkGygo8lfiANJlvimx_uDeYVvxsDvf1VdxChmL6VFmDzZ0Yyme1xS6GYkMgBrK0TM43vKQt2NYCayQRHiuH69u9gP3eybT75f19VMge6my7JF_e7W0JJG_d7AshmA2R5GMRE6vqDDa0mkn05xmnWNKkhf1HxW9Wzfhq2JGrvDV3C4WYRQwzhuRTtGwkSo5WflqUpPBm_bO95nLt00-TqC-Uc1cxDJ8qQmSKyLBvBTTUbY_j",
      date: "June 15-17, 2025",
      location: "Lecture Hall 1",
      participants: "120 attendees",
      category: "seminar",
    },
    {
      id: 6,
      status: "Past Event",
      title: "Biomedical Engineering Workshop",
      description:
        "An intensive workshop exploring the intersection of biology and engineering, focusing on cutting-edge biomedical devices.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_QTLjp86sMA6xdxDhh8Zzr0yEnhqILXAbZp5OgSLLzbV5ii4H5B2gdRtwARHqi9VRh8aawbSzHZGXa42ncnISI9lDipbUUGVmgbXTJhBuZz-2klGKgry2jbBuHooH3SgneK__L2K4X2JH8s_kd5nTCvux_1W6nJjhZ2LgpD53zzOBwY_DFoteyR3-s5g7uOwfg9MHykPJ07ogo5W_brfMEx7p1CYeDRnSZdEMOQYUp0QLvm-B3WKR1d8otpstiZtDgX2wiHZ8AT1L",
      date: "May 22, 2025",
      location: "Engineering Block",
      participants: "65 participants",
      category: "workshop",
    },
  ];

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "workshop", label: "Workshops" },
    { id: "competition", label: "Competitions" },
    { id: "symposium", label: "Symposiums" },
    { id: "seminar", label: "Seminars" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesStatus =
      activeFilter === "all" ||
      (activeFilter === "upcoming" && event.status === "Upcoming") ||
      (activeFilter === "past" && event.status === "Past Event");

    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;

    return matchesStatus && matchesCategory;
  });

  const upcomingCount = events.filter((e) => e.status === "Upcoming").length;
  const pastCount = events.filter((e) => e.status === "Past Event").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="absolute inset-0 bg-grid-slate-100 opacity-50 -z-10"></div>

      <main className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="text-blue-600">
                <BiocratIcon />
              </div>
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Biocrats Club Events
              </h1>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover and participate in groundbreaking events organized by the
              Biocrats Club at IIT Indore. From cutting-edge workshops to
              competitive challenges, we foster innovation in biosciences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Filter Events
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeFilter === "all"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    All Events ({events.length})
                  </button>
                  <button
                    onClick={() => setActiveFilter("upcoming")}
                    className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeFilter === "upcoming"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Upcoming ({upcomingCount})
                  </button>
                  <button
                    onClick={() => setActiveFilter("past")}
                    className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeFilter === "past"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Past Events ({pastCount})
                  </button>
                </div>
              </div>

              <div className="md:border-l md:pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Category</h3>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-48 px-4 py-2 text-sm font-medium border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Calendar className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No events found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filters to see more events.
              </p>
            </div>
          )}

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't miss out on upcoming events and opportunities. Join our
              community to receive notifications about new events and
              activities.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BiocatsEventsPage;
