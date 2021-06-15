import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarsForm = (props) => {

    return (
        <div className='star-rating'>
            {[... Array(5)].map((star, i) => {
                const starValue = i + 1;

                return (
                <label key={`stars-${i}`}>
                    <input type="radio"
                        name="star-rating-radio"
                        value={starValue}
                        id={props.ratingType}
                        onClick={props.update}/>
                    <FaStar size={20}
                            color={starValue <= props.rating ? '#ffc107' : '#d2d1d1' }
                            className='star'/>
                </label>
                )
            })}
        </div>
    );
};

export default StarsForm;