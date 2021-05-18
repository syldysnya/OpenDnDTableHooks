import React from 'react';

class ReservationViewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            gameDate: props.reservation.gameDate,
            gameStart: props.reservation.gameStart,
            playersNum: props.reservation.playersNum,
            dndCampaignId: props.reservation.dndCampaignId,
            gamePlaceId: props.reservation.gamePlaceId,
            playerId: props.reservation.playerId,
            confirmation_num: props.reservation.confirmation_num,
            addInfo: props.reservation.addInfo,
            renderTimeOpts: false,
            saved: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ gameStart: this.props.gameStart })
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleClick(e) {
        e.preventDefault();
        this.props.editReservation(this.state)
            .then((res) => {
                return this.props.history.push({
                    pathname: `/book/view/${res.reservation.id}`,
                    reservation: this.state,
                    gamePlace: this.props.gamePlace,
                    player: this.props.player,
                })
            }
        )
    }

    render() {
        if (!this.props.reservation.gameDate) return null;

        return (
            <div className='reservation-completion'>
                <div className='reservation-completion-form'>
                    <p>You’re almost done!</p>
                    <h1>{this.props.gamePlace.name}</h1>
                    <ul className='reservation-info'>
                        <i className="far fa-calendar"></i>
                        <li id='1'>{this.state.gameDate}</li>
                        <i className="far fa-clock"></i>
                        <li id='2'>{this.state.gameStart}</li>
                        <i className="far fa-user"></i>
                        <li id='3'>{this.state.playersNum} people</li>
                    </ul>
                    <h2>Game session details</h2>
                    <h3>{this.props.player.lname} {this.props.location.aboutProps.player.fname}</h3>
                    <form className='reservation-completion-box'>
                        <select className='phone-codes' defaultValue='USA'>
                            <option value='Canada' className='Canada'>🇨🇦</option>
                            <option value='Mexico' className='Mexico'>🇲🇽</option>
                            <option value='Russia' className='Russia'>🇷🇺</option>
                            <option value='USA' className="USA">🇺🇸</option>
                        </select>
                        <select className='adventure-type-list'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <input type="text" onChange={this.update('phoneNum')} />
                        <input type="text" onChange={this.update('email')} />
                        <textarea className='Additional-info-inp'
                            onChange={this.update('add_info')}
                            placeholder='Add a special request (optional)' />
                        <button className='auth-button'
                            onClick={this.handleClick}>
                            Complete Reservation
                        </button>
                    </form>
                </div>
                <div className='right-bar-info'>
                    <h1>What to know before you go</h1>
                    <p>Important dining information
                    We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
                    Your table will be reserved for 2 hours for parties of up to 4; and 2 hours 15 minutes for parties of 5+.
                    </p>
                    <h1>Points</h1>
                    <p>
                        Keep in mind, you won’t collect points for this reservation unless you choose to below.
                    </p>
                </div>
            </div>
        )
    }
};

export default ReservationViewForm;