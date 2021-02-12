import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDaddarioStrings, getDRStrings, getErnieBallStrings, getFenderBallStrings } from '../redux/stringsDucks';

import '../styles/strings-style.css';
import '../styles/loading-animation.css';

const BassStrings = (props) => {

    window.scrollTo(0, 0);

    const [modelView, setModelView] = useState(props.location.state.view);
    const [modelImg, setModelImg] = useState(props.location.state.stringbass.img);
    const [modelTitle, setModelTitle] = useState(props.location.state.stringbass.title);
    const [modelInfo, setModelInfo] = useState(props.location.state.stringbass.info);
    const [modelPrice, setModelPrice] = useState(props.location.state.stringbass.price);
    const dispatch = useDispatch();

    useEffect(() => {
        const getBassStringsRedux = () => {
            dispatch(getDaddarioStrings());
            dispatch(getDRStrings());
            dispatch(getErnieBallStrings());
            dispatch(getFenderBallStrings());
        }
        getBassStringsRedux();
    }, [dispatch]);

    const ddrio_strings = useSelector(store => store.stringModels.ddrio);
    const dr_strings = useSelector(store => store.stringModels.dr);
    const ernie_ball_strings = useSelector(store => store.stringModels.ernie);
    const fender_strings = useSelector(store => store.stringModels.fender);
    // const loading = useSelector(store => store.stringModels.loading);

    const info = (obj) => {
        const { img, title, info, price } = obj;
        setModelView(true);
        setModelImg(img)
        setModelTitle(title)
        setModelInfo(info)
        setModelPrice(price)
    }

    return (
        <div>
            <div className="text-center">
                <div className="backgroundModeltitle">
                    <h1 className="">Bass Guitar Strings</h1>
                </div>
                <div className="container">
                    {
                        modelView && (
                            <div className="border">
                                <div className="row justify-content-center p-4">
                                    <div className="col text-center">
                                        <img className="" src={modelImg} alt="" />
                                    </div>
                                    <div className="col text-left">
                                        <h4>{modelTitle}</h4>
                                        <p>{modelInfo}</p>
                                        <div className="row col">
                                            <h2 className="mr-5 mt-3">Price: ${modelPrice}</h2>
                                            <button className="mt-3 mb-4 btn btn-warning btn-lg"><strong>Add to cart</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4 ml-2" viewBox="0 1 16 16">
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button type="button"
                                    className="btn btn-dark buttonImg mb-3"
                                    onClick={() => setModelView(false)}>Close</button>
                            </div>
                        )
                    }
                    <div className="row justify-content-center">
                        {
                            ddrio_strings.map(item => (
                                <div className="col p-5" key={item.exl160}>
                                    <img type="button" className="imgStrings" src={item.exl160.img} alt=""
                                        onClick={() => info(item.exl160)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.exl160.title}</p>
                                    <h4>${item.exl160.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            ddrio_strings.map(item => (
                                <div className="col p-5" key={item.exl165}>
                                    <img type="button" className="imgStrings" src={item.exl165.img} alt=""
                                        onClick={() => info(item.exl165)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.exl165.title}</p>
                                    <h4>${item.exl165.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            ddrio_strings.map(item => (
                                <div className="col p-5" key={item.exl170}>
                                    <img type="button" className="imgStrings" src={item.exl170.img} alt=""
                                        onClick={() => info(item.exl170)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.exl170.title}</p>
                                    <h4>${item.exl170.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            ddrio_strings.map(item => (
                                <div className="col p-5" key={item.exl230}>
                                    <img type="button" className="imgStrings" src={item.exl230.img} alt=""
                                        onClick={() => info(item.exl230)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.exl230.title}</p>
                                    <h4>${item.exl230.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row justify-content-center">
                        {
                            dr_strings.map(item => (
                                <div className="col p-5" key={item.drblackb}>
                                    <img type="button" className="imgStrings" src={item.drblackb.img} alt=""
                                        onClick={() => info(item.drblackb)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.drblackb.title}</p>
                                    <h4>${item.drblackb.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            dr_strings.map(item => (
                                <div className="col p-5" key={item.drhibeamm}>
                                    <img type="button" className="imgStrings" src={item.drhibeamm.img} alt=""
                                        onClick={() => info(item.drhibeamm)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.drhibeamm.title}</p>
                                    <h4>$${item.drhibeamm.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            dr_strings.map(item => (
                                <div className="col p-5" key={item.drhibeamxl}>
                                    <img type="button" className="imgStrings" src={item.drhibeamxl.img} alt=""
                                        onClick={() => info(item.drhibeamxl)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.drhibeamxl.title}</p>
                                    <h4>$${item.drhibeamxl.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            dr_strings.map(item => (
                                <div className="col p-5" key={item.drlorider}>
                                    <img type="button" className="imgStrings" src={item.drlorider.img} alt=""
                                        onClick={() => info(item.drlorider)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.drlorider.title}</p>
                                    <h4>$${item.drlorider.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row justify-content-center">
                        {
                            ernie_ball_strings.map(item => (
                                <div className="col p-5" key={item.eb2813}>
                                    <img type="button" className="imgStrings" src={item.eb2813.img} alt=""
                                        onClick={() => info(item.eb2813)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.eb2813.title}</p>
                                    <h4>${item.eb2813.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            ernie_ball_strings.map(item => (
                                <div className="col p-5" key={item.eb2832}>
                                    <img type="button" className="imgStrings" src={item.eb2832.img} alt=""
                                        onClick={() => info(item.eb2832)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.eb2832.title}</p>
                                    <h4>$${item.eb2832.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            ernie_ball_strings.map(item => (
                                <div className="col p-5" key={item.eb2833}>
                                    <img type="button" className="imgStrings" src={item.eb2833.img} alt=""
                                        onClick={() => info(item.eb2833)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.eb2833.title}</p>
                                    <h4>$${item.eb2833.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            ernie_ball_strings.map(item => (
                                <div className="col p-5" key={item.eb2834}>
                                    <img type="button" className="imgStrings" src={item.eb2834.img} alt=""
                                        onClick={() => info(item.eb2834)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.eb2834.title}</p>
                                    <h4>$${item.eb2834.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row justify-content-center">
                        {
                            fender_strings.map(item => (
                                <div className="col p-5" key={item.fender5250}>
                                    <img type="button" className="imgStrings" src={item.fender5250.img} alt=""
                                        onClick={() => info(item.fender5250)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.fender5250.title}</p>
                                    <h4>${item.fender5250.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            fender_strings.map(item => (
                                <div className="col p-5" key={item.fender72505}>
                                    <img type="button" className="imgStrings" src={item.fender72505.img} alt=""
                                        onClick={() => info(item.fender72505)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.fender72505.title}</p>
                                    <h4>$${item.fender72505.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            fender_strings.map(item => (
                                <div className="col p-5" key={item.fender7250}>
                                    <img type="button" className="imgStrings" src={item.fender7250.img} alt=""
                                        onClick={() => info(item.fender7250)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.fender7250.title}</p>
                                    <h4>$${item.fender7250.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                        {
                            fender_strings.map(item => (
                                <div className="col p-5" key={item.fender9050}>
                                    <img type="button" className="imgStrings" src={item.fender9050.img} alt=""
                                        onClick={() => info(item.fender9050)} />
                                    <p className="text-truncate" style={{ width: '11rem', margin: 'auto' }}>{item.fender9050.title}</p>
                                    <h4>$${item.fender9050.price}</h4>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => info(item.exl160)}>Add to Cart</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BassStrings
