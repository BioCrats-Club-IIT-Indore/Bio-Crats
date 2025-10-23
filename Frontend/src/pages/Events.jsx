

// import React, { useState, useEffect } from "react";
// import Workshop from "../assets/Events/Workshop.png";
// import Sci5 from "../assets/Events/Sci5.png";
// import Techexpo from "../assets/Events/Techexpo.png";
// import Fusion from "../assets/Events/Fusion.png";
// import logo from "../assets/logo.png";

// import {
//   Calendar,
//   MapPin,
//   Users,
//   ArrowRight,
//   Filter,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   Edit,
//   Trash2,
//   Upload,
//   Save,
//   Clock,
//   FileText, // Added FileText
//   Image, // Added Image
//   File, // Added File
// } from "lucide-react";

// // API Configuration
// const API_URL = "http://localhost:5000/api";

// // --- HELPER FUNCTIONS ---

// // Function to get icon based on file type (Required by AdminEventForm)
// const getFileIcon = (mimeType) => {
//   if (mimeType.startsWith("image/")) {
//     return <Image className="w-5 h-5 text-green-500" />;
//   }
//   // This function is currently not fully used for non-images in the form,
//   // but it's defined for completeness.
//   return <File className="w-5 h-5 text-gray-500" />;
// };

// // --- HELPER COMPONENTS ---

// // Image Gallery Modal Component
// const ImageGalleryModal = ({ images, currentIndex, onClose, onNavigate }) => {
//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
//       >
//         <X className="w-8 h-8" />
//       </button>

//       {images.length > 1 && (
//         <>
//           <button
//             onClick={() => onNavigate("prev")}
//             className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
//           >
//             <ChevronLeft className="w-10 h-10" />
//           </button>
//           <button
//             onClick={() => onNavigate("next")}
//             className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
//           >
//             <ChevronRight className="w-10 h-10" />
//           </button>
//         </>


//       )}

//       <div className="relative w-full h-full flex items-center justify-center">
//         <img
//           src={images[currentIndex]}
//           alt={`Event ${currentIndex + 1}`}
//           className="max-w-full max-h-full object-contain"
//         />
//         {images.length > 1 && (
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
//             {currentIndex + 1} / {images.length}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Event Details Modal Component
// const EventDetailsModal = ({ event, onClose, onImageClick }) => {
//   return (
//     <div className="fixed inset-0 z-40 overflow-y-auto">
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50"
//           onClick={onClose}
//         ></div>

//         <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//           {/* Replaced float-right with flex-start in parent and top-4 right-4 in button to fix sticky issue */}
//           <div className="sticky top-0 p-4 pb-0 flex justify-end z-10">
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="p-6 pt-0 sm:p-8 sm:pt-0">
//             <div
//               className={`grid gap-2 mb-6 ${
//                 event.images.length === 1
//                   ? "grid-cols-1"
//                   : event.images.length === 2
//                   ? "grid-cols-2"
//                   : "grid-cols-2 sm:grid-cols-3"
//               }`}
//             >
//               {event.images.map((img, idx) => (
//                 <div
//                   key={idx}
//                   className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
//                   onClick={() => onImageClick(idx)}
//                 >
//                   <img
//                     src={img}
//                     alt={`${event.title} ${idx + 1}`}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
//                 </div>
//               ))}
//             </div>

//             <span
//               className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
//                 event.status === "Past Event"
//                   ? "bg-slate-600 text-white"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {event.status}
//             </span>

//             <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
//               {event.title}
//             </h2>

//             <p className="text-slate-700 text-base leading-relaxed mb-6 whitespace-pre-line">
//               {event.fullDescription || event.description}
//             </p>

//             <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-lg">
//               {event.date && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <Calendar className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.date}</span>
//                 </div>
//               )}
//               {event.location && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <MapPin className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.location}</span>
//                 </div>
//               )}
//               {event.participants && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <Users className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.participants}</span>
//                 </div>
//               )}
//               {(event.speaker || event.Speaker) && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <Users className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.speaker || event.Speaker}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Admin Event Form Modal
// const AdminEventForm = ({ event, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     title: event?.title || "",
//     description: event?.description || "",
//     fullDescription: event?.fullDescription || "",
//     status: event?.status || "Upcoming",
//     date: event?.date || "",
//     location: event?.location || "",
//     participants: event?.participants || "",
//     speaker: event?.speaker || event?.Speaker || "",
//     category: event?.category || "workshop",
//   });
//   const [images, setImages] = useState([]);
//   const [existingImages, setExistingImages] = useState(event?.images || []);
//   const [loading, setLoading] = useState(false);
//   // Removed selectedFiles state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     // This will handle the new images to be uploaded
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   // Removed handleFileSelect and removeFile functions

//   const removeExistingImage = (index) => {
//     setExistingImages(existingImages.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     existingImages.forEach((img) => {
//       data.append("existingImages", img);
//     });

//     // Append new images (files) for upload
//     images.forEach((img) => {
//       data.append("images", img);
//     });

//     await onSave(data);
//     setLoading(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50"
//           onClick={onClose}
//         ></div>

//         <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
//             <h2 className="text-2xl font-bold text-slate-900">
//               {event ? "Edit Event" : "Create New Event"}
//             </h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="p-6 space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Event Title *
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Status *
//                 </label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="Upcoming">Upcoming</option>
//                   <option value="Past Event">Past Event</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Category *
//                 </label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="workshop">Workshop</option>
//                   <option value="competition">Competition</option>
//                   <option value="symposium">Symposium</option>
//                   <option value="seminar">Seminar</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Short Description *
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 rows="3"
//                 className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Full Description
//               </label>
//               <textarea
//                 name="fullDescription"
//                 value={formData.fullDescription}
//                 onChange={handleChange}
//                 rows="6"
//                 className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Date *
//                 </label>
//                 <input
//                   type="text"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   placeholder="e.g., November 15, 2025"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="e.g., Main Auditorium, IIT Indore"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Participants
//                 </label>
//                 <input
//                   type="text"
//                   name="participants"
//                   value={formData.participants}
//                   onChange={handleChange}
//                   placeholder="e.g., 150+ participants expected"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Speaker
//                 </label>
//                 <input
//                   type="text"
//                   name="speaker"
//                   value={formData.speaker}
//                   onChange={handleChange}
//                   placeholder="e.g., Dr. John Doe"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Event Images
//               </label>

//               {existingImages.length > 0 && (
//                 <div className="mb-4">
//                   <p className="text-sm text-slate-600 mb-2">
//                     Existing Images:
//                   </p>
//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//                     {existingImages.map((img, idx) => (
//                       <div key={idx} className="relative group">
//                         <img
//                           src={
//                             img.startsWith("http")
//                               ? img
//                               : `http://localhost:5000/${img}`
//                           }
//                           alt={`Event ${idx}`}
//                           className="w-full h-24 object-cover rounded"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeExistingImage(idx)}
//                           className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
//                         >
//                           <X className="w-4 h-4" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
//                 <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                 <input
//                   type="file"
//                   multiple
//                   onChange={handleImageChange}
//                   className="hidden"
//                   id="file-upload"
//                   accept="image/*"
//                 />
//                 <label
//                   htmlFor="file-upload"
//                   className="cursor-pointer text-indigo-600 hover:text-indigo-700 font-semibold text-lg"
//                 >
//                   Click to upload images
//                 </label>
//               </div>

//               {images.length > 0 && (
//                 <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
//                   {images.map((file, idx) => (
//                     <div key={idx} className="relative">
//                       <img
//                         src={URL.createObjectURL(file)}
//                         alt="Preview"
//                         className="w-full h-24 object-cover rounded"
//                       />
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setImages((prev) => prev.filter((_, i) => i !== idx))
//                         }
//                         className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="flex gap-4 pt-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
//               >
//                 <Save className="w-5 h-5" />
//                 {loading ? "Saving..." : "Save Event"}
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Event Card Component
// const EventCard = ({
//   event,
//   onReadMore,
//   onImageClick,
//   isAdmin,
//   onEdit,
//   onDelete,
// }) => {
//   const isPastEvent = event.status === "Past Event";
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNextImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
//   };

