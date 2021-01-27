import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/metronome-style.css';

const Metronome = () => {

    const [seconds, setSeconds] = useState(1);
    const [play, setPlay] = useState(false);
    const [click] = useState(new Audio());
    const [sliderValue, setSliderValue] = useState(100);

    const result = 60000 / sliderValue;

    const stopMetro = () => {
        setPlay(false);
        setSeconds(1);
    };
    
    click.src = 'sound/Korg-N1R-Metronome-Click.wav';

    useEffect(() => {
        if (play) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
                click.play();
            }, result);
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [play, click, result]);

    seconds === 5 && setSeconds(1);

    return (
        <div className="cointainer mt-3 container-padding">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h1 className="mt-5 centerText">Metronome 4/4</h1>
                </div>
            </div>
            <div className="row justify-content-md-center mt-3">
                <div className="circle col-md-auto">
                    <div className="circle-two col-md-auto">
                        <h1 className="mt-2 centerText">{seconds}</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center mt-4">
                <div className="col-md-auto centerText">
                    <table>
                        <thead className="centerText">
                            <tr>
                                {
                                    seconds === 1 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="brown">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                                {
                                    seconds === 2 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="darkcyan">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                                {
                                    seconds === 3 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="darkcyan">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                                {
                                    seconds === 4 ? (<th><svg className="mr-4 ml-4" width="16" height="16" fill="darkcyan">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>) : (<th><svg className="mr-4 ml-4" width="16" height="16" fill="gainsboro">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg></th>)
                                }
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="mt-5">
                <div className="row justify-content-center">
                    <button
                        className="btn btn-outline-info mr-3 buttonMetronome"
                        onClick={() => setPlay(true)}>play</button>
                    <button
                        className="btn btn-outline-danger buttonMetronome"
                        onClick={() => stopMetro()}>stop</button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-auto slideBarWith">
                        <input type="range" className="form-control-range" min="0" max="200"
                            value={sliderValue} onChange={e => setSliderValue(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <div className="row mt-4 centerText">
                <div className="col-sm" />
                <div className="col-sm" />
                <div className="col-sm">
                    <button
                        className="btn btn-secondary buttonBpm"
                        onClick={() => setSliderValue(sliderValue - 1)}><h4>-</h4></button>
                </div>
                <div className="col-sm">
                    <h3 className="centerText">{sliderValue} BPM</h3>
                </div>
                <div className="col-sm">
                    <button
                        className="btn btn-secondary buttonBpm"
                        onClick={() => setSliderValue(sliderValue + 1)}><h4>+</h4></button>
                </div>
                <div className="col-sm" />
                <div className="col-sm" />
            </div>
            <div className="row justify-content-center mt-5">
                <NavLink type="button"
                    class="btn btn-outline-dark btn-lg buttonMetronomeLink"
                    to="/">Return to home</NavLink>
            </div>
        </div>
    )
}

export default Metronome
