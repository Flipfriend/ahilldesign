import React from 'react';
import Button from "./Button";
import './CarouselCards.css';
import caseStudyImg from '../assets/fathom-img.jpg';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';


function CarouselCards () {
    return (
        <div className="CarouselCards">    
            <div className="carousel-arrow left-carousel">
                <img className='cc-arrow' src={leftArrow} alt='left arrow'></img>
            </div>
            <div className="carousel-section">
                <div className="case-container">
                    <div className="image-container">
                        <img className="caseImage"src= {caseStudyImg} alt='Fathom Design mockup'/>
                    </div>
                    <div className='divider'>
                    </div>
                    <div className="meta-case-container">
                        <div className="text-container">
                            <div className="title autoLayout-text">Title</div>
                            <div className="description autoLayout-text">Description</div>
                            <div className="tags autoLayout-text">Tags</div>
                            <div className="contain-button">
                                <Button text="View Case Study"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-arrow right-carousel">
                <img className='cc-arrow' src={rightArrow} alt='right arrow'/>
            </div>
        </div>    
    )
}

export default CarouselCards;