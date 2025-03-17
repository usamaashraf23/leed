import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import TrackSection from "./components/TrackSection";
import PremiumSection from "./components/PremiumSection";
import ReviewsSection from "./components/ReviewsSection";
import InstructorsSection from "./components/InstructorsSection";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <TrackSection />
      <PremiumSection />
      <ReviewsSection />
      <InstructorsSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
