import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import CardsHome from "../components/CardsHome";
import HomeSlider from "../components/HomeSlider";
import Footer from "../components/Footer";
import image1 from "../images/Home Slider/wales-land-transaction-tax.jpg";
import image2 from "../images/Home Slider/house-price-index-april-2022.jpg";
import image3 from "../images/Home Slider/GettyImages-1190810297_-_2.jpg";
const data = [
  {
    img: image1,
    header: `Renters' Reform Bill comes to Parliament next week`,
    date: "05 may 2023",
    description: `Notice periods for rent increases to be doubled, no-fault evictions banned and minimum housing standards established. What's in the Renters' Reform Bill? `,
  },
  {
    img: image2,
    header: `Zoopla House Price Index - May 2023`,
    date: "03 may 2023",
    description: `Our House Price Index for May 2023 shows that the UK housing market is more balanced than it has been for years, with buyer demand and sale numbers recovering while house price growth slows. `,
  },
  {
    img: image3,
    header: `Are UK house prices falling in May 2023?`,
    date: "03 may 2023",
    description: `Our House Price Index has recorded more local house price falls this month, while UK-wide price growth drops to 3%. Here’s what’s happening with house prices in May 2023.  `,
  },
];

const Home = () => {
  return (
    <div className="font-lora">
      <NavBar />
      <Container />
      <CardsHome />
      <HomeSlider data={data} />
      <Footer />
    </div>
  );
};

export default Home;
