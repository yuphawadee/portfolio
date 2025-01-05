'use client'
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { Bars, BarLoader } from "react-spinners";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="rounded-full overflow-hidden">
          <BarLoader color={'#4f46e5'} width={150} loading={loading}  />
        </div>
        
      </div>
    );
  }

  return (
    <div className="" >
      <Navbar />
      <div className="max-w-[1300px] m-auto p-5">
      <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Project />
        </section>
      </div>
      <Footer />
    </div>
  );
}
