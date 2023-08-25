import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import FormCard from "../components/FormCard";
import image from "../images/Home Slider/GettyImages-1190810297_-_2.jpg";
import Footer from "../components/Footer";
import image2 from "../images/House Prices/A013C019_220527_R2GW_01_00_24_08_Graded_1611951_cropped_1500__2_.png";
import image1 from "../images/House Prices/1.jpg";
import image3 from "../images/House Prices/3.jpg";
import HomeSlider from "../components/HomeSlider";

const prices = {
  text: "Research sold house prices",
  desc: "Enter a UK town or street name to get started.",
};

const data = [
  {
    img: image1,
    header: `When should I put my home on the market?`,
    date: "05 may 2023",
    description: `Ready to move on? Before you pop up the for sale sign, here’s how to get the timing just right to get the best price for your home.`,
  },
  {
    img: image2,
    header: `Are estate agent valuations free?`,
    date: "03 may 2023",
    description: `Thinking of selling your home? Start by getting a valuation from a few estate agents to find out what your home’s worth. Here’s everything you need to know about estate agent valuations.`,
  },
  {
    img: image3,
    header: `How much should I sell my house for?`,
    date: "03 may 2023",
    description: `What's the best asking price to put on your home? Too high and you could be left waiting, too low and you may later regret it. Here's how to get it right.`,
  },
];

const HousePrices = () => {
  return (
    <div className="font-lora">
      <NavBar />
      <div className="max-w-7xl mx-auto my-3">
        <p className="">
          <Links value="Zoopla" solid={false} location="/" />{" "}
          <i className="fa-light fa-greater-than"></i>
          <Links value="House Prices" solid={true} location="/house-prices" />
        </p>
      </div>
      <FormCard
        select={false}
        text={prices.text}
        desc={prices.desc}
        image={image}
        value="house"
      />
      <HomeSlider data={data} />
      <Footer />
    </div>
  );
};

export default HousePrices;
