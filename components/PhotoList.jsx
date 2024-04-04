import React from "react";
import PhotoCart from "./PhotoCart";

const PhotoList = ({ photos }) => {
  return (
    <div className="img-grid">
      {photos.map((photo,index) => (
        <PhotoCart key={index} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
