import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solutions />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
