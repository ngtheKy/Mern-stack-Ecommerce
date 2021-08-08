import React, { useEffect, useState, useRef } from 'react'
import '../../../assets/img1.jpg'
import './slide.css'
const colors = ["https://routine.vn/media/wysiwyg/slider/Sale_-_Desktop_copy.jpg    ",
    "https://routine.vn/media/wysiwyg/slider/N_-1.jpg",
    "https://routine.vn/media/wysiwyg/slider/NAM-2.jpg"];
const delay = 5000;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((link, index) => (
                    <img
                        className="slide"
                        key={index}
                        src={link}
                    />
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow