import React from 'react';
import { NavLink } from 'react-router-dom';
// import Calendar from 'react-calendar'

// const RES_TIME = [
//     "12:00 AM", "12:30 AM",
//     "1:00 AM", "1:30 AM",
//     "2:00 AM", "2:30 AM",
//     "3:00 AM", "3:30 AM",
//     "4:00 AM", "4:30 AM",
//     "5:00 AM", "5:30 AM",
//     "6:00 AM", "6:30 AM",
//     "7:00 AM", "7:30 AM",
//     "8:00 AM", "8:30 AM",
//     "9:00 AM", "9:30 AM",
//     "10:00 AM", "10:30 AM",
//     "11:00 AM", "11:30 AM",
//     "12:00 PM", "12:30 PM",
//     "1:00 PM", "1:30 PM",
//     "2:00 PM", "2:30 PM",
//     "3:00 PM", "3:30 PM",
//     "4:00 PM", "4:30 PM",
//     "5:00 PM", "5:30 PM",
//     "6:00 PM", "6:30 PM",
//     "7:00 PM", "7:30 PM",
//     "8:00 PM", "8:30 PM",
//     "9:00 PM", "9:30 PM",
//     "10:00 PM", "10:30 PM",
//     "11:00 PM", "11:30 PM"
// ];

// class EditForm extends React.Component {
//     constructor(props) {
//         super(props); 
//         debugger
//         // this.state = props.reservations;
        
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchAllReservations();
//     }

//     handleSubmit(e) {
//         this.props.editReservation(this.state);
//     }

//     handleClick(e) {
//         this.setState({ gameStart: e.currentTarget.innerHTML })
//     }

//     update(field) {
//         return e => this.setState({ [field]: e.target.value })
//     };

//     TimePick = () => {

//         return (
//             <select onChange={this.update('gameStart')}
//                 defaultValue='8:00 PM'>
//                 {RES_TIME.map(t => {
//                     return (
//                         <option key={t} value={t}>{t}</option>
//                     )
//                 })}
//             </select>
//         )
//     }

//     timeOptions = (field) => {

//         let curTime = field;
//         let splitted = curTime.split(' ');
//         let t = splitted[0].split(':');
//         let h = parseInt(t[0]);
//         let m = parseInt(t[1]);
//         let btn1;
//         let btn2;
//         let btn3;
//         let btn4;
//         let timeOptions;

//         if (m === 30) { // 8:30
//             btn1 = ((h - 1).toString() + ':00 ' + splitted[1])
//             btn2 = (splitted[0] + ':15 ' + splitted[1])
//             btn3 = (splitted[0] + ':45 ' + splitted[1])
//             btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
//             timeOptions = [btn1, btn2, curTime, btn3, btn4]
//         } else { // 8:00
//             btn1 = ((h - 1).toString() + ':30 ' + splitted[1])
//             btn2 = ((h - 1).toString() + ':45 ' + splitted[1])
//             btn3 = (h.toString() + ':15 ' + splitted[1])
//             btn4 = (h.toString() + ':30 ' + splitted[1])
//             timeOptions = [btn1, btn2, curTime, btn3, btn4]
//         }

//         const mapped = timeOptions.map((t, i) => {
//             return (
//                 <li key={`btn-time-${i}`}>
//                     <NavLink onClick={this.handleClick}
//                         className='auth-button' to={{
//                             pathname: '/booking/details',
//                             aboutProps: {
//                                 reservation: this.props.reservations,
//                                 gameStart: t
//                             }
//                         }} exact>
//                         {t}
//                     </NavLink>
//                 </li>
//             )
//         })

//         return (
//             <div className='time-buttons'>
//                 {mapped}
//             </div>
//         )
//     }

//     render() {

//         if (!this.props.reservations) return null;
//         const reservation = this.props.reservations;

//         return (
//             <div className='edit-res-box'>
//                 <div className='edit-input'>
//                     <select defaultValue={reservation.playersNum}
//                         onChange={this.update('playersNum')}>
//                         <option key='1' value='1'>1 person</option>
//                         <option key='2' value='2'>2 people</option>
//                         <option key='3' value='3'>3 people</option>
//                         <option key='4' value='4'>4 people</option>
//                         <option key='5' value='5'>5 people</option>
//                     </select>
//                     {/* <select defaultValue={reservation.gameDate}>
//                         <option value="1"><Calendar /></option>
//                     </select> */}
//                     <label className='t'>
//                         {this.TimePick()}
//                     </label>
//                     <button className='auth-button' onClick={this.handleSubmit}>
//                         Find a Table
//                     </button>
//                     {this.timeOptions(reservation.gameStart)}
//                 </div>
//             </div>
//         )
//     }
// };

// export default EditForm;