//   const handlePrevImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex(
//       (prev) => (prev - 1 + event.images.length) % event.images.length
//     );
//   };

//   return (
//     <div className="group bg-white rounded-2xl shadow-md overflow-y-auto hover:shadow-2xl transition-all duration-300 flex flex-col max-h-[80vh]">
//       <div className="relative overflow-hidden">
//         <div
//           className="h-38 sm:h-56 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
//           style={{
//             backgroundImage: `url("${
//               event.images?.[currentImageIndex]?.startsWith("http")
//                 ? event.images[currentImageIndex]
//                 : `http://localhost:5000/api/${event.images[currentImageIndex]}`
//             }")`,
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//         <div className="absolute top-4 right-4">
//           <span
//             className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
//               isPastEvent
//                 ? "bg-slate-600 text-white"
//                 : "bg-green-500 text-white"
//             }`}
//           >
//             {event.status}
//           </span>
//         </div>

//         {event.images.length > 1 && (
//           <>
//             <button
//               onClick={handlePrevImage}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1.5 transition-all"
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </button>
//             <button
//               onClick={handleNextImage}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1.5 transition-all"
//             >
//               <ChevronRight className="w-4 h-4" />
//             </button>
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
//               {event.images.map((_, idx) => (
//                 <div
//                   key={idx}
//                   className={`w-1.5 h-1.5 rounded-full transition-all ${
//                     idx === currentImageIndex
//                       ? "bg-white w-4"
//                       : "bg-white bg-opacity-50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </>
//         )}

//         {isAdmin && (
//           <div className="absolute top-4 left-4 flex gap-2">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onEdit(event);
//               }}
//               className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors shadow-lg"
//             >
//               <Edit className="w-4 h-4" />
//             </button>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onDelete(event);
//               }}
//               className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors shadow-lg"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="p-5 sm:p-6 flex flex-col flex-grow">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight pr-2">
//             {event.title}
//           </h3>
//         </div>

//         <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
//           {event.description}
//         </p>

//         <div className="space-y-2 mb-4">
//           {event.date && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
//               <Calendar className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">{event.date}</span>
//             </div>
//           )}
//           {event.location && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
//               <MapPin className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">{event.location}</span>
//             </div>
//           )}
//           {event.participants && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
//               <Users className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">{event.participants}</span>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={() => onReadMore(event)}
//           className={`w-full flex items-center justify-center gap-2 rounded-lg h-11 px-4 text-m font-semibold transition-all duration-300 ${
//             isPastEvent
//               ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
//               : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
//           }`}
//         >
//           <span>Read More</span>
//           <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const BiocatsEventsPage = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [galleryOpen, setGalleryOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [editingEvent, setEditingEvent] = useState(null);

//   const categories = [
//     { id: "all", label: "All Categories" },
//     { id: "workshop", label: "Workshops" },
//     { id: "competition", label: "Competitions" },
//     { id: "symposium", label: "Symposiums" },
//     { id: "seminar", label: "Seminars" },
//   ];

//   useEffect(() => {
//     fetchEvents();
//     checkAdminStatus();
//   }, []);

//   const checkAdminStatus = async () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const response = await fetch(`${API_URL}/profile`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         if (data.user && data.user.isAdmin) {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//         }
//       } catch (error) {
//         console.error("Error checking admin status:", error);
//         setIsAdmin(false);
//       }
//     } else {
//       setIsAdmin(false);
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${API_URL}/events`);
//       const data = await response.json();
//       if (data.success) {
//         const eventsWithAbsoluteImages = data.events.map((event) => ({
//           ...event,
//           images: event.images.map((imagePath) =>
//             imagePath.startsWith("http") ? imagePath : `${API_URL}${imagePath}`
//           ),
//         }));
//         // ---------------------------------
//         setEvents(eventsWithAbsoluteImages);
//       }
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateEvent = () => {
//     setEditingEvent(null);
//     setShowEventForm(true);
//   };

//   const handleEditEvent = (event) => {
//     setEditingEvent(event);
//     setShowEventForm(true);
//   };

//   const handleSaveEvent = async (formData) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login as admin to perform this action");
//         return;
//       }

//       const url = editingEvent
//         ? `${API_URL}/events/${editingEvent._id || editingEvent.id}`
//         : `${API_URL}/events`;

//       const method = editingEvent ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert(data.message);
//         setShowEventForm(false);
//         fetchEvents();
//       } else {
//         alert("Error: " + data.message);
//       }
//     } catch (error) {
//       console.error("Error saving event:", error);
//       alert("Error saving event");
//     }
//   };

//   const handleDeleteEvent = async (event) => {
//     if (!window.confirm("Are you sure you want to delete this event?")) {
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login as admin to perform this action");
//         return;
//       }

//       const response = await fetch(
//         `${API_URL}/events/${event._id || event.id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         alert(data.message);
//         fetchEvents();
//       } else {
//         alert("Error: " + data.message);
//       }
//     } catch (error) {
//       console.error("Error deleting event:", error);
//       alert("Error deleting event");
//     }
//   };

//   const filteredEvents = events.filter((event) => {
//     const matchesStatus =
//       activeFilter === "all" ||
//       (activeFilter === "upcoming" && event.status === "Upcoming") ||
//       (activeFilter === "past" && event.status === "Past Event");

//     const matchesCategory =
//       selectedCategory === "all" || event.category === selectedCategory;

//     return matchesStatus && matchesCategory;
//   });

//   const upcomingCount = events.filter((e) => e.status === "Upcoming").length;
//   const pastCount = events.filter((e) => e.status === "Past Event").length;

//   const handleReadMore = (event) => {
//     setSelectedEvent(event);
//   };

//   const handleImageClick = (event, index = 0) => {
//     setSelectedEvent(event);
//     setCurrentImageIndex(index);
//     setGalleryOpen(true);
//   };

//   const handleGalleryNavigate = (direction) => {
//     if (!selectedEvent) return;
//     if (direction === "next") {
//       setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
//     } else {
//       setCurrentImageIndex(
//         (prev) =>
//           (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//       <div className="absolute inset-0 bg-grid-slate-100 opacity-50 -z-10"></div>

//       <main className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//               <img
//                 className="h-20 w-20 rounded-full shadow-xl ring-4 ring-blue-100"
//                 src={logo}
//                 alt="BioCrats Logo"
//               />

//               <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 BioCrats Club Events
//               </h1>
//             </div>
//             <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
//               Discover and participate in groundbreaking events organized by the
//               Biocrats Club at IIT Indore. From cutting-edge workshops to
//               competitive challenges, we foster innovation in biosciences and
//               biotechnology. 🧬
//             </p>
//           </div>

//           {/* Admin Panel */}
//           {isAdmin && (
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <div className="text-white">
//                   <h3 className="text-xl font-bold mb-1">Admin Panel</h3>
//                   <p className="text-blue-100 text-sm">Manage your events</p>
//                 </div>
//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleCreateEvent}
//                     className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
//                   >
//                     <Plus className="w-5 h-5" />
//                     Create New Event
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8 sm:mb-10">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//               <div className="flex-1">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Filter className="w-5 h-5 text-blue-600" />
//                   <h3 className="text-base sm:text-lg font-bold text-slate-900">
//                     Filter Events
//                   </h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {" "}
//                   <button
//                     onClick={() => setActiveFilter("all")}
//                     className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
//                       activeFilter === "all"
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//                     }`}
//                   >
//                     All Events ({events.length})
//                   </button>
//                   <button
//                     onClick={() => setActiveFilter("upcoming")}
//                     className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
//                       activeFilter === "upcoming"
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//                     }`}
//                   >
//                     Upcoming ({upcomingCount})
//                   </button>
//                   <button
//                     onClick={() => setActiveFilter("past")}
//                     className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
//                       activeFilter === "past"
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//                     }`}
//                   >
//                     Past Events ({pastCount})
//                   </button>
//                 </div>
//               </div>

//               <div className="lg:border-l lg:pl-6">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Clock className="w-5 h-5 text-blue-600" />
//                   <h3 className="text-base sm:text-lg font-bold text-slate-900">
//                     Filter by Category
//                   </h3>
//                 </div>
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="w-full lg:w-48 px-4 py-2 text-sm font-medium border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                 >
//                   {categories.map((cat) => (
//                     <option key={cat.id} value={cat.id}>
//                       {cat.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/* Events Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {loading ? (
//               // Loading State
//               <div className="col-span-full text-center py-10">
//                 <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-3"></div>
//                 <p className="text-slate-600">Loading events...</p>
//               </div>
//             ) : filteredEvents.length === 0 ? (
//               // No Events State
//               <div className="col-span-full text-center py-10 bg-white rounded-xl shadow-lg p-8">
//                 <p className="text-xl font-semibold text-slate-700">
//                   No events found matching your criteria.
//                 </p>
//                 <p className="text-slate-500 mt-2">
//                   Try adjusting your filters.
//                 </p>
//               </div>
//             ) : (
//               // Event Cards
//               filteredEvents.map((event) => (
//                 <EventCard
//                   key={event._id || event.id}
//                   event={event}
//                   onReadMore={handleReadMore}
//                   onImageClick={handleImageClick}
//                   isAdmin={isAdmin}
//                   onEdit={handleEditEvent}
//                   onDelete={handleDeleteEvent}
//                 />
//               ))
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Modals */}
//       {selectedEvent && !galleryOpen && (
//         <EventDetailsModal
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//           onImageClick={(index) => handleImageClick(selectedEvent, index)}
//         />
//       )}

