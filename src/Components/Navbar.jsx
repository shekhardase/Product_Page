import React from "react";

function Navbar() {
    return (
        <div className="flex flex-wrap justify-between items-center py-3 px-6 border-b border-gray-200 bg-white">

            <div className="flex items-center">
                <img src="/images/brand_logo.png" alt="Brand Logo" className="h-8 ml-11
                " />
            </div>


            <div className="hidden md:flex space-x-5">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Menu
                </a>
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Location
                </a>
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    About
                </a>
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Contact
                </a>
            </div>


            <div className="flex items-center">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-11">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
