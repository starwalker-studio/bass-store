import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getIbanezModels } from '../redux/bassModelsDucks';

import { getDaddarioStrings, getDRStrings, getErnieBallStrings, getFenderBallStrings } from '../redux/stringsDucks';
import { addCart } from '../redux/userDucks';

import Navbar from '../components/Navbar';

import '../styles/bassmodels-style.css';
import '../styles/loading-animation.css';

import Swal from 'sweetalert2';

const Ibanez = () => {

    const [num, setNum] = useState(1);
    const [cart, setCart] = useState([]);
    const [add, setAdd] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.getItem('cart') && (setCart([...JSON.parse(localStorage.getItem('cart'))]));
        const getIbanezRedux = () => {
            dispatch(getIbanezModels(num));
        }
        const getBassStringsRedux = () => {
            dispatch(getDaddarioStrings());
            dispatch(getDRStrings());
            dispatch(getErnieBallStrings());
            dispatch(getFenderBallStrings());
        }
        getBassStringsRedux();
        getIbanezRedux();
    }, [num, dispatch])

    const models = useSelector(store => store.bassModels.resutls);
    const list = useSelector(store => store.bassModels.list);
    const loading = useSelector(store => store.bassModels.loading);
    const model = useSelector(store => store.bassModels.model);

    const ddrio_strings = useSelector(store => store.stringModels.ddrio);
    const dr_strings = useSelector(store => store.stringModels.dr);
    const ernie_ball_strings = useSelector(store => store.stringModels.ernie);
    const fender_strings = useSelector(store => store.stringModels.fender);

    const active = useSelector(store => store.googleUser.active);

    add && (dispatch(addCart(cart)));

    return models ? (
        <div>
            <Navbar cart={cart} />
            <div className="text-center">
                <div className="backgroundBassModeltitle">
                    <h1 className="">Ibañez Bass Guitars</h1>
                </div>
                {
                    !loading ? (
                        <div className="container">
                            <div className="row justify-content-center">
                                <img className="img-fluid" src={models} alt="" />
                            </div>
                            <div className="row justify-content-center mt-3">
                                <div className="col-sm">
                                    {
                                        num !== 1 && (
                                            <button
                                                className="btn btn-dark buttonImg mr-4"
                                                onClick={() => setNum(num - 1)}>Previous</button>
                                        )
                                    }

                                    {
                                        num !== list && (
                                            <button
                                                className="btn btn-dark buttonImg"
                                                onClick={() => setNum(num + 1)}>Next</button>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="container mt-4">
                                <h3>{model.name}</h3>
                                <hr />
                                <div className="col-sm">
                                    <blockquote className="blockquote">
                                        <p className="font-italic">{model.description}</p>
                                    </blockquote>
                                </div>
                                <div className="row justify-content-center text-left mt-3">
                                    <div className="col-sm">
                                        <table className="table table-sm">
                                            <tbody>
                                                <tr>
                                                    <th>neck type</th>
                                                    <td>{model.neckType}</td>
                                                </tr>
                                                <tr>
                                                    <th>top/back/body</th>
                                                    <td>{model.topbackbody}</td>
                                                </tr>
                                                <tr>
                                                    <th>fret</th>
                                                    <td>{model.fret}</td>
                                                </tr>
                                                <tr>
                                                    <th>number of frets</th>
                                                    <td>{model.numfrets}</td>
                                                </tr>
                                                <tr>
                                                    <th>EQ</th>
                                                    <td>{model.equaliser}</td>
                                                </tr>
                                                <tr>
                                                    <th>string gauge</th>
                                                    <td>{model.sgauge}</td>
                                                </tr>
                                                <tr>
                                                    <th>hardware color</th>
                                                    <td>{model.color}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-sm text-center">
                                        <div className="p-4 mb-2 bg-light text-dark border">
                                            <h3>Price: <strong>${model.price}</strong></h3>
                                            <button className="mt-3 mb-2 btn btn-warning btn-lg"
                                                onClick={() => {
                                                    if (active) {
                                                        setCart([...cart, { name: model.name, price: model.price, img: models }]);
                                                        setAdd(true);
                                                    } else {
                                                        Swal.fire('Sign in to add items!');
                                                    }
                                                }}><strong>Add to cart</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4 ml-2" viewBox="0 1 16 16">
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h2>Bass Guitar Strings</h2>
                            <div className="row justify-content-center">
                                {
                                    fender_strings.map(item => (
                                        <div className="col p-5" key={item.fender7250}>
                                            <NavLink to={{ pathname: "/strings", state: { view: true, stringbass: item.fender7250 } }}>
                                                <img className="imgStrings" src={item.fender7250.img} alt="" />
                                            </NavLink>
                                            <h4 className="mt-2">${item.fender7250.price}</h4>
                                            <button className="btn btn-warning"
                                                onClick={() => {
                                                    if (active) {
                                                        setCart([...cart, {
                                                            name: item.fender7250.title, price: item.fender7250.price, img: item.fender7250.img
                                                        }]);
                                                        setAdd(true);
                                                    } else {
                                                        Swal.fire('Sign in to add items!');
                                                    }
                                                }}>Add to Cart</button>
                                        </div>
                                    ))
                                }
                                {
                                    ddrio_strings.map(item => (
                                        <div className="col p-5" key={item.exl165}>
                                            <NavLink to={{ pathname: "/strings", state: { view: true, stringbass: item.exl165 } }}>
                                                <img className="imgStrings" src={item.exl165.img} alt="" />
                                            </NavLink>
                                            <h4 className="mt-2">${item.exl165.price}</h4>
                                            <button className="btn btn-warning"
                                                onClick={() => {
                                                    if (active) {
                                                        setCart([...cart, {
                                                            name: item.exl165.title, price: item.exl165.price, img: item.exl165.img
                                                        }]);
                                                        setAdd(true);
                                                    } else {
                                                        Swal.fire('Sign in to add items!');
                                                    }
                                                }}>Add to Cart</button>
                                        </div>
                                    ))
                                }
                                {
                                    dr_strings.map(item => (
                                        <div className="col p-5" key={item.drhibeamxl}>
                                            <NavLink to={{ pathname: "/strings", state: { view: true, stringbass: item.drhibeamxl } }}>
                                                <img className="imgStrings" src={item.drhibeamxl.img} alt="" />
                                            </NavLink>
                                            <h4 className="mt-2">${item.drhibeamxl.price}</h4>
                                            <button className="btn btn-warning"
                                                onClick={() => {
                                                    if (active) {
                                                        setCart([...cart, {
                                                            name: item.drhibeamxl.title, price: item.drhibeamxl.price, img: item.drhibeamxl.img
                                                        }]);
                                                        setAdd(true);
                                                    } else {
                                                        Swal.fire('Sign in to add items!');
                                                    }
                                                }}>Add to Cart</button>
                                        </div>
                                    ))
                                }
                                {
                                    ernie_ball_strings.map(item => (
                                        <div className="col p-5" key={item.eb2834}>
                                            <NavLink to={{ pathname: "/strings", state: { view: true, stringbass: item.eb2834 } }}>
                                                <img className="imgStrings" src={item.eb2834.img} alt="" />
                                            </NavLink>
                                            <h4 className="mt-2">${item.eb2834.price}</h4>
                                            <button className="btn btn-warning"
                                                onClick={() => {
                                                    if (active) {
                                                        setCart([...cart, {
                                                            name: item.eb2834.title, price: item.eb2834.price, img: item.eb2834.img
                                                        }]);
                                                        setAdd(true);
                                                    } else {
                                                        Swal.fire('Sign in to add items!');
                                                    }
                                                }}>Add to Cart</button>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr />
                            <div className="mb-4">
                                <NavLink to="/warwick">
                                    <button type="button" className="btn btn-light border buttonImg mr-2">Warwick</button>
                                </NavLink>
                                <NavLink to="/">
                                    <button type="button" className="btn btn-light border buttonImg mr-2" >Home</button>
                                </NavLink>
                                <NavLink to="/epiphone">
                                    <button type="button" className="btn btn-light border buttonImg mr-2" >Epiphone</button>
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                            <div className="spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        )
                }
            </div>
        </div>
    ) : null
}

export default Ibanez
