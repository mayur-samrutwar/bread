import React from 'react';
import Navbar from "./Navbar"
import Hero from "./Hero";
import Mac from "./Mac";
import Card from "./Card";
import Offering from "./Offering";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex relative flex-col items-center">
      <Navbar />
      <Hero />
      <Card />
      {/* <Mac /> */}
      <Offering />
      <Footer />
    </div>
  );
}

export default App;
