import React, { useState } from 'react';
import Navbar from "../Components/HomeComponents/Navbar";
import Header from "../Components/HomeComponents/Header";
import ArrowComp from "../Components/HomeComponents/Arrow";
import SectionHistoire from "../Components/HomeComponents/SectionHistoire";
import Informations from "../Components/HomeComponents/Informations";
import Footer from "../Components/HomeComponents/Footer";
import Statue from "../Components/Statue/Statue";
import Popup from "../Components/HomeComponents/Popup";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="absolute h-[100vh] w-[100vw] overflow-x-hidden">
        <Statue />
      </div>
      <div className="relative header flex flex-col h-[100vh]">
        <Navbar />
        <Header onOpenPopup={handleOpenPopup} />
        <ArrowComp />
      </div>
      <div id="histoire" className="relative h-[100vh] overflow-hidden histoire">
        <SectionHistoire />
      </div>
      <div className="relative h-[100vh] apropos">
        <Informations />
      </div>
      <div className="h-[40vh]">
        <Footer />
      </div>
      {isPopupOpen && (
        <Popup
          videoUrl="https://www.youtube.com/embed/EbwaAL-aTsI"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Home;