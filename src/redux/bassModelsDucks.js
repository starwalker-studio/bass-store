import axios from 'axios';
import { storage } from '../firebase';

// Constants
const WARWICK_FOLDER = 'warwick';
const IBANEZ_FOLDER = 'ibanez';
const EPIPHONE_FOLDER = 'epiphone';

const initData = {
    loading: false,
    resutls: [],
    list: 0
}

// Types
const LOADING = 'LOADING';
const GET_WARWICK_MODELS = 'GET_WARWICK_MODELS';
const GET_WARWICK_MODELS_LOCAL = 'GET_WARWICK_MODELS_LOCAL';
const GET_IBANEZ_MODELS = 'GET_IBANEZ_MODELS';
const GET_IBANEZ_MODELS_LOCAL = 'GET_IBANEZ_MODELS_LOCAL';
const GET_EPIPHONE_MODELS = 'GET_EPIPHONE_MODELS';
const GET_EPIPHONE_MODELS_LOCAL = 'GET_EPIPHONE_MODELS_LOCAL';

// Reducer
export default function modelReducer(state = initData, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.loading };
        case GET_WARWICK_MODELS:
            return { ...state, resutls: action.payload, list: action.list, loading: action.loading };
        case GET_WARWICK_MODELS_LOCAL:
            return { ...state, resutls: action.payload, list: action.list };
        case GET_IBANEZ_MODELS:
            return { ...state, resutls: action.payload, list: action.list, loading: action.loading };
        case GET_IBANEZ_MODELS_LOCAL:
            return { ...state, resutls: action.payload, list: action.list };
        case GET_EPIPHONE_MODELS:
            return { ...state, resutls: action.payload, list: action.list, loading: action.loading };
        case GET_EPIPHONE_MODELS_LOCAL:
            return { ...state, resutls: action.payload, list: action.list };
        default:
            return state;
    }
}
// Actions

// WARWICK
export const getWarwickModels = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(WARWICK_FOLDER).listAll();
    if (localStorage.getItem(`w-edited-${num}.png`)) {
        // consuming from localstorage 
        dispatch({
            type: GET_WARWICK_MODELS_LOCAL,
            payload: JSON.parse(localStorage.getItem(`w-edited-${num}.png`)),
            list: listItems.items.length
        })
        return
    }
    try {
        // consuming from firestore storage
        dispatch({
            type: LOADING,
            loading: true
        })
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(WARWICK_FOLDER).child(`w-edited-${num}.png`).getDownloadURL();
            dispatch({
                type: GET_WARWICK_MODELS,
                payload: imgSrc,
                list: listItems.items.length,
                loading: false
            })
            localStorage.setItem(`w-edited-${num}.png`, JSON.stringify(imgSrc));
        }
    } catch (error) {
        console.log(error);
    }
}

// IBANEZ
export const getIbanezModels = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(IBANEZ_FOLDER).listAll();
    if (localStorage.getItem(`i-edited-${num}.jpg`)) {
        // consuming from localstorage 
        dispatch({
            type: GET_IBANEZ_MODELS_LOCAL,
            payload: JSON.parse(localStorage.getItem(`i-edited-${num}.jpg`)),
            list: listItems.items.length
        })
        return
    }
    try {
        // consuming from firestore storage
        dispatch({
            type: LOADING,
            loading: true
        })
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(IBANEZ_FOLDER).child(`i-edited-${num}.jpg`).getDownloadURL();
            dispatch({
                type: GET_IBANEZ_MODELS,
                payload: imgSrc,
                list: listItems.items.length,
                loading: false
            })
            localStorage.setItem(`i-edited-${num}.jpg`, JSON.stringify(imgSrc));
        }
    } catch (error) {
        console.log(error);
    }
}

// EPIPHONE
export const getEpiphoneModels = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(EPIPHONE_FOLDER).listAll();
    if (localStorage.getItem(`e-edited-${num}.png`)) {
        // consuming from localstorage 
        dispatch({
            type: GET_EPIPHONE_MODELS_LOCAL,
            payload: JSON.parse(localStorage.getItem(`e-edited-${num}.png`)),
            list: listItems.items.length
        })
        return
    }
    try {
        // consuming from firestore storage
        dispatch({
            type: LOADING,
            loading: true
        })
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(EPIPHONE_FOLDER).child(`e-edited-${num}.png`).getDownloadURL();
            dispatch({
                type: GET_EPIPHONE_MODELS,
                payload: imgSrc,
                list: listItems.items.length,
                loading: false
            })
            localStorage.setItem(`e-edited-${num}.png`, JSON.stringify(imgSrc));
        }
    } catch (error) {
        console.log(error);
    }
}