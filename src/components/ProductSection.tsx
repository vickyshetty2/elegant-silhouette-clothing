import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const productImages = [
    "/lovable-uploads/961bd214-ecd9-4912-8940-57b0f9a4c40e.png",
    "/lovable-uploads/f1f16030-f336-4e9e-be7f-02a9424470e4.png",
    "/lovable-uploads/ec29e9d6-1eff-4e09-ba27-5042501897f4.png"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="relative product-shadow rounded-2xl overflow-hidden">
            <img
              src={productImages[selectedImage]}
              alt="Lunch Break T-shirt"
              className="w-full h-auto product-image transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-black' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-auto aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Lunch Break T-shirt
          </h1>
          <p className="text-lg text-gray-500">250 GSM</p>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">₹799</span>
          </div>
          <div className="space-y-4">
            <div className="prose prose-sm">
              <ul className="list-disc pl-4 space-y-2">
                <li>100% Premium Cotton</li>
                <li>Heavyweight Jersey</li>
                <li>Relaxed Fit</li>
                <li>Made in India</li>
              </ul>
            </div>
            <button
              onClick={() => navigate("/shipping")}
              className="apple-button w-full sm:w-auto"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;