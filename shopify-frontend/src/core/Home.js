import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import { HomeCarousel } from '../components/HomeCarousel';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout
            caller={"home"}
            height={"30vh"}
            title="Shopify - Products that make your life easy..."
            description="Shop our new christmas deals from 40% to 60% off"
            className="container-fluid"
        >
            
            <Search />
            <h2 className="mb-4 p-2">New Arrivals</h2>
            <div class="card-deck">
                {productsByArrival.map((product, i) => (
                        <Card product={product} />
                ))}

            </div>

            <h2 className="mb-4">Best Sellers</h2>
          
            <div class="card-deck">
                {productsBySell.map((product, i) => (
                        <Card product={product} />
                ))}

            </div>
        </Layout>
    );
};

export default Home;
