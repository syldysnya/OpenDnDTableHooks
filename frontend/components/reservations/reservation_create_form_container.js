import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import ReservationCreateForm from './reservation_create_form';

const mapSTP = (state, ownProps) => {
    const currentTime = () => {
        let h = new Date().getHours();
        if (h > 12) {
            h -= 12;
        }
        let min = new Date().getMinutes();
        if (min > 0 && min < 30) {
            min = 30;
        } else {
            min = '00';
        }

        if (new Date().getHours() > 12) {
            return (`${h}:${min} PM`) 
        } else {
            return (`${h}:${min} AM`)
        }
    }

    const currentDate = () => {
        const arrOfDow = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; 
        let d = new Date().getDate();
        let m = new Date().getMonth();
        let dow = arrOfDow[new Date().getDay() - 1];

        return (`${dow}, ${m}/${d}`)
    }

    return ({
        reservation: {
            gameDate: currentDate(),
            gameStart: currentTime(),
            playersNim: 2,
            dndCampaignId: 1,
            gamePlacesId: state.entities.gamePlaces.id,
            playerId: state.session.currentPlayer
        }
    })
}

const mapDTP = dispatch => ({
    createReservation: () => dispatch(createReservation(reservation))
});

export default connect(mapSTP, mapDTP)(ReservationCreateForm);