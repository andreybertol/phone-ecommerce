import React, {Component} from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        // below is a case of conditional rendering
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name={"your"} title={"cart"}></Title>
                                    <CartColumns/>
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;