"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const projects = [
  { title: "Sportplex Squash Courts", category: "Squash & Padel", image: "https://farisgroup.net/wp-content/uploads/2025/12/41ee54a4-f914-4478-896e-de5e93f0b369-960x720.webp" },
  { title: "Sportplex Basketball Court", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-01-at-12.08.37_f975baea-1-960x720.webp" },
  { title: "Huawei Basketball & Badminton Court (Dubai)", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2025/11/4-960x720.webp" },
  { title: "KAUST Pickleball Court", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2024/09/KAUST-Pickleball-Court-4-960x720.jpeg" },
  { title: "Arabian Homes", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2024/08/Arabian-Homes-Jeddah-1-960x720.jpeg" },
  { title: "KAUST Padel Courts", category: "Padel Court", image: "https://farisgroup.net/wp-content/uploads/2024/02/KAUST-Padel-Court-4-1024x768.jpeg" },
  { title: "2 Lanes Bowling – IRISH VICKERS Abu Dhabi UAE", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2024/02/DSC_8410-960x720.jpg" },
  { title: "2 Lanes Bowling – MOTN Abu Dhabi UAE", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2024/02/2-Lanes-OWl-Bowling-MOTN-Abu-Dhabi-22-960x720.jpeg" },
  { title: "3D Wall Climbing", category: "Climbing Wall", image: "https://farisgroup.net/wp-content/uploads/2023/12/wall-climbing-abu-dhabi-al-nahyan-prince-sea-palace-11-960x720.jpeg" },
  { title: "2 Lanes Bowling Private Villa Riyadh", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2023/11/19d98bf0-08fc-49db-a701-17bcda16f869-1024x768.jfif" },
  { title: "Al Midra Recreation Center Saudi Aramco", category: "Fitness & Gym", image: "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-5.jpeg" },
  { title: "Arabian Homes Tennis Court (Jeddah)", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2023/05/Arabian-Homes-Tennis-Courts-1.jpeg" },
  { title: "Miraclz Garden Kids Climbing Wall (Dubai)", category: "Climbing Wall", image: "https://farisgroup.net/wp-content/uploads/2023/05/LawnZ-Wall-Climbing_Danube-Properties-1-1024x768.jpeg" },
  { title: "University of Sharjah (Sharjah)", category: "Playground", image: "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-8.jpeg" },
  { title: "Rangers Range Indoor Shooting", category: "Shooting Range", image: "https://farisgroup.net/wp-content/uploads/2023/05/Rangers-Range-3-lanes-indoor-target-shooting-project-1-2.jpeg" },
  { title: "Thuwal School Project (Jeddah)", category: "Playground", image: "https://farisgroup.net/wp-content/uploads/2023/05/Thuwal-School-Project-June-0313_028.jpg" },
  { title: "Water Park, Anantara CMPD (Riyadh)", category: "Others", image: "https://farisgroup.net/wp-content/uploads/2023/05/WhatsApp-Image-2020-08-05-at-2.48.31-PM-960x622.jpeg" },
  { title: "Amir Sultan Park Playground (Jeddah)", category: "Playground", image: "https://farisgroup.net/wp-content/uploads/2023/05/Albilad-Tennis-Courts-11-scaled-1-1024x768.jpg" },
  { title: "Dubai School (Dubai)", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2023/05/Dubai-Municipality-Sport-Flooring-960x581.jpg" },
  { title: "Changing Rooms and Playgrounds", category: "Playground", image: "https://farisgroup.net/wp-content/uploads/2023/05/Photo0011-1.jpg" },
  { title: "Elham Project (Jeddah)", category: "Others", image: "https://farisgroup.net/wp-content/uploads/2023/05/9-2.jpg" },
  { title: "PVT Sheikh Villa (Abu Dhabi)", category: "Others", image: "https://farisgroup.net/wp-content/uploads/2023/05/photo8-960x502.jpg" },
  { title: "Al Forsan Club (Abu Dhabi)", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2023/05/Alforsan-Club-Acrylic-Sport-Flooring-960x720.jpg" },
  { title: "Shk Zayed Mosque (Abu Dhabi)", category: "Others", image: "https://farisgroup.net/wp-content/uploads/2023/05/Shk-Zayed-Mosque-Jogging-track-1-960x622.jpg" },
  { title: "King Abdulaziz University (Jeddah)", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2023/05/4-3-1.jpg" },
  { title: "American School Project (Jeddah)", category: "Sport Equipment", image: "https://farisgroup.net/wp-content/uploads/2023/05/16-1.jpg" },
  { title: "Private Villa Padel Court (Riyadh)", category: "Padel Court", image: "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-3-960x720.jpeg" },
  { title: "Sports Facilities Aramco Fitness Center (Dhahran)", category: "Fitness & Gym", image: "https://farisgroup.net/wp-content/uploads/2023/05/Sports-Facilities-Aramco-Fitness-Center-Dhahran-12-1024x768.jpeg" },
  { title: "AL BUSTAN PADEL COURT", category: "Padel Court", image: "https://farisgroup.net/wp-content/uploads/2023/05/Al-Bustan-Padel-Courts-8-1024x768.jpeg" },
  { title: "ENTER10", category: "Others", image: "https://farisgroup.net/wp-content/uploads/2023/05/DSC06032.jpg" },
  { title: "Obhur Palace Bowling (Jeddah)", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2023/05/2-Lanes-Obhur-scaled-1.jpg" },
  { title: "Al Makan Mall 10-Lane Bowling (Riyadh)", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2023/05/199382869_130827589121159_8630920268722858487_n.jpg" },
  { title: "Smaash Bowling", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2023/05/OWL-Bowling-SMAASH-Mall-3.jpeg" },
  { title: "Jumpowlane (Jeddah)", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2023/05/1-3.jpg" },
  { title: "Irish Vicker's WTC Mall (Abu Dhabi)", category: "Bowling", image: "https://farisgroup.net/wp-content/uploads/2023/05/Irish-Vickers-Bowling-3-scaled-2.jpg" },
];

const categories = ["All", "Bowling", "Climbing Wall", "Fitness & Gym", "Others", "Padel Court", "Playground", "Shooting Range", "Sport Equipment", "Squash & Padel"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg"
          alt="Our Projects Hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Projects
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">OUR PROJECTS</span>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-subtitle block">PROJECTS</span>
            <h2 className="section-title">OUR PROJECTS GALLERY</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              With 30 years of experience in the field, get acquainted with our most inspiring projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200"
                style={
                  active === cat
                    ? { backgroundColor: "#0a1628", color: "#fff" }
                    : { backgroundColor: "#f1f3f7", color: "#555" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-white border border-gray-100 border-t-0">
                  <p className="text-sm font-semibold text-center" style={{ color: "#0a1628" }}>
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Contact Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.7)" }} />
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "#0a1628" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9a227" }}>
                QUOTE
              </p>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                REQUEST A QUOTE
              </h2>
              <p className="text-white font-semibold text-base mb-1">Let&apos;s get in touch</p>
              <p className="text-white/60 text-sm mb-8">
                We&apos;re open for any suggestion or just to have a chat
              </p>
              <div className="space-y-3">
                {[
                  "+966 53 800 7018 (KSA)",
                  "+971 55 336 6241 (UAE)",
                  "+39 328 819 7804 (Italy)",
                ].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.split(" ")[0]}`}
                    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={14} style={{ color: "#c9a227" }} />
                    {phone}
                  </a>
                ))}
                {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    <Mail size={14} style={{ color: "#c9a227" }} />
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white p-10">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#0a1628" }}
                >
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
