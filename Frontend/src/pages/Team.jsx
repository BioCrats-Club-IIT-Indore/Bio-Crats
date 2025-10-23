import React, { useState } from "react";
import {X, Search, Mail, Linkedin} from "lucide-react";
import { TbWorld } from "react-icons/tb";
import faculty1 from "../assets/faculty/faculty1.jpg";
import faculty2 from "../assets/faculty/faculty2.jpg";
import Anand from "../assets/core/Anand.jpg";
import Anjali from "../assets/core/Anjali.jpeg";
import Raza from "../assets/core/Raza.jpg";
import Pooja from "../assets/core/Pooja.jpg";
import Ayushi from "../assets/core/Ayushi.jpg";
import Shudh from "../assets/core/Shudh.jpg";
import Viraj from "../assets/core/Viraj.jpg";
import Smita from "../assets/core/Smita.jpg";
import logo from "../assets/logo.png";

const BiocratTeamPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [zoomedImage, setZoomedImage] = useState(null);


  const coreTeam = [
    {
      name: "Dr. Hitendra Kumar",
      role: "Assistant Professor",
      bio :"Biofabrication Laboratory",
      department: "Biotechnology",
      image: faculty1,
      linkedin: "https://www.linkedin.com/in/hitendra-iitk/",
      website :"https://sites.google.com/iiti.ac.in/hk-lab/",
      mail: "mailto:sivarajms@iiti.ac.in"
    },
    {
      name: "Dr. Sivaraj Mohana Sundaram",
      role: "Assistant Professor",
      bio :"Neurobiology lab",
      department: "Biotechnology",
      image: faculty2,
      linkedin: "https://www.linkedin.com/in/sivaraj-mohana-sundaram-462b62160/",
      website :"https://sites.google.com/view/smslabpageiiti/home",
      mail: "mailto:hitendra@iiti.ac.in"
    },
  ];

  const coordinators = [
    {
      name: "Anjali Singh",
      role: "Club Head",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/anjalisin0807/",
      mail: "mailto:mt2402171003@iiti.ac.in",
      image: Anjali,
    },
    {
      name: "Smita Karati",
      role: "Co-Head",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/smita-karati0714/",
      mail: "mailto:msc2403171020@iiti.ac.in",
      image: Smita,
    },
    {
      name: "Asjad Raza",
      role: "MTech Convenor",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/asjadraza54/",
      mail: "mailto:mt2402171009@iiti.ac.in",
      image: Raza,
    },
    {
      name: "Ayushi Rawat",
      role: "MTech Convenor",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/ayushi-rawat-aa8002263/",
      mail: "mailto:mt2502171032@iiti.ac.in",
      image: Ayushi,
    },
    {
      name: "Shudhanshu Ranjan Singh",
      role: "MSc Convenor",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/shudhanshu-ranjan-singh-b6784a322/",
      mail: "mailto:msc2403171021@iiti.ac.in",
      image: Shudh,
    },
    {
      name: "Pooja Pahel",
      role: "MSc Convenor",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/pooja-p-900450260/",
      mail: "mailto:msc2503171009@iiti.ac.in",
      image: Pooja,
    },
    {
      name: "Anand Vivek",
      role: "Cross Department Convenor",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/anandvivek1223/",
      mail: "mailto:me240003006@iiti.ac.in",
      image: Anand,
    },
    {
      name: "Viraj Tekale",
      role: "Treasurer",
      category: "leadership",
      linkedin: "https://www.linkedin.com/in/viraj-tekale-a77a49285/",
      mail: "mailto:mt2502171038@iiti.ac.in",
      image: Viraj,
    },
  ];

  const executiveMembers = [
    {
      name: "Anand  Vivek",
      role: "Event Manager",
      year: "Second Year",
      category: "events",
      image: Anand
        },
    {
      name: " Ayushi",
      role: "Adviser Team",
      category: "Adviser",
      image: Ayushi
    },
    {
      name: "Raza",
      role: "Outreach Coordinator",
      year: "Second Year",
      category: "outreach",
      image: Raza
     },
    {
      name: "S R S",
      role: "Design Head",
      year: "Second Year",
      category: "creative",
      image: Shudh
      },
    {
      name: "Pooja ",
      role: "Content Writer",
      year: "Second Year",
      category: "creative",
      image:Pooja
      },
    {
      name: "Viraj",
      role: "Social Media Manager",
      year: "Second Year",
      category: "creative",
      image: Viraj    },
  ];

  const filters = [
    { id: "all", label: "All Members" },
    { id: "leadership", label: "Leadership" },
    { id: "Adviser", label: "Adviser" },
    { id: "events", label: "Events" },
    { id: "creative", label: "Creative" },
    { id: "outreach", label: "Outreach" },
  ];

  const filteredExecutive = executiveMembers.filter(
    (member) => activeFilter === "all" || member.category === activeFilter
  );

  const allMembers = [...coreTeam, ...coordinators, ...executiveMembers];
  const searchResults = searchQuery
    ? allMembers.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const ImageModal = ({ image, name, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="max-w-3xl max-h-[90vh] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );

  const TeamCard = ({ member, isPrimary = false }) => (
    <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div
          className="w-44 h-44 rounded-full overflow-hidden mb-5 ring-4 ring-blue-100 group-hover:ring-6 group-hover:ring-purple-300 transition-all duration-500 cursor-pointer shadow-xl group-hover:shadow-2xl"
          onClick={() => setZoomedImage({ image: member.image, name: member.name })}
        >
          <img
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-125  transition-all duration-700"
            src={member.image}
          />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
          {member.name}
        </h3>

        <p className={`text-m font-semibold mb-2 ${isPrimary ? "text-blue-600" : "text-purple-600"}`}>
          {member.role}
        </p>


        {member.bio && (
          <p className="text-m text-slate-600 mt-3 px-2 leading-relaxed">
            {member.bio}
          </p>
        )}

        <div className="flex gap-4 justify-center mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
            </a>
          )}
           {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:scale-110"
            >
              <TbWorld className="w-5 h-5 text-blue-600" />
            </a>
          )}
          {member.mail && (
            <a
              href={member.mail}
              className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 text-purple-600" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      style={{ fontFamily: '"Inter", "Public Sans", sans-serif' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-50"></div>

      {zoomedImage && (
        <ImageModal
          image={zoomedImage.image}
          name={zoomedImage.name}
          onClose={() => setZoomedImage(null)}
        />
      )}

      <main className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <img className="h-16 w-16 rounded-full shadow-lg" src={logo} alt="BioCrats Logo" />
              <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                BioCrats Club
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Meet the passionate minds driving innovation in biotechnology at IIT Indore
            </p>

            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  className="w-full h-14 rounded-full border-2 border-slate-200 bg-white pl-14 pr-6 text-base focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all shadow-lg hover:shadow-xl"
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Search Results ({searchResults.length})
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {searchResults.map((member, index) => (
                    <TeamCard key={index} member={member} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-slate-500 py-12">
                  No members found matching your search.
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-2 w-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
                  <h2 className="text-5xl font-bold tracking-tight text-slate-900">
                    Faculty Advisors
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {coreTeam.map((member, index) => (
                    <TeamCard key={index} member={member} isPrimary={true} />
                  ))}
                </div>
              </div>

              <div className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-2 w-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>
                  <h2 className="text-5xl font-bold tracking-tight text-slate-900">
                    Core Members
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {coordinators.map((member, index) => (
                    <TeamCard key={index} member={member} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-2 w-24 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full"></div>
                  <h2 className="text-5xl font-bold tracking-tight text-slate-900">
                    Club Members
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeFilter === filter.id
                          ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl scale-110"
                          : "bg-white text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 shadow-md hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {filteredExecutive.map((member, index) => (
                    <TeamCard key={index} member={member} />
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
