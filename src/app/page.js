import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductHighlights />
    </div>
  );
}