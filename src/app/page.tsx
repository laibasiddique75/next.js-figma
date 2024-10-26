import Image from "next/image";


import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Banners from "./Components/Banners";
import Cards from "./Components/Cards";
import Banner1 from "./Components/Banner1";

export default function Home() {
  return (
    <div className="bg-[#222222] h-[600px] ">                                             

      <Header/>;
      <Banner/>;
      <Card/>;
    <Banners/>;
    <Cards/>;
    <Banner1/>;
      <Footer/>;
      

    </div>
  );
}
