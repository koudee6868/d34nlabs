import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { CTASection } from "@/components/sections/CTASection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <CategoriesSection />
      <ReviewSection />
      <CTASection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
