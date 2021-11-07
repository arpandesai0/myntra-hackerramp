import React from "react";
import { useParams } from "react-router";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import rating from "../assets/rating.png";
import size from "../assets/size.png";
function ProductDetails({
  current,
  setCurrent,
  start,
  setStart,
  fail,
  setFail,
}) {
  const { id } = useParams();
  const solution = [10, 13, 7];
  const productData = [
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "Nike",
      product: "Dri-Fit Training Jacket",
      price: "Rs 3500",
      img: product1,
    },

    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "Puma",
      product: "Men Red & White Graphic Back Printed RCB T-shirt",
      price: "Rs. 1799",
      img: product3,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "H&M",
      product: "Men Beige Relaxed Fit T-shirt",
      price: "Rs. 799",
      img: product4,
    },

    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },

    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "Puma",
      product: "Men White & Blue Graphic Print",
      price: "Rs. 1619",
      img: product2,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "Nike",
      product: "Men Off White & Green Typography Printed Basketball T-shirt",
      price: "Rs. 2695",
      img: product5,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
    {
      brand: "HRX by Hrithik Roshan",
      product: "Men White Solid Round Neck Athleisure T-shirt",
      price: "Rs. 449",
      img: product6,
    },
  ];
  const product = productData[id];
  const checkHint = () => {
    if (solution[current - 1] == id) {
      setCurrent(current + 1);
      alert("Congrats");
    } else {
      setFail(fail + 1);
      if (fail >= 2) {
        alert("Sorry you have lost the event");
      } else {
        alert("Oops! Wrong guess. " + (2 - fail) + " attempts remaining.");
      }
    }
  };
  return (
    <div className="h-screen flex">
      <img className="h-5/6" src={product.img} />
      <div className="px-8 py-2 flex flex-col gap-y-2">
        <p className="font-bold text-2xl text-gray-700">{product.brand}</p>
        <p>{product.product}</p>
        <img className="h-8 w-32" src={rating} />
        <div className="border-b-2 " />
        <p className="font-bold  text-2xl text-gray-700">{product.price}</p>
        <p className="text-green-500 font-semibold">Inclusive of all taxes</p>
        <img className="h-44 my-8" src={size} />
        {start && (
          <button
            className="bg-pink-500 h-12 text-white font-semibold rounded-md"
            onClick={checkHint}
          >
            Check for Hint {current}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
