import React from 'react';
import { withRouter } from 'react-router';
import LeaveStars from './stars';

class CreateFormReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            campaignRating: 0,
            serviceRating: 0,
            orgRating: 0,
            overallRating: 0,
            dndCampaign_id: props.dndCampaignId,
            gamePlaceId: props.gamePlaceId,
            playerId: props.currentPlayer
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.createReview(this.state)
            .then(() => {
                this.props.history.push({
                    pathname: `/gameplaces/${this.props.gamePlaceId}`
                });
                this.setState({
                    description: '',
                    campaignRating: 0,
                    serviceRating: 0,
                    orgRating: 0,
                    overallRating: 0,
                });
        })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value,
            overallRating: ((parseInt(this.state.serviceRating) + parseInt(this.state.orgRating) + parseInt(this.state.campaignRating)) / 3)
        })
    }

    render() {

        return (
            <div className='review-create-box'>
                <div className='create-a-review'>
                    Leave a review
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='rating-box'>
                        <div>Campaign</div>
                        <LeaveStars rating={this.state.campaignRating}
                                ratingType='campaignRating'
                                update={this.update}/>
                        <div>Service</div>
                        <LeaveStars rating={this.state.serviceRating}
                                ratingType='serviceRating'
                                update={this.update}/>
                        <div>Organization</div>
                        <LeaveStars rating={this.state.orgRating}
                                ratingType='orgRating'
                                update={this.update}/>
                    </div>
                    <div className='submit-textarea'>
                        <textarea onChange={this.update('description')}
                            value={this.state.description}
                            cols="40" rows="5" />
                        <button type="submit">
                            Submit review
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(CreateFormReview);

