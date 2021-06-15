import React from 'react';
import { useSelector } from 'react-redux';

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
            </div>
            <div className='review-box'>
                <div>{review.overallRating} stars</div>
                <div>Organization {review.orgRating} · Service {review.serviceRating} · Campaign {review.campaignRating}</div>
                <div>{review.description}</div>
            </div>
        </div>
    );
};

export default ReviewItem;