import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
 {
    id: 4,
    title: "Tech Landing Page",
    description: "Modern API platform built with React and Tailwind.",
    image: "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Screenshot%20from%202026-05-28%2000-20-07.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://tech.mostakinahmed.com/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Victus Byte",
    description: "Modern e-commerce platform with dashboard system.",
    image: "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Screenshot%20from%202026-05-28%2000-22-31.png",
    tags: ["React", "NodeJs", "MongoDB"],
    demoUrl: "https://victusbyte.com",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Bhumi Api",
    description: "Modern API platform built with React and Tailwind.",
    image: "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Screenshot%20from%202026-08-12%2021-57-35.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://ba.mostakinahmed.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Agro Renewable",
    description: "IoT smart agriculture monitoring platform.",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Screenshot%20from%202026-02-11%2021-20-32.png",
    tags: ["React", "Tailwind", "IoT"],
    demoUrl: "https://smartfarm.mostakinahmed.com/",
    githubUrl: "#",
  },
   {
    id: 3,
    title: "Puthi Kunjo - OnGoing",
    description: "Modern API platform built with React and Tailwind.",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/Screenshot%20from%202026-05-28%2000-39-27.png",
    tags: ["React", "Tailwind", "IoT"],
    demoUrl: "https://puthikunjo.mostakinahmed.com/",
    githubUrl: "#",
  }
    
  
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected projects focused on clean UI, performance, and modern web experiences.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-62 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Top Buttons */}
                <div className="absolute top-3 right-3 flex gap-2">

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Button */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  View Project
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/mostakinahmed"
            className="inline-flex items-center gap-2 border border-border bg-card hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};