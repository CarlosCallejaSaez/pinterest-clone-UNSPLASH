import React, { useState, useEffect } from "react";
import PictureCard from "../PictureCard/PictureCard";

import "./Pins.css";

function Pins(props) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${props.InputKey}&per_page=30`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setImages(data.results);
          setError(null);
        } else {
          setImages([]);
          setError("No results found");
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setError("No results found");
      });
  }, [props.InputKey]);

  return (
    <div>
      <div className="container__pins">
        {error ? (
          <p>{error}</p>
        ) : (
          images.map((element) => (
            <PictureCard
              key={element.urls.raw}
              imageUrl={
                !element.urls.full
                  ? "https://framerusercontent.com/images/WhbnaLPVLazxdFY7Sdcq8SsAhg.png"
                  : element.urls.full
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Pins;
