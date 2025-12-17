import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

const Video = () => {
  const fileId = "1WzLiFxCtnplFRLVTYg-jPGa0K7RlvmZb";

  return (
    <>
      {/* Background Effects */}
      <StarBackground />

      {/* UI Controls */}
      <ThemeToggle />
      <Navbar />

      {/* Main Content (Clean Background) */}
      <div className="relative z-10 min-h-screen w-full bg-white dark:bg-background flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Our Social Work Video
        </h1>

        {/* Video Card */}
        <div className="bg-white dark:bg-background p-6 rounded-2xl shadow-xl border max-w-4xl w-full">
          {/* Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://drive.google.com/file/d/${fileId}/preview`}
              title="Social Work Video"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a
              href={`https://drive.google.com/uc?export=download&id=${fileId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium shadow hover:opacity-90 transition"
            >
              Download Video
            </a>

            <a
              href={`https://drive.google.com/file/d/${fileId}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium shadow hover:opacity-90 transition"
            >
              Open in Google Drive
            </a>
          </div>

          {/* Description */}
          <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
            This video highlights our efforts to support Korail slum fire victims
            in 2025. Together, we stand for humanity, care, and social
            responsibility.
          </p>
        </div>
      </div>
    </>
  );
};

export default Video;
