import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getModels } from '../redux/bassModelsDucks';

const Warwick = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const getWarwickModels = () => {
            dispatch(getModels());
        }
        getWarwickModels();
    }, [dispatch])

    const models = useSelector(store => store.warwickModels.resutls);

    console.log(models);

    return models ? (
        <div className="container mt-5">
            <h1>Test</h1>
            <div>
                <img src={models} alt=""/>
            </div>
        </div>
    ) : null
}

export default Warwick
