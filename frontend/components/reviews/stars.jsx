import React from 'react';
import { FaRegStar, FaRegStarHalf, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const LeaveStars = (props) => {
    return (
        <div className='star-rating'>
            {[... Array(5)].map((star, i) => {
                const starValue = i + 1;

                return (
                <label>
                    <input type="radio"
                        name="star-rating-radio"
                        value={starValue}
                        onClick={props.update(props.ratingType)}/>
                    <FaStar size={20}
                            color={starValue <= props.rating ? '#ffc107' : '#d2d1d1' }
                            className='star'/>
                </label>
                )
            })}
        </div>
    )
};

export default LeaveStars;
