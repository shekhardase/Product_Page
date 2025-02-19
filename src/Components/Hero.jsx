import React from "react";
import { Link } from "react-router-dom";
function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-white relative ml-40">

            <div className="md:w-1/2 space-y-6">

                <div className="space-y-2 mt-5">
                    <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-gray-900">
                        YOUR FEET <br /> DESERVE <br /> THE BEST
                    </h1>
                </div>

                <div className="w-3/4">
                    <p className="text-gray-600 text-sm md:text-base">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                        DISCOVER OUR WIDE RANGE OF STYLES AND COLORS, CRAFTED TO PROVIDE UNMATCHED COMFORT AND DURABILITY. EXPLORE OUR NEW COLLECTION TODAY AND FIND THE PERFECT FIT FOR ANY OCCASION.
                    </p>
                </div>


                <div className="flex space-x-4 mt-4">
                    <Link to="/cards" className="bg-red-600 text-white px-6 py-3 text-sm md:text-base rounded-md hover:bg-red-700">
                        Shop
                    </Link>
                    <button className="border border-gray-700 px-6 py-3 text-sm md:text-base rounded-md hover:bg-gray-100">
                        Category
                    </button>
                </div>


            </div>

            <div className="md:w-1/2 flex justify-center relative mr-12">

                <div className="relative">
                    <img
                        src="/images/hero-image.png"
                        alt="Hero Shoe"
                        className="w-full max-w-lg drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;

