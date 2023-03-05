import './CarouselService.css'
import React, { useState } from 'react'
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselService = (props) => {

    const { srcOne, srcTwo, srcThree, captionOne, captionTwo, captionThree } = props

    const items = [
        {
            src: srcOne,
            altText: 'Image 1',
            caption: captionOne
        },
        {
            src: srcTwo,
            altText: 'Image 2',
            caption: captionTwo
        },
        {
            src: srcThree,
            altText: 'Image 3',
            caption: captionThree
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previus = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {  //codigo donde generamos cada imagen del carousel
        console.log(item);
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width='100%' height='450px' />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div >
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previus={previus}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction='prev' directionText='Previus' onClickHandler={previus} />
                <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
            </Carousel>
            
        </div>
    )

}

export default CarouselService