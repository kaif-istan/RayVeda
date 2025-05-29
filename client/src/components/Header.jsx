// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = React.useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

//   const handleDropdown = (dropdown) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setOpenDropdown(null);
//   };

//   return (
//     <>
//       <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo Section */}
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <img
//                   src="https://res.cloudinary.com/dufvitqpb/image/upload/v1748500107/WhatsApp_Image_2025-05-29_at_11.57.15_AM_lbl7q7.jpg"
//                   className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-200 transition-transform hover:scale-105"
//                   alt="RaysVeda Logo"
//                 />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
//                   RaysVeda
//                 </span>
//                 <span className="text-xs text-gray-500 -mt-1">
//                   ॐ Spiritual Guidance
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-1">
//               <NavLink
//                 to="/"
//                 end
//                 className={({ isActive }) =>
//                   `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Home
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//               </NavLink>

//               <NavLink
//                 to="/pooja"
//                 className={({ isActive }) =>
//                   `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Pooja
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//               </NavLink>

//               {/* Our Story Dropdown */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => handleDropdown("ourStory")}
//                   className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 group"
//                 >
//                   Our Story
//                   <svg
//                     className={`w-4 h-4 ml-1 transition-transform duration-200 ${
//                       openDropdown === "ourStory" ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </button>
//                 <div
//                   className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-200 ${
//                     openDropdown === "ourStory"
//                       ? "opacity-100 visible translate-y-0"
//                       : "opacity-0 invisible -translate-y-2"
//                   }`}
//                 >
//                   <div className="py-2">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🏛️</span>
//                       About RaysVeda
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🎯</span>
//                       Mission/Vision
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🕉️</span>
//                       Our Culture & Values
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🤝</span>
//                       CSR
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Services Dropdown */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => handleDropdown("services")}
//                   className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 group"
//                 >
//                   Services
//                   <svg
//                     className={`w-4 h-4 ml-1 transition-transform duration-200 ${
//                       openDropdown === "services" ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </button>
//                 <div
//                   className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-200 ${
//                     openDropdown === "services"
//                       ? "opacity-100 visible translate-y-0"
//                       : "opacity-0 invisible -translate-y-2"
//                   }`}
//                 >
//                   <div className="py-2">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">📜</span>
//                       Kundlia
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">⭐</span>
//                       Astrology
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🔢</span>
//                       Numerology
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🏠</span>
//                       Vastu
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🧘</span>
//                       Yoga & Meditation
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Vidya Zone Dropdown */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => handleDropdown("vidyaZone")}
//                   className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 group"
//                 >
//                   Vidya Zone
//                   <svg
//                     className={`w-4 h-4 ml-1 transition-transform duration-200 ${
//                       openDropdown === "vidyaZone" ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </button>
//                 <div
//                   className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-200 ${
//                     openDropdown === "vidyaZone"
//                       ? "opacity-100 visible translate-y-0"
//                       : "opacity-0 invisible -translate-y-2"
//                   }`}
//                 >
//                   <div className="py-2">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">📚</span>
//                       Veda's
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">📖</span>
//                       Bhagwat Gita
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Seva Bhav Dropdown */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => handleDropdown("sevaBhav")}
//                   className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 group"
//                 >
//                   Seva Bhav
//                   <svg
//                     className={`w-4 h-4 ml-1 transition-transform duration-200 ${
//                       openDropdown === "sevaBhav" ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </button>
//                 <div
//                   className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-200 ${
//                     openDropdown === "sevaBhav"
//                       ? "opacity-100 visible translate-y-0"
//                       : "opacity-0 invisible -translate-y-2"
//                   }`}
//                 >
//                   <div className="py-2">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🐄</span>
//                       Gau Seva
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🙏</span>
//                       Brahaman Dakshina
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🪔</span>
//                       Deep Daan
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🍽️</span>
//                       Aahar Daan
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">💊</span>
//                       Aushadhi Daan
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
//                     >
//                       <span className="mr-3 text-gray-500">🍪</span>
//                       Prasad Vitran
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) =>
//                   `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Blog
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//               </NavLink>

//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Contact
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//               </NavLink>
//             </div>

//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                   className={`w-6 h-6 transition-transform duration-200 ${
//                     mobileMenuOpen ? "rotate-90" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   {mobileMenuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <div
//             className={`lg:hidden transition-all duration-300 ease-in-out ${
//               mobileMenuOpen
//                 ? "max-h-screen opacity-100 pb-4"
//                 : "max-h-0 opacity-0 overflow-hidden"
//             }`}
//           >
//             <div className="pt-4 space-y-1">
//               <NavLink
//                 to="/"
//                 end
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Home
//               </NavLink>

//               <NavLink
//                 to="/pooja"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Pooja
//               </NavLink>

//               {/* Mobile dropdowns would be implemented as expandable sections */}
//               <div className="space-y-1">
//                 <button
//                   type="button"
//                   onClick={() => handleDropdown("ourStory")}
//                   className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   Our Story
//                   <svg
//                     className={`w-5 h-5 transition-transform duration-200 ${
//                       openDropdown === "ourStory" ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {openDropdown === "ourStory" && (
//                   <div className="pl-4 space-y-1">
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
//                     >
//                       About RaysVeda
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
//                     >
//                       Mission/Vision
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
//                     >
//                       Our Culture & Values
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
//                     >
//                       CSR
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <NavLink
//                 to="/blog"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Blog
//               </NavLink>

//               <NavLink
//                 to="/contact"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
//                     isActive
//                       ? "text-gray-900 bg-gray-100"
//                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 Contact
//               </NavLink>

