
export const reviewsByPlayerId = () => {
    const reviewsByPlayerId = [];
    Object.keys(reviews).forEach(reviewId => {
        const review = reviews[reviewId];
        if (reviews[reviewId].player_id === player_id) reviewsByPlayerId.push(review)
    })
    return reviewsByPlayerId;
}