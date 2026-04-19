import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ResultsSection } from "@/components/results-section";
import { BooksSection } from "@/components/books-section";
import { ProductSection } from "@/components/product-section";
import { VideoSection } from "@/components/video-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { ConnectSection } from "@/components/connect-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ResultsSection />
        <BooksSection />
        <ProductSection />
        <VideoSection />
        <NewsletterSection />
        <ConnectSection />
      </main>
    </>
  );
}
