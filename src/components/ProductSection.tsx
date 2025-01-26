import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="relative product-shadow rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/lovable-uploads/ec29e9d6-1eff-4e09-ba27-5042501897f4.png"
            alt="Lunch Break T-shirt"
            className={`w-full h-auto product-image ${
              isHovered ? "scale-105" : ""
            } transition-transform duration-500`}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Lunch Break T-shirt
          </h1>
          <p className="text-lg text-gray-500">250 GSM</p>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">₹799</span>
          </div>
          <button
            onClick={() => navigate("/shipping")}
            className="apple-button w-full sm:w-auto"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;