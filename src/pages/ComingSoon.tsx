import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 blur-md opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/17159c76-dadf-477c-bb40-32f1f8d64264.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold animate-pulse bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;