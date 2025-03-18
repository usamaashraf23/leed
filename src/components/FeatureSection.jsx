import React from "react";
import featureImg1 from "/src/assets/featureImg1.png";
import featureImg2 from "/src/assets/featureImg2.png";
import featureImg3 from "/src/assets/featureImg3.png";
function FeatureSection() {
  const features = [
    {
      icon: <img src={featureImg1} className="" />,
      title: "Learn The Latest Skills",
      description:
        "Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a BC, making it over 2000 years old.",
    },
    {
      icon: <img src={featureImg2} className="" />,
      title: "Get Ready For a Career",
      description:
        "Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a BC, making it over 2000 years old.",
    },
    {
      icon: <img src={featureImg3} className="" />,
      title: "Earn a Certificate",
      description:
        "Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a BC, making it over 2000 years old.",
    },
  ];

  return (
    <section
      id="aboutUs"
      className="bg-[#4D2C5E] text-white py-12 px-8 mt-[-40px] rounded-none sm:rounded-lg mx-auto max-w-5xl  flex flex-col md:flex-row items-center justify-between relative"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center space-x-5 p-4 w-full md:w-1/3"
        >
          <div className="bg-[#FFFFFF33] p-4 rounded-xl">{feature.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-200 my-2">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeatureSection;
