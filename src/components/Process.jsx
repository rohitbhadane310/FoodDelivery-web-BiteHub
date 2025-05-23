import React from "react";
import img1 from "../assets/img/process1.png";
import img2 from "../assets/img/process2.png";
import img3 from "../assets/img/process3.png";

const Process = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-5 lg:px-14 transition-colors duration-300">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium uppercase tracking-wider mb-2">
          Our Service
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">How Does It Work?</h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* Card 1 */}
        <div className="bg-gray-50 dark:bg-[#1F1D2B] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-full h-36 flex items-center justify-center overflow-hidden mb-4">
            <img
              src={img1}
              alt="Easy To Order"
              className=" w-44 h-44 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy To Order</h3>
          <p className="text-gray-600 dark:text-gray-300">
            You only need a few steps in ordering food.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 dark:bg-[#1F1D2B] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-full h-36 flex items-center justify-center overflow-hidden mb-4">
            <img
              src={img2}
              alt="Fastest Delivery"
              className=" w-64 h-64 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fastest Delivery</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Delivery that is always on time even faster.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 dark:bg-[#1F1D2B] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-full h-36 flex items-center justify-center overflow-hidden mb-4">
            <img
              src={img3}
              alt="Best Quality"
              className="w-60 h-60 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Not only fast for us, quality is also number one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
