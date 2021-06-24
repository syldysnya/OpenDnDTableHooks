import React, { useEffect, useRef } from 'react';

const RatingsBox = (props) => {
    const fiveRef = useRef(null);
    const fourRef = useRef(null);
    const threeRef = useRef(null);
    const twoRef = useRef(null);
    const oneRef = useRef(null);
    const { nums, total } = props;
    const fivePer = `${(nums[5] / total) * 100}%`;
    const fourPer = `${(nums[4] / total) * 100}%`;
    const threePer = `${(nums[3] / total) * 100}%`;
    const twoPer = `${(nums[2] / total) * 100}%`;
    const onePer = `${(nums[1] / total) * 100}%`;

    useEffect(() => {
        fiveRef.current.style.width = fivePer;
        fourRef.current.style.width = fourPer;
        threeRef.current.style.width = threePer;
        twoRef.current.style.width = twoPer;
        oneRef.current.style.width = onePer;
    }, [])

    return (
        <>
            <div className="rat-left">
                <span>5</span>
                <span>4</span>
                <span>3</span>
                <span>2</span>
                <span>1</span>
            </div>
            <div className="rat-right">
                <div className='rat-outer'>
                    <div className="rat-inner five" ref={fiveRef}></div>
                </div>
                <div className='rat-outer' >
                    <div className="rat-inner four" ref={fourRef}></div>
                </div>
                <div className='rat-outer' >
                    <div className="rat-inner three" ref={threeRef}></div>
                </div>
                <div className='rat-outer' >
                    <div className="rat-inner two" ref={twoRef}></div>
                </div>
                <div className='rat-outer' >
                    <div className="rat-inner one" ref={oneRef}></div>
                </div>
            </div>
        </>
    );
};

export default RatingsBox;