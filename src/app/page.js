import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
    </main>
  );
};

export default page;
