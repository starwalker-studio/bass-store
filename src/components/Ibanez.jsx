import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getIbanezModels } from '../redux/bassModelsDucks';

import '../styles/bassmodels-style.css';

const Ibanez = () => {

    const [num, setNum] = useState(1);

    const dispatch = useDispatch();
    useEffect(() => {
        const getIbanezRedux = () => {
            dispatch(getIbanezModels(num));
        }
        getIbanezRedux();
    }, [num, dispatch])

    const models = useSelector(store => store.bassModels.resutls);
    const list = useSelector(store => store.bassModels.list);
    const loading = useSelector(store => store.bassModels.loading);
    
    return models ? (
        <div className="text-center">
            <div className="backgroundModeltitle">
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
                                            className="btn btn-dark buttonImg mr-2"
                                            onClick={() => setNum(num - 1)}>Previous</button>
                                    )
                                }
                                <button
                                    className="btn btn-danger buttonImg mr-2"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                  </svg></button>
                                <button
                                    className="btn btn-warning buttonImg mr-2"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                  </svg></button>
                                {
                                    num !== list && (
                                        <button
                                            className="btn btn-dark buttonImg mr-2"
                                            onClick={() => setNum(num + 1)}>Next</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="gooey">
                            <span className="dot"></span>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )
            }
        </div>
    ) : null
}

export default Ibanez
