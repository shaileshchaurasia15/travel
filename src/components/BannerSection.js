import React from 'react';
import './BannerSection.css';
import '../App.css'
import SearchWidgets from './Search_Widget/SearchWidgets';

const HeroSection=(props) =>{
    return (
        <div className="hero-container">
            <SearchWidgets/>
            
        </div>
    )
}

export default HeroSection
