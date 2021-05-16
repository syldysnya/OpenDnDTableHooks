import React from 'react';

class ChooseTime extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }

    render() {
        return (
            <div></div>
            
        )
    }
};

export default ChooseTime;

// let curTime = this.state.gameStart;
// let splitted = curTime.split(' ');
// let t = splitted[0].split(':');
// let h = parseInt(t[0]);
// let m = parseInt(t[1]);
// let btn1;
// let btn2;
// let btn3;
// let btn4;
// let timeOptions;

// if (m === 30) { // 8:30
//     btn1 = ((h - 1).toString() + ':00 ' + splitted[1])
//     btn2 = (splitted[0] + ':15 ' + splitted[1])
//     btn3 = (splitted[0] + ':45 ' + splitted[1])
//     btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
//     timeOptions = [btn1, btn2, curTime, btn3, btn4]
// } else { // 8:00
//     btn1 = ((h - 1).toString() + ':30 ' + splitted[1])
//     btn2 = ((h - 1).toString() + ':45 ' + splitted[1])
//     btn3 = (splitted[0] + ':15 ' + splitted[1])
//     btn4 = (splitted[0] + ':30 ' + splitted[1])
//     timeOptions = [btn1, btn2, curTime, btn3, btn4]
// }
// this.setState({
//     visibleTimes: true,
//     tOptions: timeOptions
// })
        
//     }