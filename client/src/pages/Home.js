import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SignUpHero from "../components/SignUpHero";
import SellingHero from "../components/SellingHero";
import BuyingHero from "../components/BuyingHero";
import Footer from "../components/Footer";
import TopSellersHero from "../components/TopSellersHero";
import PropertySearchHero from "../components/PropertySearchHero";
import About from "../components/About";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <SignUpHero />
      <div className="over" style={{ overflow: "hidden" }}>
        <SellingHero />
        <TopSellersHero />
        <BuyingHero />
        <PropertySearchHero />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
