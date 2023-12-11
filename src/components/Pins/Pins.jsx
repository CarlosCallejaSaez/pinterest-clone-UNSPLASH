import React, { useState, useEffect } from "react";
import PictureCard from "../PictureCard/PictureCard";

import "./Pins.css";

function Pins(props) {
  const [images, setimages] = useState([]);
 


  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${props.InputKey}&per_page=30`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setimages(data.results);
      });
  }, [props.InputKey]);


  return (
    <div>
      <div className="container__pins">

    
        {images.map((element) => {

          return (
            <PictureCard
              key={element.urls.raw}
              imageUrl={
                !element.urls.full
                  ? "https://framerusercontent.com/images/WhbnaLPVLazxdFY7Sdcq8SsAhg.png"
                  : element.urls.full
              }
            />
          );
        })}

      </div>


    </div>
  );
}
export default Pins;