import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApointmentBanner from '../ServiceBanner/ServiceBanner';
import Banner from '../Banner/Banner';
import Gelary from '../Gelary/Gelary';
import Services from '../Services/Services';
import TestMonial from '../TestMonial/TestMonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Gelary></Gelary>
            <TestMonial></TestMonial>
            <ApointmentBanner></ApointmentBanner>
        </div>
    );
};

export default Home;