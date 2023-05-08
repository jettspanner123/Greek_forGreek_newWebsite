import type { NextPage } from "next";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {

  
  return (
    <div>
      <Loader />
      <Navbar />
    </div>
  );
};

export default Home;
