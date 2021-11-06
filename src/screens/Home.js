import React from 'react';
import Navbar from "../comps/Navbar"
import LandingPoster from "../assets/home_landing.png";
import Deal from "../assets/home_deal.png";
import Category from "../assets/home_category.png";
import Footer from "../assets/footer.png";
export default function Home(){
    return(
    <div>
        <Navbar />
        <img src={LandingPoster} alt="Landing" className="mt-12" />
        <img src={Deal} alt="Deal" className="mt-12" />
        <img src={Category} alt="Category" className="mt-12" />
        <img src={Footer} alt="Footer" className="mt-12" />
    </div>
    )
}