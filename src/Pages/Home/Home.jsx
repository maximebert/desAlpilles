import React from 'react';
import Annoucement from '../../Components/Annoucement/Annoucement';
import Categories from '../../Components/Categories/Categories';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Slider from '../../Components/Slider/Slider';

// import style
import "../Home/home.scss";

const Home = () => {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Newsletter />
            <Footer />
        </div>
    );
};


export default React.memo(Home);