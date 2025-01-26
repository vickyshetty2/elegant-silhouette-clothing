import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.instagram.com/retarded_ashi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <p className="text-xs text-gray-400">Made by Vicky Shetty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;