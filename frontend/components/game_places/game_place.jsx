import React from 'react';
import ReservationCreateFormContainer from '../reservations/reservation_create_form_container'
import CreateFormReview from '../reviews/create_form';
import ReviewsIndex from '../reviews/reviews_index';

class GamePlace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.props.fetchGamePlace(this.props.match.params.gamePlaceId);
        this.props.fetchAllReviews();
    }

    loremIpsumText() {
        return (
            <div className='gp-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        )
    }

    render() {
        
        if (!this.props.gamePlace) return null;

        const { gamePlace }  = this.props
        const img_mapped = gamePlace.pictureUrls.map((pic, i) => {
            return (
                <li className='gallery-pic' key={`gallery-pic-${i}`}>
                    <img src={pic} />
                </li>
            )
        })

        if (!this.props.reviews) return null;
        
        const reviews_mapped = {};
        this.props.reviews.map((rev) => {
            if (this.props.gamePlace.id === rev.gamePlaceId) {
                reviews_mapped[rev.id] = rev
            }
        })
        
        return(
            <div className='gp-body'>
               <div className='gp-header'>
                    <img src={gamePlace.photoUrl} />
               </div>
                
               <div className='gp-page-box'>
                    <div className='left-gpage'>
                        <div className='gp-info-navbar'>
                            <li key='overview'>Overview</li>
                            <li key='photos'>Photos</li>
                            <li key='campaigns'>DnD Campaigns</li>
                            <li key='reviews'>Reviews</li>
                        </div>
                        <div className='gp-info-box' ref={this.myRef}>
                            <h1>{gamePlace.name}</h1>
                        </div>
                        {this.loremIpsumText()}
                        <div className='gp-gallery'>
                            {img_mapped}
                        </div>
                        <div className='review-submit'>
                            <CreateFormReview createReview={this.props.createReview}
                                gamePlaceId={this.props.match.params.gamePlaceId}
                                currentPlayer={this.props.currentPlayer}
                                dndCampaignId={this.props.gamePlace.dndCampaignId}/>
                        </div>
                        <div className='reviews-box'>
                            <ReviewsIndex
                                reviews={reviews_mapped}
                                currentPlayer={this.props.currentPlayer}
                                fetchAllReviews={this.props.fetchAllReviews} />
                        </div>
                    </div>
                    <div className='right-gpage'>
                        <ReservationCreateFormContainer />
                    
                        <div className='gp-map'>
                            <div className='map-box'>
                                <img src='https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-20+at+1.28.32+AM.png'/>
                                <p>{gamePlace.address}</p>
                            </div>
                            <div className='hours-info'>
                                <p>{gamePlace.openHour}</p>
                                <p>{gamePlace.closeHour}</p>
                                <span> 
                                    <i className="fas fa-hat-wizard"></i>
                                    Dress Code
                                </span>
                                <p>Casual Dress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default GamePlace;