//             </div>
//           </div>
//         </div>

//         {/* Click outside to close dropdowns */}
//         {openDropdown && (
//           <div
//             className="fixed inset-0 z-40"
//             onClick={() => setOpenDropdown(null)}
//           ></div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Header;


import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
    const [openDropdown, setOpenDropdown] = React.useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
            <nav className="relative bg-gradient-to-r from-orange-50 via-amber-50 to-red-50 border-b-2 border-gradient-to-r from-orange-200 to-red-200 shadow-lg backdrop-blur-sm">
                {/* Subtle background pattern overlay */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-orange-400 to-red-400"></div>
                
                <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo Section */}
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
                        <div className="relative">
                            <img 
                                src="https://res.cloudinary.com/dufvitqpb/image/upload/v1748500107/WhatsApp_Image_2025-05-29_at_11.57.15_AM_lbl7q7.jpg" 
                                className="h-10 w-10 rounded-full border-2 border-orange-300 shadow-md group-hover:scale-110 transition-transform duration-300" 
                                alt="RaysVeda Logo" 
                            />
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>
                        <span className="self-center text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                            🕉 RaysVeda
                        </span>
                    </a>

                    {/* Mobile menu button */}
                    <button 
                        type="button" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-orange-600 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-colors duration-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className={`${mobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-orange-200 rounded-lg bg-gradient-to-b from-orange-50 to-amber-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent shadow-lg md:shadow-none">
                            
                            {/* Home */}
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        "block py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 " +
                                        (isActive
                                            ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                                            : "text-orange-700 hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800")
                                    }
                                    aria-current="page"
                                >
                                    🏠 Home
                                </NavLink>
                            </li>

                            {/* Pooja */}
                            <li>
                                <NavLink
                                    to="/pooja"
                                    className={({ isActive }) =>
                                        "block py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 " +
                                        (isActive
                                            ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                                            : "text-orange-700 hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800")
                                    }
                                >
                                    🪔 Pooja
                                </NavLink>
                            </li>

                            {/* Our Story Dropdown */}
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={() => handleDropdown('ourStory')}
                                    className="flex items-center justify-between w-full py-2 px-4 text-orange-700 rounded-full hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800 transition-all duration-300 hover:scale-105"
                                >
                                    📖 Our Story
                                    <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${openDropdown === 'ourStory' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <div className={`z-20 ${openDropdown === 'ourStory' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} absolute top-full left-0 mt-2 font-normal bg-white border-2 border-orange-200 rounded-xl shadow-xl w-48 transition-all duration-300 backdrop-blur-sm`}>
                                    <ul className="py-3 text-sm text-orange-700">
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🌟</span> About RaysVeda
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🎯</span> Mission/Vision
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🏛️</span> Our Culture & Values
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🤝</span> CSR
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Services Dropdown */}
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={() => handleDropdown('services')}
                                    className="flex items-center justify-between w-full py-2 px-4 text-orange-700 rounded-full hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800 transition-all duration-300 hover:scale-105"
                                >
                                    ⚡ Services
                                    <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <div className={`z-20 ${openDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} absolute top-full left-0 mt-2 font-normal bg-white border-2 border-orange-200 rounded-xl shadow-xl w-48 transition-all duration-300`}>
                                    <ul className="py-3 text-sm text-orange-700">
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">📜</span> Kundlia
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">⭐</span> Astrology
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🔢</span> Numerology
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🏠</span> Vastu
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🧘</span> Yoga & Meditation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Vidya Zone Dropdown */}
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={() => handleDropdown('vidyaZone')}
                                    className="flex items-center justify-between w-full py-2 px-4 text-orange-700 rounded-full hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800 transition-all duration-300 hover:scale-105"
                                >
                                    📚 Vidya Zone
                                    <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${openDropdown === 'vidyaZone' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <div className={`z-20 ${openDropdown === 'vidyaZone' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} absolute top-full left-0 mt-2 font-normal bg-white border-2 border-orange-200 rounded-xl shadow-xl w-48 transition-all duration-300`}>
                                    <ul className="py-3 text-sm text-orange-700">
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">📿</span> Veda's
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🕉️</span> Bhagwat Gita
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Seva Bhav Dropdown */}
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={() => handleDropdown('sevaBhav')}
                                    className="flex items-center justify-between w-full py-2 px-4 text-orange-700 rounded-full hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800 transition-all duration-300 hover:scale-105"
                                >
                                    🙏 Seva Bhav
                                    <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${openDropdown === 'sevaBhav' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <div className={`z-20 ${openDropdown === 'sevaBhav' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} absolute top-full left-0 mt-2 font-normal bg-white border-2 border-orange-200 rounded-xl shadow-xl w-48 transition-all duration-300`}>
                                    <ul className="py-3 text-sm text-orange-700">
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🐄</span> Gau Seva
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🙏</span> Brahaman Dakshina
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🪔</span> Deep Daan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🍽️</span> Aahar Daan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">💊</span> Aushadhi Daan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-800 transition-all duration-200">
                                                <span className="mr-2">🎁</span> Prasad Vitran
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Blog */}
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        "block py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 " +
                                        (isActive
                                            ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                                            : "text-orange-700 hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800")
                                    }
                                >
                                    ✍️ Blog
                                </NavLink>
                            </li>

                            {/* Contact */}
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        "block py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 " +
                                        (isActive
                                            ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                                            : "text-orange-700 hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-200 hover:text-orange-800")
                                    }
                                >
                                    📞 Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header