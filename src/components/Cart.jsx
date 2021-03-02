import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/userDucks';
import Navbar from '../components/Navbar';
import '../styles/cart-style.css';

const Cart = () => {

    var [cart, setCart] = useState([]);
    const [add, setAdd] = useState(false);

    const dispatch = useDispatch();

    const user = useSelector(store => store.googleUser.user);

    useEffect(() => {        
        window.scrollTo(0, 0);
        localStorage.getItem('cart') && (setCart([...JSON.parse(localStorage.getItem('cart'))]));
    }, []);

    var total = 0;
    cart.forEach(i => total += parseInt(i.price));
    var grandTotal = total;
    grandTotal += 19.22 + 25;

    add && (dispatch(addCart(cart)));

    const removeItem = (item) => {
        setAdd(true);
        cart = cart.filter(i => i.name !== item);
        setCart([...cart]);
    };

    const maskNumber = (price) => {
        const options = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options);
        return numberFormat.format(price);
    };
    
    return (
        <div>
            <Navbar cart={cart} />
            <div className="text-center">
                <div className="cart-background-title">
                    <h2>My Cart</h2>
                </div>
                <div className="container">
                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <table className="shadow-sm table text-left border">
                                    <thead className="thead-dark">
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
                                                    <td>{maskNumber(item.price)}</td>
                                                    <td><button className="btn btn-danger"
                                                        onClick={() => {
                                                            removeItem(item.name);
                                                        }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                        </svg></button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <hr />
                                <div className="mb-5">
                                    <table className="shadow-sm table border text-left">
                                        <tbody>
                                            <tr className="bg-secondary text-white">
                                                <th>User :</th>
                                                <td>
                                                    <img className="img-display-user mr-3" src={user.display} alt="" />
                                                    <strong>{user.displayName}</strong>
                                                </td>
                                            </tr>
                                            <tr className="bg-light text-dark">
                                                <th>Email :</th>
                                                <td>
                                                    <strong>{user.email}</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Grand Total :</td>
                                                <td>{maskNumber(total)}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping Charge :</td>
                                                <td>$25</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated Tax : </td>
                                                <td>$19.22</td>
                                            </tr>
                                            <tr className="bg-light text-dark">
                                                <th>Total :</th>
                                                {
                                                    total !== 0 ? (
                                                        <th>{maskNumber(grandTotal)}</th>
                                                    ) : (
                                                        <th>$0</th>
                                                    )
                                                }                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Cart);
