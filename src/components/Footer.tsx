import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <img 
              src="/lovable-uploads/83df7d2c-ba56-4275-a107-de35853019ad.png" 
              alt="ASH Streetwear Bag" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-8">
            <img 
              src="/lovable-uploads/8550cf2b-42f4-4a18-90d8-2ac7c17b55eb.png" 
              alt="ASH Box" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-serif">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-light">
              <p className="text-xl font-medium">
                <span className="text-2xl font-bold">A</span>uthentic – Represents genuine quality and originality in your designs.
              </p>
              <p className="text-xl font-medium">
                <span className="text-2xl font-bold">S</span>tylish – Embodies modern, trendy, and fashionable clothing.
              </p>
              <p className="text-xl font-medium">
                <span className="text-2xl font-bold">H</span>igh-Quality – Highlights the superior craftsmanship and materials used.
              </p>
              <p className="text-gray-300 italic">
                "We believe in creating more than just clothing – we're crafting experiences, 
                stories, and confidence through every stitch and design. Our commitment to 
                excellence is reflected in every piece we create."
              </p>
              <p className="text-gray-300 italic">
                "Each garment is a testament to our dedication to quality, 
                innovation, and the perfect blend of comfort and style."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://www.instagram.com/retarded_ashi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full bg-black animate-pulse blur-md group-hover:blur-lg transition-all duration-300"></div>
              <Instagram size={32} className="relative z-10 hover:scale-110 transition-transform duration-300" />
            </a>
            
            <button 
              onClick={() => navigate("/coming-soon")}
              className="glowing-button"
            >
              <span className="glowing-button-inner"></span>
              <span className="glowing-button-content">
                Coming Soon
              </span>
            </button>
            
            <p className="text-sm text-gray-400 font-light tracking-wide">Made by Vicky Shetty</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;