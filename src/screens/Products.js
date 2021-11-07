import React from "react";
import Navbar from "../comps/Navbar";
import Product from "../comps/Product";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
function Products({ current, setCurrent }) {
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
  return (
    <div>
      <div className=" grid grid-cols-5 p-8 content-center justify-center">
        {productData.map((item, index) => (
          <Product
            key={index}
            id={index}
            brand={item.brand}
            product={item.product}
            price={item.price}
            img={item.img}
            current={current}
            setCurrent={setCurrent}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
