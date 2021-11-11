import React from 'react';
import ProductSection from '../Home/ProductSection/ProductSection';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ProductPage = () => {
    return (
        <>
            <Navigation></Navigation>
            <ProductSection limit={'all'}></ProductSection>
            <br />
            <br />
            <Footer></Footer>
        </>
    );
};

export default ProductPage;