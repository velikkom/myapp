import React from "react";
import imgFrontend from "../../assets/img/frontend.jpg";
import imgHome  from "../../assets/img/home.svg";
import imgSalesForce  from "../../assets/img/salesforce.png";

export const NewImage = () => {
  return (
    <div>
      <h2>Static Image</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam
        magnam voluptatem beatae non, accusantium, neque aliquam voluptatum
        cupiditate quos nihil sit rerum quas optio cum necessitatibus officiis,
        nulla quibusdam!
      </p>
      <img src="/vite.svg" alt="" />

      <h2>Dynamic Image</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        asperiores ipsam, ea cum esse magnam nam reprehenderit beatae? Molestiae
        dolorum placeat impedit dolorem totam, libero rem optio quidem? Est,
        illo?
      </p>
      <img src={imgFrontend} alt="" />
      <img src={imgHome} alt="" />
      <img src={imgSalesForce} alt="" />
    </div>
  );
};
