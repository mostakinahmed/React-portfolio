import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Video from "./components/Video";
import ScrollToTop from "./components/ScrollToTop";
import Media from "./components/Media";

function App() {
  
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/social-work-video" element={<Video />} />
          <Route path="/media" element={<Media />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
