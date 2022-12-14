import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';
import { sendEmail } from '../service/EmailService';
import { addToCartTemplateId } from '../utils/utils';

const Cart = () => {
    const [sentEmail, setSentEmail] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsLength, setItemsLength] = useState([]);

    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
        setItemsLength(getCart().length);
    }, [run]);

    useEffect(() => {

        if (items.length === 3) {
            setTimeout(sendEmailToUser, 5000);
        }
        
    }, [itemsLength]);

    const sendEmailToUser = () => {
        console.log('5 seconds completed sending email to user');

        let sum  = 0;
        items.forEach((item) => sum+=(item.price*item.count) )
        const itemDetails = {
            "item_1_name": items[0].name || "",
            "item_2_name": items[1].name || "",
            "item_3_name": items[2].name || "",
            "item_1_price": items[0].price || 0,
            "item_2_price": items[1].price || 0,
            "item_3_price": items[2].price || 0,
            "item_1_quantity": items[0].count || 0,
            "item_2_quantity": items[1].count || 0,
            "item_3_quantity": items[2].count || 0,
            "total_price": sum

        };

        sendEmail(itemDetails, addToCartTemplateId);

    };



    const showItems = items => {
        


        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                <div className="card-deck">
                {
                items.map((product, i) => (
                    
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))
                }
                </div>
               
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>

                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
