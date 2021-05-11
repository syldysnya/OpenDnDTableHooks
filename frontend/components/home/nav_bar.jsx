import React from 'react';
import { showModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        // debugger
        return (
            // <React.Fragment>
                <div className='auth_button'>
                    <button className='button-login' onClick={() => showModal('login')}>
                        Sign In
                    </button>
                </div>
            // </React.Fragment>
        )
    }
};

export default NavBar;

