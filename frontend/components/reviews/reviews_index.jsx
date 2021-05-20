import React from 'react';
import ReviewItem from './review_item';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const arr = Object.values(this.props.reviews)

        const mapped = arr.map((rev, i) => {
            return (
                <ReviewItem review={rev}/>
            )
        })
        
        return mapped;
    }
};

export default ReviewsIndex;