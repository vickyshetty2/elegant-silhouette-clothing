import { useNavigate } from "react-router-dom";

const VideoSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="aspect-w-16 aspect-h-9 relative">
        <iframe
          src="https://www.youtube.com/embed/NmdEsHzO-5M"
          title="Product Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[500px] rounded-2xl"
        ></iframe>
        <button
          onClick={() => navigate("/coming-soon")}
          className="absolute -right-4 top-4 w-4 h-4 rounded-full bg-pink-500 animate-pulse shadow-lg shadow-pink-500/50 hover:scale-110 transition-transform duration-300"
          aria-label="Coming Soon"
        />
      </div>
    </section>
  );
};

export default VideoSection;