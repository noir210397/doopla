import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import FormCard from "../components/FormCard";
import HomeSlider from "../components/HomeSlider";
import Footer from "../components/Footer";
import image from "../images/rent.jpg";
import image1 from "../images/Home Slider/wales-land-transaction-tax.jpg";
import image2 from "../images/RENT/2.jpg";

const rent = {
  text: "Properties for rent",
  desc: "Search flats and houses to rent in the UK.",
};
const data = [
  {
    img: image1,
    header: `Renters' Reform Bill comes to Parliament next week`,
    date: "05 may 2023",
    description: `Notice periods for rent increases to be doubled, no-fault evictions banned and minimum housing standards established. What's in the Renters' Reform Bill? `,
  },
  {
    img: image2,
    header: `Has the cost of renting peaked?`,
    date: "03 may 2023",
    description: `As rents hit 10-year highs, our data suggests the cost of renting has now peaked and rental inflation for new lets is set to slow to 4-5% later this year. `,
  },
  {
    img: image2,
    header: `Landlords support new standards for rented homes`,
    date: "03 may 2023",
    description: `Six out of 10 landlords are in favour of the introduction of the Decent Homes Standard, the biggest shake up in the private rented sector for 30 years.  `,
  },
];

const Rent = () => {
  return (
    <div className="font-lora">
      <NavBar />
      <div className="max-w-7xl mx-auto my-3">
        <p className="">
          <Links value="Zoopla" solid={false} location="/" />{" "}
          <i className="fa-light fa-greater-than"></i>
          <Links value="For rent" solid={true} location="/for-rent" />
        </p>
      </div>
      <FormCard
        text={rent.text}
        desc={rent.desc}
        image={image}
        value="rent"
        select={true}
      />
      <HomeSlider data={data} />
      <Footer />
    </div>
  );
};

export default Rent;
