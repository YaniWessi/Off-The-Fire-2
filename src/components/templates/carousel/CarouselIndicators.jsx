import React, {useContext} from 'react';
import carouselContext from '../../../utils/contexts/CarouselContext';

const CarouselIndicators = () =>{
  
  const { moveDot, slideIndex } = useContext(carouselContext);

  return(
    <div className="container-dots">
    {Array.from({length: 5}).map((item, index) => (
        <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}/>
    ))}
</div>
  )
}

export default CarouselIndicators;