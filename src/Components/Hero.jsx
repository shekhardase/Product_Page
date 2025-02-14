import React from "react";

function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white relative ml-40">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
                {/* Heading Section */}
                <div className="space-y-2 mt-5">
                    <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-gray-900">
                        YOUR FEET <br /> DESERVE <br /> THE BEST
                    </h1>
                </div>

                {/* Paragraph Section */}
                <div className="w-3/4">
                    <p className="text-gray-600 text-sm md:text-base">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                        Discover our wide range of styles and colors, crafted to provide unmatched comfort and durability. Explore our new collection today and find the perfect fit for any occasion.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-4 mt-4">
                    <a href="/cards" className="bg-red-600 text-white px-6 py-3 text-sm md:text-base rounded-md hover:bg-red-700">
                        Shop
                    </a>
                    <button className="border border-gray-700 px-6 py-3 text-sm md:text-base rounded-md hover:bg-gray-100">
                        Category
                    </button>
                </div>

                {/* Available On Section */}
                <div className="mt-8">
                    <p className="text-gray-600 text-sm md:text-base font-medium">Also Available On</p>
                    <div className="flex space-x-4 mt-4">
                        <img src="/images/amazon.png" alt="Amazon" className="h-10" />
                        <img src="/images/flipkart.png" alt="Flipkart" className="h-10" />
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 flex justify-center relative mr-12">
                {/* Shoe Image */}
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

