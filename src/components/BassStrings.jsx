import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDaddarioStrings } from '../redux/stringsDucks';

import '../styles/strings-style.css';

const BassStrings = () => {

    const dispacth = useDispatch();

    useEffect(() => {
        const getBassStringsRedux = () => {
            dispacth(getDaddarioStrings());
        }
        getBassStringsRedux();
    }, [dispacth]);

    const ddriofiles = useSelector(store => store.stringModels.imgResult);

    const ddrioinfo = "D'Addario EXL170 Regular Light 45-100";

    const info = (img, strInfo) => {
        console.log(img);
        console.log(strInfo);
    }

    console.log(ddriofiles[0]);

    return (
        <div>
            <div className="text-center">
                <div className="backgroundModeltitle">
                    <h1 className="">Bass Guitar Strings</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[0]} alt="" />
                            <button className="btn btn-dark" onClick={() => info(ddriofiles[0], ddrioinfo)}></button>
                            <p>{ddrioinfo}</p>
                            <h4>$250</h4>
                        </div>
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[1]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[2]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[3]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[0]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[1]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[2]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                        <div className="col p-5">
                            <img className="imgStrings" src={ddriofiles[3]} alt="" />
                            <p>D'Addario EXL170 Regular Light 45-100</p>
                            <h4>$250</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BassStrings
