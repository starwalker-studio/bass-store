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
                            <h3>Ibañez K-5</h3>
                            <hr />
                            <div className="row justify-content-center text-left mt-3">
                                <div className="col-sm">
                                    <p>A Vari-mid EQ with sweepable midrange allows you to dial in various bass sound, including Fieldy's preference of no midrange at all.</p>
                                </div>
                                <div className="col-sm">
                                    <table className="table table-borderless table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm text-center">
                                    <div className="p-3 mb-2 bg-light text-dark border">
                                        <h3>Price: <strong>$1200</strong></h3>
                                        <button className="btn btn-warning btn-lg"><strong>Add to cart</strong>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4 ml-2" viewBox="0 1 16 16">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                            </svg></button>
                                    </div>
                                </div>
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
