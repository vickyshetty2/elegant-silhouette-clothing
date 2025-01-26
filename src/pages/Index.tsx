import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProductSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;