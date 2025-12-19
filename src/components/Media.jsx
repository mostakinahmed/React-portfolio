import { motion } from "framer-motion";
import {Navbar} from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";

const mediaGallery = [

  {
    type: "video",
    title: "Social Work Documentary",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    type: "photo",
    title: "Relief Work",
    src: "https://via.placeholder.com/400x250",
  },
  {
    type: "document",
    title: "Project Report 2025",
    src: "#",
  },
  {
    type: "video",
    title: "Community Support Program",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    type: "photo",
    title: "Volunteers in Action",
    src: "https://via.placeholder.com/400x250",
  },
  {
    type: "document",
    title: "Volunteer Guidelines",
    src: "#",
  },
];

export default function MediaGallery() {
  return (
    <>
    <ThemeToggle />
      <Navbar />

      <div className="md:pt-24 pt-18 px-4 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:text-4xl text-2xl font-bold md:mb-10 mb-3"
        >
          Media Gallery
        </motion.h1>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mediaGallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border shadow-sm overflow-hidden bg-white"
            >
              {/* Video */}
              {item.type === "video" && (
                <iframe
                  className="w-full h-56"
                  src={item.src}
                  title={item.title}
                  allowFullScreen
                />
              )}

              {/* Photo */}
              {item.type === "photo" && (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Document */}
              {item.type === "document" && (
                <a
                  href={item.src}
                  target="_blank"
                  className="h-56 flex items-center justify-center text-center text-lg font-semibold underline"
                >
                  View Document
                </a>
              )}

              {/* Title */}
              <div className="p-4 font-medium text-center">{item.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
