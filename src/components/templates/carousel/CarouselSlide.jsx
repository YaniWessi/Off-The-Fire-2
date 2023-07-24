import { useContext } from 'react';
import carouselContext from '../../../utils/contexts/CarouselContext';
import AppImage from '../../atoms/app-media/app-image/AppImage';

const CarouselSlide = ({ id , imgName }) =>{

  const {slideIndex} = useContext(carouselContext)

  return (
    <div
      key={id}
      className={slideIndex === imgName ? "slide active-anim" : "slide"}>
        <AppImage 
        source={new URL(`../../../assets/images/carousel-slides/img${imgName}.jpg`, import.meta.url).href}
        alt='yo'/>
    </div>
  )
}

export default CarouselSlide;