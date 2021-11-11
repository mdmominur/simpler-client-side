import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ProductSection from '../ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductSection limit={8}></ProductSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;