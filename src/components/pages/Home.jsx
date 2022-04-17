import React from 'react';

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import "../../assets/styles.css";

  

const Home = () => {
    return (
    <React.Fragment>
        {/** Hero of Section */}
        <section id="hero">
            <div className='left-content'>
                <div className='content-copy'>
                    <h3>BRAND, DEV, ECOM, MARKETING</h3>
                    <h2>
                        We Unleash <br/> <span className='colouredTitle'>business potential</span>
                    </h2>
                    <p>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
                    <div className='anchor-container'>
                        <a href="#">Let's talk</a>
                    </div>
                    </div>
                </div>
                <div className='right-content hero-right-content'>

                </div>
        </section>
        {/** Capable of Section */}
        <section id="capableof">
            <div className='left-content'>
                <div className='content-copy'>
                    <h2> What are <br/> <span className='colouredTitle'>we capable of</span> </h2>  
                    <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>  
                    <div className='anchor-container'>
                    <a href="#">Our process</a>
                    </div>
       
                </div>
            </div>
            <div className='right-content'>
                <div className='content-copy'>
                    <div className="catCol">
                        <h4>BRAND</h4>
                        <a>Brand Strategy<FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                        <a>Logo &#38; Name <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                        <a>Identity &#38; Collateral <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                    </div>
                    <div className="catCol">
                        <h4>MARKETING</h4>
                        <a>Digital <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                        <a>Market Research <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                    </div>
                    <div className="catCol">
                        <h4>DEVELOPMENT</h4>
                        <a>eCommerce <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                        <a>Web Development <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                        <a>Mobile Apps <FontAwesomeIcon className="arrow-hover-icon" icon={faCircleChevronRight} /></a>
                    </div>
                    
                </div>
            </div>

        </section>
    </React.Fragment>
    );
}

export default Home;