import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  if (images.length > 0) {
    return <div className="image-list">{images}</div>;
  }
  return <h3 className="ui header">No results found!</h3>;
};

export default ImageList;
