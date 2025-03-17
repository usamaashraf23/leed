import React from "react";
import premiumImg from "/src/assets/containerImages/premiumImg.png";
import hearts from "/src/assets/containerImages/hearts.png";
import jigsaw from "/src/assets/containerImages/jigsaw.png";
import bgImg1 from "/src/assets/backgroundImages/bgImg1.png";
import bgImg2 from "/src/assets/backgroundImages/bgImg2.png";
function PremiumSection() {
  return (
    <section className="relative bg-[#fef8f1] py-16 px-10 flex flex-col-reverse md:flex-row  justify-center gap-20 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute top-10 left-10 w-10 h-10 bg-gray-200 opacity-50 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-10 h-10 bg-gray-200 opacity-50 rounded-full"></div>
      <div className="absolute top-20 -right-36 text-gray-300 text-6xl">⚛️</div>
      <div className="absolute bottom-16 left-32 text-gray-300 text-6xl">
        <img src={bgImg1} alt="" className="h-16" />
      </div>
      <div className="absolute bottom-52 left-32 text-gray-300 text-6xl">
        <img src={bgImg2} alt="" className="h-16" />
      </div>

      {/* Image Section */}
      <div className="relative   flex-shrink-0">
        <img
          src={premiumImg}
          alt="Learning Experience"
          className="max-w-md md:max-w-lg drop-shadow-lg h-96"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900">
          Premium <span className="text-orange-500">Learning</span>
          <br /> Experience
        </h1>

        {/* Feature Items */}
        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4  ">
            <div className="bg-[#4D2C5E] px-3 py-3 rounded-xl">
              <img src={hearts} alt="Icon 1" className="h-10" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">Easily Accessible</h3>
              <p className="text-gray-600 text-sm">
                Learning will feel very comfortable with Courslab.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#4D2C5E] px-3 py-3 rounded-xl">
              <img src={jigsaw} alt="Icon 1" className="h-10" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fun Learning Experience</h3>
              <p className="text-gray-600 text-sm">
                Learning will feel very comfortable with Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumSection;
