import React, { useState } from 'react';

const NotificationMenu = () => {

    const [visible, setVisible] = useState(false);

    const handleDropdownMenu = e => {
        setVisible(!visible)
    }

    const hideMenu = e => {
        if (e.target.contains(e.relatedTarget)) {
            return null
        }
        
        setVisible(false)
    }

    return (
        <div className="not-profile-menu" tabIndex='2' onBlur={hideMenu}>
            <div className='not-menu'
                onClick={handleDropdownMenu}
                >
                <i className="far fa-bell"></i>
                {visible && (<div className="not-menu-box" onMouseLeave={hideMenu}>
                    <div className="not-title">
                        About this project
                    </div>
                    <div className="not-box">
                        <p>
                            <span> Hello, my name is
                            <span className="red">  Syldys Khomushku</span>.
                            And I am a software engineer.</span>
                        </p>
                        <p>
                            <span>OpenDnDTable is an online service for booking table for DnD sessions.
                            It was inspired by
                            <a href="https://www.opentable.com/">  OpenTable</a> website.</span>
                        </p>
                        <p>
                            <span>
                                This project uses
                                <span className="blue">  Redux</span> and
                                <span className="blue">  React Hooks</span>,
                                <span className="blue">  CSS</span> and
                                <span className="blue">  SASS</span> on the frontend, and 
                                <span className="blue">  Rails/PostgreSQL</span> on the backend.
                            </span>
                        </p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default NotificationMenu;