import React from 'react';
import Annoucement from '../../Components/Annoucement/Annoucement';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';

// import style
import "../Home/home.scss";

const Home = () => {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Slider/>
        </div>
    );
};


export default React.memo(Home);