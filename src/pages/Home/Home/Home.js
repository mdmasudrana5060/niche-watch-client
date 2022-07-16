import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from "../../Shared/Navigation/Navigation"
import About from '../About/About';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Watches from '../Watches/Watches';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Watches></Watches>
            <Reviews></Reviews>
            <Footer></Footer>


        </div>
    );
};

export default Home;