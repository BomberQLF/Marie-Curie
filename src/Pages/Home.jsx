import Navbar from "../Components/HomeComponents/Navbar";
import Header from "../Components/HomeComponents/Header";
import ArrowComp from "../Components/HomeComponents/Arrow";
import SectionHistoire from "../Components/HomeComponents/SectionHistoire";
import Informations from "../Components/HomeComponents/Informations";

const Home = () => {
  return (
    <div>
      <div className="relative header h-[100vh]">
        <Navbar />
        <Header />
        <ArrowComp />
      </div>
      <div className="relative h-[100vh] histoire">
        <SectionHistoire />
      </div>
      <div className="relative h-[100vh] apropos">
        <Informations />
      </div>
    </div>
  );
};

export default Home;
