import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "MERN - OSTAD",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Mostakin%20Ahmed-mernstack%2011-C39618_page-0001%20%281%29%20%281%29.jpg",
  },
  {
    id: 2,
    title: "OOP in JAVA - SimpliLearn SkillUp",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/10039201_10332659_1775040100874_page-0001.jpg",
  },
  {
    id: 3,
    title: "Robotics & Automation - Coursera",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Certificate%20Robotics_page-0001%20%281%29.jpg",
  },

  {
    id: 4,
    title: "Responsive Web Design - eLearnBD",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Responsive%20web%20design.jpg",
  },
  {
    id: 5,
    title: "Github - Microsoft",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Screenshot%20from%202026-04-14%2009-10-06.png",
  },
];

const CertificateSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  };

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my achievements and certifications.
        </p>

        {/* Preview Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.slice(0, 6).map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
              className="group cursor-pointer bg-card rounded overflow-hidden shadow card-hover"
            >
              <div className="relative min-h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full p-1 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm font-medium">
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="p-4 text-center font-medium">{cert.title}</div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setIsOpen(true);
            }}
            className="px-6 py-2 rounded-md bg-primary text-white hover:opacity-90 transition"
          >
            View All
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl px-4">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 bg-slate-600 p-1 cursor-pointer right-4 text-white z-10"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <img
              src={certificates[currentIndex].image}
              alt="certificate"
              className="w-full rounded shadow-lg"
            />

            {/* Left */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
            >
              <ChevronRight size={28} />
            </button>

            {/* Title */}
            <p className="text-center text-white mt-4">
              {certificates[currentIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateSection;
