import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import '../styles/cart-style.css';

const Cart = () => {

    const cart = useSelector(store => store.googleUser.cart);

    console.log(cart);

    return (
        <div className="text-center">
            <div className="user-background-title">
                <h1 className="">My Cart</h1>
            </div>
            <div className="container">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-sm"></div>
                        <div className="col-8">
                            <table className="table table-sm text-left border">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col-sm"></th>
                                        <th scope="col-sm">Article</th>
                                        <th scope="col-sm">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, k) => (
                                            <tr key={k}>
                                                <td><img className="img-table-cart" src={item.img} alt="" /></td>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td><button className="btn btn-danger"
                                                    onClick={() => {
                                                        console.log(item.name)
                                                    }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg></button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div>
                                <table className="table border">
                                    <tbody>
                                        <tr>
                                            <td>Grand Total :</td>
                                            <td id="total-car"></td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Charge :</td>
                                            <td>$25</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Tax : </td>
                                            <td>$19.22</td>
                                        </tr>
                                        <tr>
                                            <th>Total :</th>
                                            <th id="total"></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
