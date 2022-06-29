import React from 'react';
import Annoucement from '../../Components/Annoucement/Annoucement';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';

// import style
import "../Home/home.scss";

const Custom = () => {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Newsletter />
            <Footer />
        </div>
    );
};


export default React.memo(Custom);