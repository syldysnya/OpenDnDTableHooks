import React from 'react';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        let nameAbb;
        let dName;
        if (!this.props.review.playerDname) {
            nameAbb = 'DnD';
            dName = 'DnDTable Player'
        } else {
            playerName = this.props.review.playerDname;
            
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
        
        const { review } = this.props;
        let city = this.props.review.playerCity[0];
        return (
            <div className='review-item'>
                <div className='player-info-review'>
                    <div className='avatar-player'>
                        {nameAbb}
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
                    <div>{this.props.review.description}</div>
                </div>
            </div>
        )
    }
};

export default ReviewItem;