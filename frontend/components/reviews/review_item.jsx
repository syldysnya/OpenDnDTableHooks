import React from 'react';
import { useSelector } from 'react-redux';
import StarsShow from '../stars/stars_show';

const ReviewItem = (props) => {

    const review = props.review;
    const city = review.playerCity[0];
    
    let nameAbb;
    let dName;
    if (!review.playerDname) {
        nameAbb = 'DnD';
        dName = 'DnDTable Player'
    } else {
        let playerName = review.playerDname;
        
        const capsAlph = 'ABCDEFGHIJKLMNOPQRSTUVWYZ'.split('')
        if (playerName.split(' ').length !== 1) {
            playerName = playerName.split(' ')
            dName = playerName[0] + playerName[1][0].toUpperCase();
        
        } else {
            dName = playerName
        }
        nameAbb = playerName.split(' ').map(name => {
            return capsAlph.includes(name[0]) ? name[0] : ""
        }).join('')
    }

    const rating = review.serviceRating + review.orgRating + review.campaignRating;

    return (
        <div className='review-item'>
            <div className='player-info-review'>
                <div className='avatar-player'>
                    <div className='background-theme'></div>
                    <div className='nameabb'>{nameAbb}</div>
                </div>
                <div className='player-info-name'>
                    {dName}
                </div>
                <div className='player-info-city'>
                    {city.name}
                </div>
                <div className="player-reviews-num">
                    <i className="far fa-comment-alt"></i>
                    <div>
                        {review.playerReviews.length === 1 ? (
                            <div>1 review</div>
                        ) : (<div>{review.playerReviews.length} reviews</div>)}
                    </div>
                </div>
            </div>
            <div className='review-box'>
                <StarsShow stars={rating} lengthRat={3}/>
                <div className='ratings-list'>
                    Overall <span>{Math.round(review.overallRating)}</span>
                    · Service <span>{review.serviceRating}</span>
                    · Planning <span>{review.orgRating}</span>
                    · Campaign <span>{review.campaignRating}</span>
                    </div>
                <div>{review.description}</div>
            </div>
        </div>
    );
};

export default ReviewItem;