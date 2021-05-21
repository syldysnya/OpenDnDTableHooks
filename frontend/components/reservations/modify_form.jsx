import React from 'react';

class ModifyForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: props.location.aboutProps.reservation.id,
            gameDate: props.location.aboutProps.reservation.gameDate,
            gameStart: props.location.aboutProps.gameStart,
            playersNum: props.location.aboutProps.reservation.playersNum,
            dndCampaignId: props.location.aboutProps.reservation.dndCampaignId,
            gamePlaceId: props.location.aboutProps.reservation.gamePlaceId,
            playerId: props.location.aboutProps.reservation.playerId,
            confirmation_num: props.location.aboutProps.reservation.confirmation_num,
            addInfo: props.location.aboutProps.reservation.addInfo,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            gameStart: this.props.location.aboutProps.reservation.gameStart })
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleClick(e) {
        e.preventDefault();
        
        
        this.props.location.aboutProps.editReservation(this.state)
            .then((res) => {
                return this.props.history.push({
                    pathname: `/book/view/${res.reservation.id}`,
                    
                })
            }
        )
    }

    render() {
        if (!this.props.location.aboutProps.reservation.gameDate) return null;
        const { gamePlace, player } = this.props.location.aboutProps;
        
        return (
            <div className='reservation-completion'>
                <div className='reservation-completion-form'>
                    <p>You’re almost done!</p>
                    <h1>{gamePlace.name}</h1>
                    <ul className='reservation-info'>
                        <i className="far fa-calendar"></i>
                        <li id='1'>{this.state.gameDate}</li>
                        <i className="far fa-clock"></i>
                        <li id='2'>{this.props.location.aboutProps.gameStart}</li>
                        <i className="far fa-user"></i>
                        <li id='3'>{this.state.playersNum} people</li>
                    </ul>
                    <h2>Game session details</h2>
                    {/* <h3>{player.lname} {player.fname}</h3> */}
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

export default ModifyForm;