import React from 'react';
import { useHistory } from 'react-router-dom';

const CanceledReservationView = (props) => {

    const history = useHistory();
    const {gamePlace} = history.location.aboutProps;

    return (
        <div>
            <div className='canceld-text'>
                your reservation has already been canceled
            </div>
            <div className='text-1'>
                You can still make a new reservation, and support {gamePlace.name}.
            </div>
        </div>
    );
};

export default CanceledReservationView;