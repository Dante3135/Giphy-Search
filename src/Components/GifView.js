import React from 'react';

const GifView = (image) => {
  return (
    <div className="gif-view">
      <img src={image.gif.images.downsized_medium.url} style={{
              width: "300px",
              height: "300px",
              objectFit: "fit",
              display: "block",
              boxShadow: "0 10px 10px rgba(0,0,0,.7)",
            }}/>
    </div>
  )
};

export default GifView;