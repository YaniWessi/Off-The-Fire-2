import React, { useEffect, useState } from 'react';
import AppImage from '../../atoms/app-media/app-image/AppImage';

const ProductImage = ({ classname, imgName, alt  }) => {
  
  const [imgSrc, setImgSrc] = useState('');


  const getUrl = (filename) => new URL(`../../../assets/images/store-images/${filename}.png`, import.meta.url).href;

  const image = getUrl(imgName)
  // const loadImage = (filename) => {
  //   if (!!filename) {
  //     const imageSrc = getUrl(filename);
  //     setImgSrc(imageSrc);
  //     setIsloadingImage(false);
  //   } else {
  //     setIsloadingImage(true);
  //   };
  // };

  // useEffect(() => {
  //   loadImage(imgName);
  // },[imgName]);
  
  return <AppImage source={image} alt={alt} classname={classname} />
}

export default ProductImage;