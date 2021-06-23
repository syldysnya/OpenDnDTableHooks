import React, { useEffect, useRef } from 'react';


const StarsShow = (props) => {
    const starsRef = useRef(null);
    const { stars, lengthRat } = props;
    const overall = stars / lengthRat;
    const total = 5;
    const persentage = `${(overall / total) * 100}%`;
    // const persRounded = `${(persentage / 10) * 10}%`;

    useEffect(() => {
        starsRef.current.style.width = persentage;
    }, [])

    return (
        <div className='stars-outer'>
            <div className="stars-inner" ref={starsRef}></div>
        </div>
    );
};

export default StarsShow;