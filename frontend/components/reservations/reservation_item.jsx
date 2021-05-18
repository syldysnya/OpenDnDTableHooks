import React from 'react';
import EditForm from './edit_form';
import EditFormContainer from './edit_form_container';
import ReservationViewFormConf from './reservation_view_form_conf';

class ReservationItem extends React.Component {

    render() {
        return (
            <div>
                <ReservationViewFormConf />
                <EditFormContainer />
            </div>
        )
    }
};

export default ReservationItem;