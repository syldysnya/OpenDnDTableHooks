import React, { useEffect, useRef } from 'react';

const StarsShow = (props) => {
    const starsRef = useRef(null);
    const { stars, lengthRat } = props;
    const overall = stars / lengthRat;
    const total = 5;
    const persentage = `${(overall / total) * 100}%`;

    useEffect(() => {
        starsRef.current.style.width = persentage;
    }, [starsRef])

    return (
        <div className='stars-outer'>
            <div className="stars-inner" ref={starsRef}></div>
        </div>
    );
};

export default StarsShow;