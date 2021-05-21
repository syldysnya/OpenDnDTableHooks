import React from 'react';
import { NavLink } from 'react-router-dom';

class ReservationViewForm extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            gameDate: props.location.aboutProps.reservation.gameDate,
            gameStart: props.location.aboutProps.reservation.gameStart,
            playersNum: props.location.aboutProps.reservation.playersNum,
            dndCampaignId: props.location.aboutProps.reservation.dndCampaignId,
            gamePlaceId: props.location.aboutProps.reservation.gamePlaceId,
            playerId: props.location.aboutProps.reservation.playerId,
            confirmation_num: props.location.aboutProps.reservation.confirmation_num,
            addInfo: props.location.aboutProps.reservation.addInfo,
            canceled: props.location.aboutProps.reservation.false,
            plphone: props.location.aboutProps.reservation.plphone,
            email: props.location.aboutProps.player.email
            
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ gameStart: this.props.location.aboutProps.gameStart})
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleClick(e) {
        e.preventDefault();
        this.props.location.aboutProps.createReservation(this.state)
            .then((res) => {
                return this.props.history.push({
                pathname: `/book/view/${res.reservation.id}`
            })
        }
    )}

    render() {
        if (!this.props.location.aboutProps.reservation.gameDate) return null;
        debugger
        return (
            <div className='reservation-completion'>
                <div className='reservation-completion-form'>
                    <div className='almost-done'>You’re almost done!</div>
                    <div className='res-info-in-conf'>
                        <div className='gp-avatar-in-conf'>
                            <img src={this.props.location.aboutProps.gamePlace.avatarUrl} />
                        </div>
                        <div className='reservation-info'>
                            <div>{this.props.location.aboutProps.gamePlace.name}</div>
                            <div className='res-info-conf'>
                                <i className="far fa-calendar"></i>
                                <div></div>
                                <li id='1'>{this.state.gameDate}</li>
                                <i className="far fa-clock"></i>
                                <div></div>
                                <li id='2'>{this.state.gameStart}</li>
                                <i className="far fa-user"></i>
                                <div></div>
                                <li id='3'>{this.state.playersNum} people</li>
                            </div>
                        </div>
                    </div>
                    <div>Game session details</div>
                    <div>{this.props.location.aboutProps.player.fname} {this.props.location.aboutProps.player.lname} </div>
                    <form className='reservation-completion-box'>
                        <div className='player-contacts'>
                            <div>
                                <select className='phone-codes' defaultValue='USA'>
                                    <option value='Canada' className='Canada'>🇨🇦</option>
                                    <option value='Mexico' className='Mexico'>🇲🇽</option>
                                    <option value='Russia' className='Russia'>🇷🇺</option>
                                    <option value='USA' className="USA">🇺🇸</option>
                                </select>
                                <input type="text" onChange={this.update('plphone')}/>
                            </div>
                            <div>
                                <input type="text" onChange={this.update('email')} value={this.state.email}/>
                            </div>
                        </div>
                        {/* <select className='adventure-type-list'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select> */}
                        <textarea className='Additional-info-inp'
                                onChange={this.update('add_info')}
                                placeholder='Add a special request (optional)'/>
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