import React from 'react';
import LoginContainer from '../session/login_container'

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        if (!this.props.modal) return null;

        let modalForm;

        switch (this.props.modal) {
            case 'login':
                modalForm = <LoginContainer />
                break
            default:
                return null
        }
        
        return (
            <div>
                <div className='modal-background' onClick={this.props.closeModal}>
                    <div className='modal-content' onClick={e => e.stopPropagation()}>
                        { modalForm }
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;