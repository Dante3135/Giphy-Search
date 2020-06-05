import React from 'react';
import GifItem from './GifView';

const GifContainer = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <div className="gif-container">{gifItems}</div>
  );
};

export default GifContainer;