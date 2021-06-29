import React from 'react';

const PictureModal = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.path}/>
        </div>
    );
};

export default PictureModal;