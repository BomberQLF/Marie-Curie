import Navbar from "../Components/HomeComponents/Navbar";
import Header from "../Components/HomeComponents/Header";
import ArrowComp from "../Components/HomeComponents/Arrow";
import SectionHistoire from "../Components/HomeComponents/SectionHistoire";
import Informations from "../Components/HomeComponents/Informations";
import Footer from "../Components/HomeComponents/Footer";

const Home = () => {
  return (
    <div>
      <div className="relative header h-[100vh]">
        <Navbar />
        <Header />
        <ArrowComp />
      </div>
      <div className="relative h-[100vh] overflow-hidden histoire">
        <SectionHistoire />
      </div>
      <div className="relative h-[100vh] apropos">
        <Informations />
      </div>
      <div className="h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
