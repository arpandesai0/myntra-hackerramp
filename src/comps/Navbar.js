import React from "react";
import logo from "../assets/myntra_logo.png";
function Navbar(){
return (
    <div>
        <div className="flex justify-between py-6 px-12 shadow-lg items-center">
            <div className="">
                <img src={logo} alt="logo" className="w-16 " />
            </div>
            <div className="flex space-x-6 ml-16 text-base font-semibold">
                <p>MEN</p>
                <p>WOMEN</p>
                <p>KIDS</p>
                <p>HOMES & LIVING</p>
                <p>BEAUTY</p>
            </div>
            <div className="text-sm ml-12">
                <input type="text" className="px-6 py-3 w-96 bg-gray-100 rounded" placeholder="Search for products, brands and more" />
            </div>
            <div className="flex text-xs space-x-6">
                <div className="flex flex-col items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p>Profile</p>
                </div>
                <div className="flex flex-col items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p>Wishlist</p>
                </div>
                <div className="flex flex-col items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p>Bag</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar;