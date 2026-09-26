import Navbar from "../components/navigation/Navbar";
import Hero from "../sections/home/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Home;