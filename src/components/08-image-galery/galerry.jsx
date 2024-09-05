import React from "react";
import imagesData from "./data.json";
import { GalleryItem } from "./gallery-item";
import "./gallery.scss"



export const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="images">Image Gallery</h1>
      {imagesData.map((item)=>(
        <GalleryItem key={item.id} {...item}/>
      ))};
    </div>
  );
};
