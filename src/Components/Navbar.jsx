import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex flex-wrap justify-between items-center py-3 px-6 border-b border-gray-200 bg-white">

            <div className="flex items-center">
                <img src="/images/brand_logo.png" alt="Brand Logo" className="h-8 ml-11 mr-auto" />
            </div>


            <div className="hidden md:flex space-x-5">
                <Link to="/home" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Home
                </Link>
                <Link to="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Menu
                </Link>
                <a to="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Location
                </a>
                <Link to="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    About
                </Link>
                <Link to="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Contact
                </Link>
            </div>


            <div className="flex items-center">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;

