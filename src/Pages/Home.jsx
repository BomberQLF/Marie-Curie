import Navbar from "../Components/HomeComponents/Navbar";
import Header from "../Components/HomeComponents/Header";
import ArrowComp from "../Components/HomeComponents/Arrow";

const Home = () => {
  return (
    <div>
      <div className="relative header h-[100vh]">
        <Navbar />
        <Header />
        <ArrowComp />
      </div>
    </div>
  );
};

export default Home;