//       {galleryOpen && selectedEvent && (
//         <ImageGalleryModal
//           images={selectedEvent.images}
//           currentIndex={currentImageIndex}
//           onClose={() => setGalleryOpen(false)}
//           onNavigate={handleGalleryNavigate}
//         />
//       )}

//       {showEventForm && (
//         <AdminEventForm
//           event={editingEvent}
//           onClose={() => setShowEventForm(false)}
//           onSave={handleSaveEvent}
//         />
//       )}
//     </div>
//   );
// };
// export default BiocatsEventsPage;

import React, { useState } from "react";
import Workshop from "../assets/Events/Workshop.png";
import featured from "../assets/Events/Feature.png";
import Sci5 from "../assets/Events/Sci5.png";
import Techexpo from "../assets/Events/Techexpo.png";
import Fusion from "../assets/Events/Fusion.png";
import logo from "../assets/logo.png";

import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Image Gallery Modal Component
const ImageGalleryModal = ({ images, currentIndex, onClose, onNavigate }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={() => onNavigate('prev')}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={() => onNavigate('next')}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </>
      )}

      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Event image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

// Event Details Modal Component
const EventDetailsModal = ({ event, onClose, onImageClick }) => {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

        <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="sticky top-4 float-right mr-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-6 sm:p-8">
            {/* Image Gallery */}
            <div className={`grid gap-2 mb-6 ${event.images.length === 1 ? 'grid-cols-1' : event.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {event.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
                  onClick={() => onImageClick(idx)}
                >
                  <img
                    src={img}
                    alt={`${event.title} ${idx + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Status Badge */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                event.status === "Past Event"
                  ? "bg-slate-600 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {event.status}
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {event.title}
            </h2>

            {/* Description */}
            <p className="text-slate-700 text-base leading-relaxed mb-6 whitespace-pre-line">
              {event.fullDescription || event.description}
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-lg">
              {event.date && (
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Calendar className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
                  <span>{event.date}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
                  <span>{event.location}</span>
                </div>
              )}
              {event.participants && (
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Users className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
                  <span>{event.participants}</span>
                </div>
              )}
              {event.Speaker && (
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Users className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
                  <span>{event.Speaker}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, onReadMore, onImageClick }) => {
  const isPastEvent = event.status === "Past Event";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <div
          className="h-48 sm:h-56 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          style={{ backgroundImage: `url("${event.images[currentImageIndex]}")` }}
          onClick={() => onImageClick(event, currentImageIndex)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
              isPastEvent
                ? "bg-slate-600 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {event.status}
          </span>
        </div>

        {/* Image Navigation */}
        {event.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1.5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1.5 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {event.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? "bg-white w-4" : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight pr-2">
            {event.title}
          </h3>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          {event.date && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{event.date}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          )}
          {event.participants && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{event.participants}</span>
            </div>
          )}
        </div>

        <button
          onClick={() => onReadMore(event)}
          className={`w-full flex items-center justify-center gap-2 rounded-lg h-11 px-4 text-sm font-semibold transition-all duration-300 ${
            isPastEvent
              ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
          }`}
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const BiocatsEventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      id: 1,
      status: "Upcoming",
      title: "Biotech Innovation Challenge",
      description:
        "A competition focused on innovative solutions in biotechnology. Present your ideas to a panel of experts and compete for exciting prizes.",
      fullDescription: "A competition focused on innovative solutions in biotechnology. Present your ideas to a panel of experts and compete for exciting prizes.\n\nThis challenge is designed to encourage students to think creatively about solving real-world problems in biotechnology. Participants will have the opportunity to showcase their innovative ideas and receive feedback from industry experts.\n\nPrizes include cash awards, certificates, and potential internship opportunities with leading biotech companies.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDDR_fYLKFYjh3TbdiIjx22y94Tu1hvnf--ZacmrvDdLJEZTsbbyHDaQktYvq0B5nfLBsUEtloo5_Ed5-OANLyLw4isYGBHXfe9YGgP0bRFEtfc7ZFR89RmMUzCBzAKcQ_W-E98zPrb0H0zGe9BgvYtNrjqqOZq-Hzy6Ma0g7eyeC7M0rEuJztUWSXST0hrjnuABtRMx_3iEz9AnrwkkARQBImXzDtm3-LGkbcfv6SGu0sJTvugyY7MrYXVQ0knrVUSwtvGdDG1idKS",
      ],
      date: "November 15, 2025",
      location: "Main Auditorium, IIT Indore",
      participants: "150+ participants expected",
      category: "competition",
    },
    {
      id: 2,
      status: "Past Event",
      title: "Hands-on CAD Workshop",
      description:
        "Join us for a Hands-on CAD Workshop on Autodesk Fusion 360 hosted by Biocrats Club, IIT Indore. Learn to design, engineer & prototype with Fusion 360 – perfect for beginners and enthusiasts alike.",
      fullDescription: "Join us for a Hands-on CAD Workshop on Autodesk Fusion 360 hosted by Biocrats Club, IIT Indore.\n\nLearn to design, engineer & prototype with Fusion 360 – perfect for beginners and enthusiasts alike.\n\nThis comprehensive workshop covered:\n• Introduction to CAD fundamentals\n• Fusion 360 interface and tools\n• 3D modeling techniques\n• Parametric design principles\n• Practical project creation\n\nParticipants gained hands-on experience with industry-standard software and learned essential skills for digital design and prototyping.",
      date: "September 13, 2025 | 10 AM – 3 PM",
      location: "LRC Seminar Hall",
      Speaker: "Dr. Hitendra Kumar, Assistant Professor, IIT Indore",
      images: [Workshop],
      category: "workshop",
    },
    {
      id: 3,
      status: "Past Event",
      title: "TechExpo 2025",
      description:
        "Biocrats Club @ TechExpo 2025. We are excited to share that the Biocrats Club, IIT Indore, participated in the first-ever TechExpo 2025 – a vibrant showcase of innovation and technology!",
      fullDescription: "✨ Biocrats Club @ TechExpo 2025 ✨\n\nWe are excited to share that the Biocrats Club, IIT Indore, participated in the first-ever TechExpo 2025 – a vibrant showcase of innovation and technology! 🚀\n\nOur team presented:\n🧬 3D Bioprinting\n🔦 Projection-based Printing\n\nTech Expo gave us an incredible opportunity to connect, learn, and showcase how biology merges with engineering to solve real-world healthcare challenges.\n\nA big thank you to IIT Indore for organizing such a pioneering event and to everyone who visited our stall with curiosity and enthusiasm. 🙌\n\nA special thanks to Dr. Hitendra Kumar for his constant guidance and support that made this showcase possible.",
      images: [Techexpo],
      date: "August 15, 2025",
      category: "symposium",
    },
    {
      id: 4,
      status: "Past Event",
      title: "Science in 5",
      description:
        "The Biocrats Club at IIT Indore recently hosted Science in 5, an exciting initiative aimed at making biology accessible and engaging for students across disciplines.",
      fullDescription: "The Biocrats Club at IIT Indore recently hosted Science in 5, an exciting initiative aimed at making biology accessible and engaging for students across disciplines—engineering, physics, chemistry, biology, and beyond.\n\nThe event featured stellar talks on cutting-edge topics:\n• Nanorobotics\n• Deep learning in biology\n• 3D bioprinting\n• The green revolution\n• Super-resolution microscopy\n• The human atlas\n• Diagnostics kit development\n• Nano theranostics\n\nThese discussions sparked curiosity, fostered interdisciplinary learning, and highlighted the boundless possibilities of biosciences.\n\n🎲 A major highlight was the Cancer Immunology Board Game, offering participants a fun, hands-on way to explore how immune cells fight cancer.\n\nHuge thanks to the Student Gymkhana, S&T Council, IIT Indore, our brilliant speakers, and spirited participants—your support made Science in 5 a remarkable success!\n\nSpecial thanks to Mackenzie Bender and Lena Wirth (Yale IBIO Outreach) for developing, and Lindsey Hughes for the support and permission to use the Cancer Immunology Board Game.\n\nWe're excited to keep the momentum going with more such events that bridge disciplines and spark scientific curiosity.",
      images: [Sci5],
      location: "LHC Mini Conference",
      participants: "50 students participated",
      category: "seminar",
    },
    {
      id: 6,
      status: "Past Event",
      title: "Design in Motion: Autodesk Fusion 360 CAD Workshop for Beginners",
      description:
        "The Biocrats Club, IIT Indore, hosted the Design in Motion: Autodesk Fusion 360 CAD Workshop for Beginners on September 13, 2025.",
      fullDescription: "✨ The Biocrats Club, IIT Indore, hosted the Design in Motion: Autodesk Fusion 360 CAD Workshop for Beginners on September 13, 2025.\n\nThe session, led by Dr. Hitendra Kumar, Assistant Professor, MFS-BSBE, IIT Indore, brought together enthusiastic participants eager to explore the fundamentals of CAD applications.\n\nIt was inspiring to witness the curiosity and creativity of the students as they learned to transform ideas into digital prototypes.\n\nDr. Kumar's guidance and the support of our dedicated volunteers made the workshop a truly enriching experience. 🌟\n\nParticipants learned:\n• CAD software basics\n• 3D modeling techniques\n• Design principles\n• Prototyping workflows\n• Practical applications in bioengineering\n\nHere are a few glimpses from this exciting day of learning and innovation!",
      images: [Fusion],
      date: "September 13, 2025",
      location: "POD 1D 105",
      Speaker: "Dr. Hitendra Kumar, Assistant Professor, MFS-BSBE, IIT Indore",
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

  const handleReadMore = (event) => {
    setSelectedEvent(event);
  };

  const handleImageClick = (event, index = 0) => {
    setSelectedEvent(event);
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const handleGalleryNavigate = (direction) => {
    if (!selectedEvent) return;
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="absolute inset-0 bg-grid-slate-100 opacity-50 -z-10"></div>

      <main className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img className="h-12 w-12 sm:h-16 sm:w-16 rounded-full shadow-lg" src={logo} alt="BioCrats Logo" />
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                BioCrats Club
              </h1>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Discover and participate in groundbreaking events organized by the
              Biocrats Club at IIT Indore. From cutting-edge workshops to
              competitive challenges, we foster innovation in biosciences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8 sm:mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Filter Events
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeFilter === "all"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    All Events ({events.length})
                  </button>
                  <button
                    onClick={() => setActiveFilter("upcoming")}
                    className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeFilter === "upcoming"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Upcoming ({upcomingCount})
                  </button>
                  <button
                    onClick={() => setActiveFilter("past")}
                    className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeFilter === "past"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Past Events ({pastCount})
                  </button>
                </div>
              </div>

              <div className="lg:border-l lg:pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Category</h3>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full lg:w-48 px-4 py-2 text-sm font-medium border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onReadMore={handleReadMore}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Calendar className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                No events found
              </h3>
              <p className="text-sm sm:text-base text-slate-500">
                Try adjusting your filters to see more events.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Event Details Modal */}
      {selectedEvent && !galleryOpen && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onImageClick={(idx) => {
            setCurrentImageIndex(idx);
            setGalleryOpen(true);
          }}
        />
      )}

      {/* Image Gallery Modal */}
      {selectedEvent && galleryOpen && (
        <ImageGalleryModal
          images={selectedEvent.images}
          currentIndex={currentImageIndex}
          onClose={() => setGalleryOpen(false)}
          onNavigate={handleGalleryNavigate}
        />
      )}
    </div>
  );
};

export default BiocatsEventsPage;
// // import React, { useState } from "react";
// // import Workshop from "../assets/Events/workshop.png";
// // import featured from "../assets/Events/Feature.png"; // Kept for completeness, though not used in the final events array
// // import Sci5 from "../assets/Events/Sci5.png";
// // import Techexpo from "../assets/Events/Techexpo.png";
// // import Fusion from "../assets/Events/Fusion.png";
// // import logo from "../assets/logo.png";

// // import {
// //   Calendar,
// //   MapPin,
// //   Users,
// //   Clock,
// //   ArrowRight,
// //   Filter,
// //   ArrowDown,
// //   ArrowUp,
// //   X,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";

// // // --- New ImageModal Component ---
// // const ImageModal = ({ images, initialIndex, onClose }) => {
// //   const [currentIndex, setCurrentIndex] = useState(initialIndex);

// //   const goToPrevious = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
// //     );
// //   };

// //   const goToNext = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //     );
// //   };

// //   return (
// //     <div
// //       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="relative max-w-7xl w-full h-full md:max-h-[90vh] flex items-center justify-center"
// //         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image area
// //       >
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-all"
// //           aria-label="Close image viewer"
// //         >
// //           <X className="w-6 h-6" />
// //         </button>

// //         {/* Main Image */}
// //         <div className="relative flex-grow h-full w-full flex items-center justify-center">
// //           <img
// //             src={images[currentIndex]}
// //             alt={`Event image ${currentIndex + 1}`}
// //             className="max-h-full max-w-full object-contain rounded-lg"
// //           />

// //           {/* Navigation Arrows */}
// //           {images.length > 1 && (
// //             <>
// //               <button
// //                 onClick={goToPrevious}
// //                 className="absolute left-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-all z-40"
// //                 aria-label="Previous image"
// //               >
// //                 <ChevronLeft className="w-6 h-6" />
// //               </button>
// //               <button
// //                 onClick={goToNext}
// //                 className="absolute right-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-all z-40"
// //                 aria-label="Next image"
// //               >
// //                 <ChevronRight className="w-6 h-6" />
// //               </button>
// //             </>
// //           )}
// //         </div>

// //         {/* Thumbnails (for multiple images) */}
// //         {images.length > 1 && (
// //           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto p-2 bg-black/50 rounded-lg">
// //             {images.map((img, index) => (
// //               <img
// //                 key={index}
// //                 src={img}
// //                 alt={`Thumbnail ${index + 1}`}
// //                 className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all ${
// //                   index === currentIndex
// //                     ? "border-2 border-blue-500 shadow-lg scale-110"
// //                     : "opacity-70 hover:opacity-100"
// //                 }`}
// //                 onClick={() => setCurrentIndex(index)}
// //               />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // --- EventCard Component ---
// // const EventCard = ({ event, onImageClick }) => {
// //   const isPastEvent = event.status === "Past Event";
// //   const [isExpanded, setIsExpanded] = useState(false);

// //   // Check if description needs truncation (e.g., more than 3 lines in the default view)
// //   const descriptionNeedsTruncation = event.description.length > 200; // Heuristic check

// //   const handleToggleDescription = (e) => {
// //     e.preventDefault();
// //     setIsExpanded(!isExpanded);
// //   };

// //   return (
// //     <div className="group flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-blue-400/50 transition-all duration-500 transform hover:-translate-y-1 border border-slate-100">
// //       {/* Image/Gallery Section */}
// //       <div
// //         className="relative overflow-hidden cursor-pointer"
// //         onClick={() => onImageClick(event.images, 0)}
// //       >
// //         <div
// //           className="h-56 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-700"
// //           style={{ backgroundImage: `url("${event.images[0]}")` }}
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
// //         <div className="absolute top-4 right-4">
// //           <span
// //             className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
// //               isPastEvent
// //                 ? "bg-slate-700 text-white"
// //                 : "bg-blue-600 text-white animate-pulse"
// //             }`}
// //           >
// //             {event.status}
// //           </span>
// //         </div>
// //         {event.images.length > 1 && (
// //           <div className="absolute bottom-2 left-3 px-3 py-1 bg-black/60 text-white text-xs rounded-full font-medium">
// //             + {event.images.length - 1} more images
// //           </div>
// //         )}
// //       </div>

// //       {/* Content Section */}
// //       <div className="p-6 flex-grow flex flex-col">
// //         <div className="flex items-start justify-between mb-3">
// //           <h3 className="text-2xl font-extrabold text-slate-900 leading-snug pr-2">
// //             {event.title}
// //           </h3>
// //         </div>

// //         {/* Description and Read More */}
// //         <p
// //           className={`text-slate-700 text-base mb-4 leading-relaxed transition-all duration-500 ${
// //             isExpanded ? "" : "line-clamp-3"
// //           }`}
// //         >
// //           {event.description}
// //         </p>

// //         {descriptionNeedsTruncation && (
// //           <button
// //             onClick={handleToggleDescription}
// //             className="flex items-center gap-1 text-m font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-4 self-start"
// //           >
// //             {isExpanded ? (
// //               <>
// //                 Read Less <ArrowUp className="w-3 h-3" />
// //               </>
// //             ) : (
// //               <>
// //                 Read More <ArrowDown className="w-3 h-3" />
// //               </>
// //             )}
// //           </button>
// //         )}

// //         {/* Event Meta Data */}
// //         <div className="space-y-3 mb-6 pt-4 border-t border-slate-100 mt-auto">
// //           {event.date && (
// //             <div className="flex items-center gap-3 text-sm text-slate-600">
// //               <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
// //               <span className="font-medium">{event.date}</span>
// //             </div>
// //           )}
// //           {event.location && (
// //             <div className="flex items-center gap-3 text-sm text-slate-600">
// //               <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
// //               <span className="font-medium">{event.location}</span>
// //             </div>
// //           )}
// //           {event.participants && (
// //             <div className="flex items-center gap-3 text-sm text-slate-600">
// //               <Users className="w-4 h-4 text-pink-500 flex-shrink-0" />
// //               <span className="font-medium">{event.participants}</span>
// //             </div>
// //           )}
// //         </div>

// //         {/* Action Button */}
// //         <button
// //           className={`w-full flex items-center justify-center gap-2 rounded-lg h-12 px-4 text-base font-bold transition-all duration-300 shadow-lg ${
// //             isPastEvent
// //               ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
// //               : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/50"
// //           }`}
// //         >
// //           <span>{isPastEvent ? "View Highlights" : "Register Now"}</span>
// //           <ArrowRight className="w-4 h-4" />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Main Component ---
// // const BiocatsEventsPage = () => {
// //   const [activeFilter, setActiveFilter] = useState("all");
// //   const [selectedCategory, setSelectedCategory] = useState("all");
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [modalImages, setModalImages] = useState([]);
// //   const [modalInitialIndex, setModalInitialIndex] = useState(0);

// //   const handleImageClick = (images, initialIndex) => {
// //     setModalImages(images);
// //     setModalInitialIndex(initialIndex);
// //     setModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setModalOpen(false);
// //     setModalImages([]);
// //   };

// //   // UPDATED: 'image' replaced with 'images' array for multi-image support
// //   const events = [
// //     {
// //       id: 1,
// //       status: "Upcoming",
// //       title: "Biotech Innovation Challenge",
// //       description:
// //         "A competition focused on innovative solutions in biotechnology. Present your ideas to a panel of experts and compete for exciting prizes. The challenge will cover areas like bioinformatics, synthetic biology, and biomaterials. Participants will have access to mentorship from faculty and industry professionals. The final round will feature live presentations and a networking mixer.",
// //       images: [
// //         "https://lh3.googleusercontent.com/aida-public/AB6AXuDDR_fYLKFYjh3TbdiIjx22y94Tu1hvnf--ZacmrvDdLJEZTsbbyHDaQktYvq0B5nfLBsUEtloo5_Ed5-OANLyLw4isYGBHXfe9YGgP0bRFEtfc7ZFR89RmMUzCBzAKcQ_W-E98zPrb0H0zGe9BgvYtNrjqqOZq-Hzy6Ma0g7eyeC7M0rEuJztUWSXST0hrjnuABtRMx_3iEz9AnrwkkARQBImXzDtm3-LGkbcfv6SGu0sJTvugyY7MrYXVQ0knrVUSwtvGdDG1idKS", // Placeholder for upcoming
// //         "https://via.placeholder.com/800/40e3d2/ffffff?text=Image+2+Coming+Soon",
// //       ],
// //       date: "November 15, 2025",
// //       location: "Main Auditorium, IIT Indore",
// //       participants: "150+ participants expected",
// //       category: "competition",
// //     },
// //     {
// //       id: 2,
// //       status: "Past Event",
// //       title: "Hands-on CAD Workshop",
// //       description:
// //         "🔹 Join us for a Hands-on CAD Workshop on Autodesk Fusion 360 hosted by Biocrats Club, IIT Indore. Learn to design, engineer & prototype with Fusion 360 – perfect for beginners and enthusiasts alike. This intensive session covered sketching, solid modeling, assemblies, and basic simulations, providing a strong foundation for biological and engineering design projects. The event was highly successful with full attendance and excellent feedback. 💡",
// //       date: "📅13 sept 2025 | ⏰ 10 AM – 3 PM |",
// //       location: "📍 LRC Seminar Hall",
// //       Speaker:
// //         "🎙️ Speaker: Dr. Hitendra Kumar, Assistance Professor, IIT Indore",
// //       images: [Workshop, Fusion],
// //       category: "workshop",
// //     },
// //     {
// //       id: 3,
// //       status: "Past Event",
// //       title: "TechExpo 2025 Showcase",
// //       description:
// //         "✨ Biocrats Club @ TechExpo 2025 ✨. We are excited to share that the Biocrats Club, IIT Indore, participated in the first-ever TechExpo 2025 – a vibrant showcase of innovation and technology! 🚀 Our team presented 🧬 3D Bioprinting and 🔦 Projection-based Printing. Tech Expo gave us an incredible opportunity to connect, learn, and showcase how biology merges with engineering to solve real-world healthcare challenges. A big thank you to IIT Indore for organizing such a pioneering event and to everyone who visited our stall with curiosity and enthusiasm. 🙌 A special thanks to Dr. Hitendra Kumar for his constant guidance and support that made this showcase possible.",
// //       images: [Techexpo, "https://via.placeholder.com/800/ff7f50/ffffff?text=TechExpo+Gallery+Shot"],
// //       date: "August 15, 2025",
// //       category: "symposium",
// //     },
// //     {
// //       id: 4,
// //       status: "Past Event",
// //       title: "Science in 5 Symposium",
// //       description:
// //         "The Biocrats Club at IIT Indore recently hosted Science in 5, an exciting initiative aimed at making biology accessible and engaging for students across disciplines—engineering, physics, chemistry, biology, and beyond. The event featured stellar talks on cutting-edge topics like nanorobotics, deep learning in biology, 3D bioprinting, the green revolution, super-resolution microscopy, the human atlas, diagnostics kit development, and nano theranostics. These discussions sparked curiosity, fostered interdisciplinary learning, and highlighted the boundless possibilities of biosciences. 🎲 A major highlight was the Cancer Immunology Board Game, offering participants a fun, hands-on way to explore how immune cells fight cancer. Huge thanks to the Student Gymkhana, S&T Council, IIT Indore, our brilliant speakers, and spirited participants—your support made Science in 5 a remarkable success! Special thanks to Mackenzie Bender and Lena Wirth (Yale IBIO Outreach) for developing, and Lindsey Hughes for the support and permission to use the Cancer Immunology Board Game. We’re excited to keep the momentum going with more such events that bridge disciplines and spark scientific curiosity.",
// //       images: [Sci5, "https://via.placeholder.com/800/4682b4/ffffff?text=Si5+Board+Game"],
// //       location: "LHC mini conference",
// //       participants: "50 students participated",
// //       category: "seminar",
// //     },
// //     {
// //       id: 6,
// //       status: "Past Event",
// //       title: "Design in Motion: Fusion 360 CAD Workshop",
// //       description:
// //         "✨ The Biocrats Club, IIT Indore, hosted the “Design in Motion: Autodesk Fusion 360 CAD Workshop for Beginners” on September 13, 2025. The session, led by Dr. Hitendra Kumar, Assistant Professor, MFS-BSBE, IIT Indore, brought together enthusiastic participants eager to explore the fundamentals of CAD applications. It was inspiring to witness the curiosity and creativity of the students as they learned to transform ideas into digital prototypes. Dr. Kumar’s guidance and the support of our dedicated volunteers made the workshop a truly enriching experience. 🌟 Here are a few glimpses from this exciting day of learning and innovation!",
// //       images: [Fusion, Workshop],
// //       date: "September 13, 2025",
// //       location: "POD 1D 105",
// //       Speaker: " Dr. Hitendra Kumar, Assistant Professor, MFS-BSBE, IIT Indore",
// //       category: "workshop",
// //     },
// //   ];

// //   const categories = [
// //     { id: "all", label: "All Categories" },
// //     { id: "workshop", label: "Workshops" },
// //     { id: "competition", label: "Competitions" },
// //     { id: "symposium", label: "Symposiums" },
// //     { id: "seminar", label: "Seminars" },
// //   ];

// //   const filteredEvents = events.filter((event) => {
// //     const matchesStatus =
// //       activeFilter === "all" ||
// //       (activeFilter === "upcoming" && event.status === "Upcoming") ||
// //       (activeFilter === "past" && event.status === "Past Event");

// //     // Ensure event.category exists before comparing
// //     const eventCategory = event.category || "uncategorized";

// //     const matchesCategory =
// //       selectedCategory === "all" || eventCategory === selectedCategory;

// //     return matchesStatus && matchesCategory;
// //   });

// //   const upcomingCount = events.filter((e) => e.status === "Upcoming").length;
// //   const pastCount = events.filter((e) => e.status === "Past Event").length;

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
// //       <div className="absolute inset-0 bg-grid-slate-100 opacity-50 -z-10"></div>

// //       <main className="relative px-4 sm:px-6 lg:px-8 py-16">
// //         <div className="mx-auto max-w-7xl">
// //           <div className="text-center mb-16">
// //             <div className="flex flex-col items-center gap-4 mb-6">
// //               <img
// //                 className="h-20 w-20 rounded-full shadow-xl ring-4 ring-blue-100"
// //                 src={logo}
// //                 alt="BioCrats Logo"
// //               />
// //               <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
// //                 BioCrats Club Events
// //               </h1>
// //             </div>
// //             <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
// //               Discover and participate in **groundbreaking events** organized by the
// //               Biocrats Club at IIT Indore. From cutting-edge workshops to
// //               competitive challenges, we foster innovation in **biosciences** and **biotechnology**. 🧬
// //             </p>
// //           </div>

// //           {/* --- Filters Section --- */}
// //           <div className="bg-white rounded-xl shadow-2xl p-6 mb-10 border border-blue-100">
// //             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
// //               {/* Status Filters */}
// //               <div className="flex-1">
// //                 <div className="flex items-center gap-2 mb-3">
// //                   <Filter className="w-5 h-5 text-blue-600" />
// //                   <h3 className="text-lg font-bold text-slate-900">
// //                     Filter by Status
// //                   </h3>
// //                 </div>
// //                 <div className="flex flex-wrap gap-3">
// //                   <button
// //                     onClick={() => setActiveFilter("all")}
// //                     className={`px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
// //                       activeFilter === "all"
// //                         ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
// //                         : "bg-slate-100 text-slate-700 hover:bg-blue-100"
// //                     }`}
// //                   >
// //                     All Events ({events.length})
// //                   </button>
// //                   <button
// //                     onClick={() => setActiveFilter("upcoming")}
// //                     className={`px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
// //                       activeFilter === "upcoming"
// //                         ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
// //                         : "bg-slate-100 text-slate-700 hover:bg-blue-100"
// //                     }`}
// //                   >
// //                     Upcoming ({upcomingCount})
// //                   </button>
// //                   <button
// //                     onClick={() => setActiveFilter("past")}
// //                     className={`px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
// //                       activeFilter === "past"
// //                         ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
// //                         : "bg-slate-100 text-slate-700 hover:bg-blue-100"
// //                     }`}
// //                   >
// //                     Past Events ({pastCount})
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Category Filter */}
// //               <div className="w-full lg:w-auto lg:border-l lg:pl-6 pt-6 lg:pt-0">
// //                 <div className="flex items-center gap-2 mb-3">
// //                   <Clock className="w-5 h-5 text-blue-600" />
// //                   <h3 className="text-lg font-bold text-slate-900">
// //                     Filter by Type
// //                   </h3>
// //                 </div>
// //                 <select
// //                   value={selectedCategory}
// //                   onChange={(e) => setSelectedCategory(e.target.value)}
// //                   className="w-full lg:w-60 px-4 py-2.5 text-base font-medium border border-slate-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 bg-white shadow-sm appearance-none"
// //                 >
// //                   {categories.map((cat) => (
// //                     <option key={cat.id} value={cat.id}>
// //                       {cat.label}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>
// //           </div>
// //           {/* --- End Filters Section --- */}

// //           {/* --- Events Grid --- */}
// //           {filteredEvents.length > 0 ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
// //               {filteredEvents.map((event) => (
// //                 <EventCard
// //                   key={event.id}
// //                   event={event}
// //                   onImageClick={handleImageClick}
// //                 />
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="text-center py-20 bg-white rounded-xl shadow-lg border border-slate-100">
// //               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
// //                 <Calendar className="w-8 h-8 text-blue-500" />
// //               </div>
// //               <h3 className="text-2xl font-semibold text-slate-900 mb-2">
// //                 No events found 😟
// //               </h3>
// //               <p className="text-slate-600">
// //                 Try adjusting your filters to see more exciting events.
// //               </p>
// //             </div>
// //           )}
// //           {/* --- End Events Grid --- */}
// //         </div>
// //       </main>

// //       {/* --- Image Modal --- */}
// //       {modalOpen && (
// //         <ImageModal
// //           images={modalImages}
// //           initialIndex={modalInitialIndex}
// //           onClose={closeModal}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default BiocatsEventsPage;

// import React, { useState, useEffect } from "react";
// import {
//   Calendar,
//   MapPin,
//   Users,
//   Clock,
//   ArrowRight,
//   Filter,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   Edit,
//   Trash2,
//   Upload,
//   Save,
//   Lock,
// } from "lucide-react";

// // API Configuration
// const API_URL =  'http://localhost:5000/api';

// // Image Gallery Modal Component
// const ImageGalleryModal = ({ images, currentIndex, onClose, onNavigate }) => {
//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
//       >
//         <X className="w-8 h-8" />
//       </button>

//       {images.length > 1 && (
//         <>
//           <button
//             onClick={() => onNavigate('prev')}
//             className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
//           >
//             <ChevronLeft className="w-10 h-10" />
//           </button>
//           <button
//             onClick={() => onNavigate('next')}
//             className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
//           >
//             <ChevronRight className="w-10 h-10" />
//           </button>
//         </>
//       )}

//       <div className="relative w-full h-full flex items-center justify-center">
//         <img
//           src={images[currentIndex]}
//           alt={`Event ${currentIndex + 1}`}
//           className="max-w-full max-h-full object-contain"
//         />
//         {images.length > 1 && (
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
//             {currentIndex + 1} / {images.length}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Event Details Modal Component
// const EventDetailsModal = ({ event, onClose, onImageClick }) => {
//   return (
//     <div className="fixed inset-0 z-40 overflow-y-auto">
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

//         <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//           <button
//             onClick={onClose}
//             className="sticky top-4 float-right mr-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="p-6 sm:p-8">
//             <div className={`grid gap-2 mb-6 ${event.images.length === 1 ? 'grid-cols-1' : event.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
//               {event.images.map((img, idx) => (
//                 <div
//                   key={idx}
//                   className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
//                   onClick={() => onImageClick(idx)}
//                 >
//                   <img
//                     src={img}
//                     alt={`${event.title} ${idx + 1}`}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
//                 </div>
//               ))}
//             </div>

//             <span
//               className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
//                 event.status === "Past Event"
//                   ? "bg-slate-600 text-white"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {event.status}
//             </span>

//             <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
//               {event.title}
//             </h2>

//             <p className="text-slate-700 text-base leading-relaxed mb-6 whitespace-pre-line">
//               {event.fullDescription || event.description}
//             </p>

//             <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-lg">
//               {event.date && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <Calendar className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.date}</span>
//                 </div>
//               )}
//               {event.location && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <MapPin className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.location}</span>
//                 </div>
//               )}
//               {event.participants && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <Users className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.participants}</span>
//                 </div>
//               )}
//               {event.speaker && (
//                 <div className="flex items-start gap-3 text-sm text-slate-700">
//                   <Users className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
//                   <span>{event.speaker}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Admin Event Form Modal
// const AdminEventForm = ({ event, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     title: event?.title || '',
//     description: event?.description || '',
//     fullDescription: event?.fullDescription || '',
//     status: event?.status || 'Upcoming',
//     date: event?.date || '',
//     location: event?.location || '',
//     participants: event?.participants || '',
//     speaker: event?.speaker || '',
//     category: event?.category || 'workshop',
//   });
//   const [images, setImages] = useState([]);
//   const [existingImages, setExistingImages] = useState(event?.images || []);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const removeExistingImage = (index) => {
//     setExistingImages(existingImages.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = new FormData();
//     Object.keys(formData).forEach(key => {
//       data.append(key, formData[key]);
//     });

//     existingImages.forEach(img => {
//       data.append('existingImages', img);
//     });

//     images.forEach(img => {
//       data.append('images', img);
//     });

//     await onSave(data);
//     setLoading(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

//         <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
//             <h2 className="text-2xl font-bold text-slate-900">
//               {event ? 'Edit Event' : 'Create New Event'}
//             </h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="p-6 space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Event Title *
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Status *
//                 </label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="Upcoming">Upcoming</option>
//                   <option value="Past Event">Past Event</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Category *
//                 </label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="workshop">Workshop</option>
//                   <option value="competition">Competition</option>
//                   <option value="symposium">Symposium</option>
//                   <option value="seminar">Seminar</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Short Description *
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 rows="3"
//                 className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Full Description
//               </label>
//               <textarea
//                 name="fullDescription"
//                 value={formData.fullDescription}
//                 onChange={handleChange}
//                 rows="6"
//                 className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Date *
//                 </label>
//                 <input
//                   type="text"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   placeholder="e.g., November 15, 2025"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="e.g., Main Auditorium, IIT Indore"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Participants
//                 </label>
//                 <input
//                   type="text"
//                   name="participants"
//                   value={formData.participants}
//                   onChange={handleChange}
//                   placeholder="e.g., 150+ participants expected"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Speaker
//                 </label>
//                 <input
//                   type="text"
//                   name="speaker"
//                   value={formData.speaker}
//                   onChange={handleChange}
//                   placeholder="e.g., Dr. John Doe"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Event Images
//               </label>

//               {existingImages.length > 0 && (
//                 <div className="mb-4">
//                   <p className="text-sm text-slate-600 mb-2">Existing Images:</p>
//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//                     {existingImages.map((img, idx) => (
//                       <div key={idx} className="relative group">
//                         <img src={img} alt={`Event ${idx}`} className="w-full h-24 object-cover rounded" />
//                         <button
//                           type="button"
//                           onClick={() => removeExistingImage(idx)}
//                           className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
//                         >
//                           <X className="w-4 h-4" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
//                 <Upload className="w-10 h-10 mx-auto text-slate-400 mb-2" />
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="hidden"
//                   id="image-upload"
//                 />
//                 <label
//                   htmlFor="image-upload"
//                   className="cursor-pointer text-blue-600 hover:text-blue-700 font-semibold"
//                 >
//                   Click to upload images
//                 </label>
//                 <p className="text-xs text-slate-500 mt-1">
//                   {images.length > 0 ? `${images.length} new image(s) selected` : 'PNG, JPG, GIF up to 5MB (Max 5 images)'}
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4 pt-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
//               >
//                 <Save className="w-5 h-5" />
//                 {loading ? 'Saving...' : 'Save Event'}
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Event Card Component
// const EventCard = ({ event, onReadMore, onImageClick, isAdmin, onEdit, onDelete }) => {
//   const isPastEvent = event.status === "Past Event";
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNextImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
//   };

//   const handlePrevImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
//   };

//   return (
//     <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
//       <div className="relative overflow-hidden">
//         <div
//           className="h-48 sm:h-56 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
//           style={{ backgroundImage: `url("${event.images[currentImageIndex]}")` }}
//           onClick={() => onImageClick(event, currentImageIndex)}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//         <div className="absolute top-4 right-4">
//           <span
//             className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
//               isPastEvent
//                 ? "bg-slate-600 text-white"
//                 : "bg-green-500 text-white"
//             }`}
//           >
//             {event.status}
//           </span>
//         </div>

//         {event.images.length > 1 && (
//           <>
//             <button
//               onClick={handlePrevImage}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1.5 transition-all"
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </button>
//             <button
//               onClick={handleNextImage}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1.5 transition-all"
//             >
//               <ChevronRight className="w-4 h-4" />
//             </button>
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
//               {event.images.map((_, idx) => (
//                 <div
//                   key={idx}
//                   className={`w-1.5 h-1.5 rounded-full transition-all ${
//                     idx === currentImageIndex ? "bg-white w-4" : "bg-white bg-opacity-50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </>
//         )}

//         {isAdmin && (
//           <div className="absolute top-4 left-4 flex gap-2">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onEdit(event);
//               }}
//               className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors shadow-lg"
//             >
//               <Edit className="w-4 h-4" />
//             </button>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onDelete(event);
//               }}
//               className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors shadow-lg"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="p-5 sm:p-6 flex flex-col flex-grow">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight pr-2">
//             {event.title}
//           </h3>
//         </div>

//         <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
//           {event.description}
//         </p>

//         <div className="space-y-2 mb-4">
//           {event.date && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
//               <Calendar className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">{event.date}</span>
//             </div>
//           )}
//           {event.location && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
//               <MapPin className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">{event.location}</span>
//             </div>
//           )}
//           {event.participants && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
//               <Users className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">{event.participants}</span>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={() => onReadMore(event)}
//           className={`w-full flex items-center justify-center gap-2 rounded-lg h-11 px-4 text-sm font-semibold transition-all duration-300 ${
//             isPastEvent
//               ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
//               : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
//           }`}
//         >
//           <span>Read More</span>
//           <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const BiocatsEventsPage = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [galleryOpen, setGalleryOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showAdminPanel, setShowAdminPanel] = useState(false);
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [editingEvent, setEditingEvent] = useState(null);
//   const [adminPassword, setAdminPassword] = useState('');
//   const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

//   const categories = [
//     { id: "all", label: "All Categories" },
//     { id: "workshop", label: "Workshops" },
//     { id: "competition", label: "Competitions" },
//     { id: "symposium", label: "Symposiums" },
//     { id: "seminar", label: "Seminars" },
//   ];

//   // Fetch events from API
//   useEffect(() => {
//     fetchEvents();
//     checkAdminStatus();
//   }, []);

//   const checkAdminStatus = () => {
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('user');
//     if (token && user) {
//       const userData = JSON.parse(user);
//       setIsAdmin(userData.isAdmin);
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${API_URL}/events`);
//       const data = await response.json();
//       if (data.success) {
//         setEvents(data.events);
//       }
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdminLogin = () => {
//     if (adminPassword === 'biocrats2025') {
//       setIsAdmin(true);
//       setShowPasswordPrompt(false);
//       setShowAdminPanel(true);
//       localStorage.setItem('user', JSON.stringify({ isAdmin: true }));
//     } else {
//       alert('Incorrect password');
//     }
//   };

//   const handleCreateEvent = () => {
//     setEditingEvent(null);
//     setShowEventForm(true);
//   };

//   const handleEditEvent = (event) => {
//     setEditingEvent(event);
//     setShowEventForm(true);
//   };

//   const handleSaveEvent = async (formData) => {
//     try {
//       const token = localStorage.getItem('token');
//       const url = editingEvent
//         ? `${API_URL}/events/${editingEvent._id}`
//         : `${API_URL}/events`;

//       const method = editingEvent ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert(data.message);
//         setShowEventForm(false);
//         fetchEvents();
//       } else {
//         alert('Error: ' + data.message);
//       }
//     } catch (error) {
//       console.error('Error saving event:', error);
//       alert('Error saving event');
//     }
//   };

//   const handleDeleteEvent = async (event) => {
//     if (!window.confirm('Are you sure you want to delete this event?')) {
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`${API_URL}/events/${event._id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert(data.message);
//         fetchEvents();
//       } else {
//         alert('Error: ' + data.message);
//       }
//     } catch (error) {
//       console.error('Error deleting event:', error);
//       alert('Error deleting event');
//     }
//   };

//   const filteredEvents = events.filter((event) => {
//     const matchesStatus =
//       activeFilter === "all" ||
//       (activeFilter === "upcoming" && event.status === "Upcoming") ||
//       (activeFilter === "past" && event.status === "Past Event");

//     const matchesCategory =
//       selectedCategory === "all" || event.category === selectedCategory;

//     return matchesStatus && matchesCategory;
//   });

//   const upcomingCount = events.filter((e) => e.status === "Upcoming").length;
//   const pastCount = events.filter((e) => e.status === "Past Event").length;

//   const handleReadMore = (event) => {
//     setSelectedEvent(event);
//   };

//   const handleImageClick = (event, index = 0) => {
//     setSelectedEvent(event);
//     setCurrentImageIndex(index);
//     setGalleryOpen(true);
//   };

//   const handleGalleryNavigate = (direction) => {
//     if (!selectedEvent) return;
//     if (direction === 'next') {
//       setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
//     } else {
//       setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//       <div className="absolute inset-0 bg-grid-slate-100 opacity-50 -z-10"></div>

//       <main className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//               <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
//                 BC
//               </div>
//               <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 BioCrats Club
//               </h1>
//             </div>
//             <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
//               Discover and participate in groundbreaking events organized by the
//               Biocrats Club at IIT Indore. From cutting-edge workshops to
//               competitive challenges, we foster innovation in biosciences.
//             </p>

//             {!isAdmin && (
//               <button
//                 onClick={() => setShowPasswordPrompt(true)}
//                 className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-semibold"
//               >
//                 <Lock className="w-4 h-4" />
//                 Admin Login
//               </button>
//             )}
//           </div>

//           {/* Admin Panel */}
//           {isAdmin && (
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <div className="text-white">
//                   <h3 className="text-xl font-bold mb-1">Admin Panel</h3>
//                   <p className="text-blue-100 text-sm">Manage your events</p>
//                 </div>
//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleCreateEvent}
//                     className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
//                   >
//                     <Plus className="w-5 h-5" />
//                     Create New Event
//                   </button>
//                   <button
//                     onClick={() => {
//                       setIsAdmin(false);
//                       localStorage.removeItem('user');
//                       localStorage.removeItem('token');
//                     }}
//                     className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8 sm:mb-10">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//               <div className="flex-1">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Filter className="w-5 h-5 text-blue-600" />
//                   <h3 className="text-base sm:text-lg font-bold text-slate-900">
//                     Filter Events
//                   </h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => setActiveFilter("all")}
//                     className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
//                       activeFilter === "all"
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//                     }`}
//                   >
//                     All Events ({events.length})
//                   </button>
//                   <button
//                     onClick={() => setActiveFilter("upcoming")}
//                     className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
//                       activeFilter === "upcoming"
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//                     }`}
//                   >
//                     Upcoming ({upcomingCount})
//                   </button>
//                   <button
//                     onClick={() => setActiveFilter("past")}
//                     className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
//                       activeFilter === "past"
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//                     }`}
//                   >
//                     Past Events ({pastCount})
//                   </button>
//                 </div>
//               </div>

//               <div className="lg:border-l lg:pl-6">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Clock className="w-5 h-5 text-blue-600" />
//                   <h3 className="text-base sm:text-lg font-bold text-slate-900">Category</h3>
//                 </div>
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="w-full lg:w-48 px-4 py-2 text-sm font-medium border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                 >
//                   {categories.map((cat) => (
//                     <option key={cat.id} value={cat.id}>
//                       {cat.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {loading ? (
//             <div className="text-center py-20">
//               <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//               <p className="mt-4 text-slate-600">Loading events...</p>
//             </div>
//           ) : filteredEvents.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//               {filteredEvents.map((event) => (
//                 <EventCard
//                   key={event._id || event.id}
//                   event={event}
//                   onReadMore={handleReadMore}
//                   onImageClick={handleImageClick}
//                   isAdmin={isAdmin}
//                   onEdit={handleEditEvent}
//                   onDelete={handleDeleteEvent}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16 sm:py-20">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
//                 <Calendar className="w-8 h-8 text-slate-400" />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
//                 No events found
//               </h3>
//               <p className="text-sm sm:text-base text-slate-500">
//                 Try adjusting your filters to see more events.
//               </p>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Password Prompt Modal */}
//       {showPasswordPrompt && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h3 className="text-xl font-bold mb-4">Admin Login</h3>
//             <input
//               type="password"
//               value={adminPassword}
//               onChange={(e) => setAdminPassword(e.target.value)}
//               placeholder="Enter admin password"
//               className="w-full px-4 py-2 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
//             />
//             <div className="flex gap-3">
//               <button
//                 onClick={handleAdminLogin}
//                 className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => {
//                   setShowPasswordPrompt(false);
//                   setAdminPassword('');
//                 }}
//                 className="px-6 py-2 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Event Form Modal */}
//       {showEventForm && (
//         <AdminEventForm
//           event={editingEvent}
//           onClose={() => {
//             setShowEventForm(false);
//             setEditingEvent(null);
//           }}
//           onSave={handleSaveEvent}
//         />
//       )}

//       {/* Event Details Modal */}
//       {selectedEvent && !galleryOpen && (
//         <EventDetailsModal
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//           onImageClick={(idx) => {
//             setCurrentImageIndex(idx);
//             setGalleryOpen(true);
//           }}
//         />
//       )}

//       {/* Image Gallery Modal */}
//       {selectedEvent && galleryOpen && (
//         <ImageGalleryModal
//           images={selectedEvent.images}
//           currentIndex={currentImageIndex}
//           onClose={() => setGalleryOpen(false)}
//           onNavigate={handleGalleryNavigate}
//         />
//       )}
//     </div>
//   );
// };

// export default BiocatsEventsPage;