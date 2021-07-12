import React from 'react';

const Footer = () => {

    return (
        <div className='footer-background' id='footer'>
            <div className="footer-main">
                <div className="discover">
                    <span className="discover-title">
                        DISCOVER
                    </span>
                    <ul className="discover-links">
                        <li key='linkedin' >
                            <a href="https://www.linkedin.com/in/syldysvkhomushku/" target='_blank'><i className="fab fa-linkedin" ></i>LinkedIn</a>
                        </li>
                        <li key='angel' >
                            <a href="https://angel.co/u/syldysnya" target='_blank'><i className="fab fa-angellist"></i>AngelList</a>
                        </li>
                        <li key='github' >
                            <a href="https://github.com/syldysnya" target='_blank'><i className="fab fa-github"></i>Github</a>
                        </li>
                        <li key='portfolio' >
                            <a href="https://syldysnya.github.io/portfolio/" target='_blank'><i className="fas fa-dragon"></i>Personal Site</a>
                        </li>
                    </ul>
                </div>
                <div className="used-tech">
                    <span className="used-tech-title">
                        TECHNOLOGY USED
                    </span>
                    <ul className="tech-list">
                        <li key='react'>React Hooks</li>
                        <li key='ruby'>Ruby on Rails</li>
                        <li key='js'>JavaScript</li>
                        <li key='redux'>Redux</li>
                        <li key='postgresql'>PostgreSQL</li>
                        <li key='css'>Sass/CSS/HTML</li>
                        <li key='amazon'>Amazon S3</li>
                    </ul>
                </div> 
                <div className="about-me">
                    <span className="about-me-title">ABOUT ME</span>
                    <ul className="about-list">
                        <li key='1'>Bilingual (Russian and English)</li>
                        <li key='2'>Member of a chess club for 5 years</li>
                        <li key='3'>Play baseball and softball</li>
                        <li key='4'>3D-sculptor</li>
                        <li key='5'>Love DnD</li>
                    </ul>
                </div>
                <div className="more-projects">
                    <span className="projects-title">MORE PROJECTS</span>
                    <ul className="projects-list">
                        <li key='1-pr'>
                            <a href="https://state-of-flux.herokuapp.com/" target='_blank'>FLUX</a>
                        </li>
                        <li key='2-pr'>
                            <a href="https://syldysnya.github.io/JamesWebb/" target='_blank'>James Webb</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;