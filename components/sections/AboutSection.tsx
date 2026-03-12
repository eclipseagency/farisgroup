"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-24-at-11.20.13.jpeg"
                alt="Faris Group Sports Solutions"
                className="w-full h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,22,40,0.4))" }}
              />
            </div>

            {/* 20+ badge */}
            <div
              className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-xl text-white hidden md:block"
              style={{ backgroundColor: "#c9a227" }}
            >
              <div className="text-4xl font-black font-heading">20+</div>
              <div className="text-sm font-medium opacity-90">Years of Excellence</div>
            </div>

            {/* Second Image */}
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-lg overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/06/Private-Villa-Padel-Court-Riyadh-4-1024x768-1-1.jpeg"
                alt="Padel Court"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="section-subtitle block">About FARIS GROUP</span>
            <h2 className="section-title">
              FARIS GROUP{" "}
              <span style={{ color: "#c9a227" }}>TOTAL SPORTS SOLUTIONS.</span>
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed">
              With over 20 years of experience, Faris Group is an established name in the Sports
              and Leisure industry. Recognized as the leading supplier of superior quality sports
              and entertainment equipment in the Middle East, Faris Group is an official
              distributor of top international brands.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Whether you require a private cinema or an Olympic sized football field, Faris Group
              is there from start to finish. Delivering turn-key projects such as bowling centers,
              shooting ranges, climbing walls, recreation centers, fitness clubs, playground parks,
              squash courts and running tracks to name a few.
            </p>

            <div className="mt-10">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#1a3a6b" }}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
