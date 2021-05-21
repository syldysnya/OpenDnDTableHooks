import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const RES_TIME = [
    "12:00 AM", "12:30 AM",
    "1:00 AM", "1:30 AM",
    "2:00 AM", "2:30 AM",
    "3:00 AM", "3:30 AM",
    "4:00 AM", "4:30 AM",
    "5:00 AM", "5:30 AM",
    "6:00 AM", "6:30 AM",
    "7:00 AM", "7:30 AM",
    "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM",
    "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM",
    "10:00 PM", "10:30 PM",
    "11:00 PM", "11:30 PM"
];

class EditForm extends React.Component {
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
            canceled: props.reservation.canceled,
            plphone: props.reservation.plphone,
            email: props.reservation.email,
            showed: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchReservation(this.props.match.params.reservationId);
    }

    handleButton() {
        this.setState({ showed: true })
    }

    handleClick(e) {
        
        this.setState({ gameStart: e.currentTarget.innerHTML })
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    TimePick() {
        
        return (
            <select onChange={this.update('gameStart')}
                defaultValue={this.props.reservation.gameStart}>
                {RES_TIME.map(t => {
                    return (
                        <option key={t} value={t}>{t}</option>
                    )
                })}
            </select>
        )
    }

    timeOptions(field) {

        let curTime = field;
        let splitted = curTime.split(' ');
        let t = splitted[0].split(':');
        let h = parseInt(t[0]);
        let m = parseInt(t[1]);
        let btn1;
        let btn2;
        let btn3;
        let btn4;
        let timeOptions;
        
        if (m === 30) { // 8:30
            btn1 = (h.toString() + ':00 ' + splitted[1])
            btn2 = (t[0] + ':15 ' + splitted[1])
            btn3 = (t[0] + ':45 ' + splitted[1])
            if (t[0] === '11') {
                
                splitted[1] === 'PM' ? splitted[1] = 'AM' : splitted[1] = 'PM';
                btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
            } else {
                btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
            }

            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        } else { // 8:00
            if (t[0] === '12') {
                let pod = splitted[1]
                pod === 'PM' ? pod = 'AM' : pod = 'PM';
                btn1 = ((h - 1).toString() + ':30 ' + pod)
                btn2 = ((h - 1).toString() + ':45 ' + pod)  
            } else {
                btn1 = ((h - 1).toString() + ':30 ' + splitted[1])
                btn2 = ((h - 1).toString() + ':45 ' + splitted[1])
            }
            btn3 = (h.toString() + ':15 ' + splitted[1])
            btn4 = (h.toString() + ':30 ' + splitted[1])
            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        }

        const mapped = timeOptions.map((t, i) => {
            
            return (
                <li key={`btn-time-${i}`}>
                    <NavLink onClick={this.handleClick}
                        className='auth-button' to={{
                            pathname: '/booking/details/edit',
                            aboutProps: {
                                reservation: this.props.reservation,
                                gameStart: t,
                                gamePlace: this.props.gamePlace,
                                player: this.props.player,
                                editReservation: this.props.editReservation
                            }
                        }} exact>
                        {t}
                    </NavLink>
                </li>
            )
        })

        return (
            <div className='time-buttons'>
                {mapped}
            </div>
        )
    }
    
    render() {

        if (!this.props.reservation.gameDate) return null;
        const reservation = this.props.reservation;

        let buttonForm;

        if (this.state.showed) {
            buttonForm = this.timeOptions(this.state.gameStart)
        } else {
            buttonForm = this.timeOptions(this.props.reservation.gameStart)
        }

        return (
            <div className='edit-res-box'>
                    <div className='edit-input'>
                        <div className='input-time'>
                            <select defaultValue={reservation.playersNum}
                                onChange={this.update('playersNum')}>
                                <option key='1' value='1'>1 person</option>
                                <option key='2' value='2'>2 people</option>
                                <option key='3' value='3'>3 people</option>
                                <option key='4' value='4'>4 people</option>
                                <option key='5' value='5'>5 people</option>
                            </select>
                        </div>
                        <label className='t'>
                            {this.TimePick()}
                        </label>
                    <button className='auth-button' onClick={this.handleButton}>
                        Find a Table
                    </button>
                    {buttonForm}
                </div>
            </div>
        )
    }
};

export default withRouter(EditForm);