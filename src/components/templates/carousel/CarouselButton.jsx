import React, {useContext} from 'react';
import carouselContext from '../../../utils/contexts/CarouselContext';
import AppButton from '../../atoms/app-button/AppButton';
import AppImage from '../../atoms/app-media/app-image/AppImage';
import './Carousel.css';
import leftArrow from '../../../assets/images/arrow-icons/left-arrow.svg';
import rightArrow from '../../../assets/images/arrow-icons/right-arrow.svg';

export default function CarouselButton({direction}) {
    const { nextSlide, prevSlide } = useContext(carouselContext)
    return (
        <AppButton
        btnCb={direction === 'next' ? nextSlide : prevSlide}
        classname= {direction === "next" ? 'btn-slide next' : "btn-slide prev"}
        >
            <AppImage source={direction === "next" ? rightArrow : leftArrow} alt={`${direction === "next" ? 'right-Arrow' : 'left-Arrow'}`}/>
        </AppButton>
    )
}