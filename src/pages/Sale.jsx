import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import FormCard from "../components/FormCard";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import image from "../images/Sale.jpg";
import image1 from "../images/SALE/1.jpg";
import image2 from "../images/SALE/2.jpg";
import image3 from "../images/SALE/3.jpg";

const sale = {
  text: "Properties for sale",
  desc: "Search flats and houses for sale in the UK.",
};

const data = [
  {
    img: image1,
    header: `Stamp duty calculator`,
    date: "05 may 2023",
    description: `What is stamp duty, how much is it in the UK and when do you have to pay it? Get the lowdown and use our stamp duty calculator to work out how much you'll pay. `,
  },
  {
    img: image2,
    header: `Help to Buy: everything you need to know`,
    date: "03 may 2023",
    description: `Help to Buy has closed to new applicants in most of the UK, but you can still apply in Wales. Here's what it is, how it works and the types of homes you could buy through the scheme.`,
  },
  {
    img: image3,
    header: `How does a solicitor help you to buy a house?`,
    date: "03 may 2023",
    description: `You've found your perfect home and it’s time to appoint a solicitor or conveyancer to help you buy it. Here’s what they'll do to make that home yours.  `,
  },
];

const Sale = () => {
  return (
    <div className="font-lora">
      <NavBar />
      <div className="max-w-7xl mx-auto my-3">
        <p className="">
          <Links value="Zoopla" solid={false} location="/" />{" "}
          <i className="fa-light fa-greater-than"></i>
          <Links value="For sale" solid={true} location="/for-sale" />
        </p>
      </div>
      <FormCard
        text={sale.text}
        desc={sale.desc}
        image={image}
        value="sale"
        select={true}
      />
      <HomeSlider data={data} />
      <Footer />
    </div>
  );
};

export default Sale;
