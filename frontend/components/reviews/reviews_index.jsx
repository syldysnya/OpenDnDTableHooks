import React from 'react';
import ReviewItem from './review_item';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllReviews()
    }

    render() {
        const mapped = this.props.reviews.map((rev, i) => {
            if (this.props.gamePlace.id === rev.gamePlaceId) {
                return (
                    <div className='review-item'>
                        <ReviewItem review={rev}
                            />
                    </div>
                )
            }
        })
        // if (!this.props.reviews) return null;
        debugger
        return (
            <div>
                This is list of reviews
            </div>
        )
    }
};

export default ReviewsIndex;