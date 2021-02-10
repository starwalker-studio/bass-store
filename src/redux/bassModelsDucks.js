import { storage, db } from '../firebase';

// Constants
const WARWICK_FOLDER = 'warwick';
const IBANEZ_FOLDER = 'ibanez';
const EPIPHONE_FOLDER = 'epiphone';

const initData = {
    loading: false,
    resutls: [],
    list: 0,
    model: []
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
            return {
                ...state, resutls: action.payload, list: action.list,
                loading: action.loading, model: action.model
            };
        case GET_WARWICK_MODELS_LOCAL:
            return { ...state, resutls: action.payload, list: action.list, model: action.model };
        case GET_IBANEZ_MODELS:
            return {
                ...state, resutls: action.payload, list: action.list,
                loading: action.loading, model: action.model
            };
        case GET_IBANEZ_MODELS_LOCAL:
            return { ...state, resutls: action.payload, list: action.list, model: action.model };
        case GET_EPIPHONE_MODELS:
            return {
                ...state, resutls: action.payload, list: action.list,
                loading: action.loading, model: action.model
            };
        case GET_EPIPHONE_MODELS_LOCAL:
            return { ...state, resutls: action.payload, list: action.list, model: action.model };
        default:
            return state;
    }
}
// Actions

// WARWICK
export const getWarwickModels = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(WARWICK_FOLDER).listAll();
    if (localStorage.getItem(`w-edited-${num}.png`) && localStorage.getItem(`w-model-${num}`)) {
        // consuming from localstorage 
        dispatch({
            type: GET_WARWICK_MODELS_LOCAL,
            payload: JSON.parse(localStorage.getItem(`w-edited-${num}.png`)),
            list: listItems.items.length,
            model: JSON.parse(localStorage.getItem(`w-model-${num}`))
        })
        return
    }
    try {
        // consuming from firestore storage
        dispatch({
            type: LOADING,
            loading: true
        })
        const info = await db.collection(WARWICK_FOLDER).doc(`w-model-${num}`).get();
        const arrayData = info.data();
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(WARWICK_FOLDER).child(`w-edited-${num}.png`).getDownloadURL();
            dispatch({
                type: GET_WARWICK_MODELS,
                payload: imgSrc,
                list: listItems.items.length,
                loading: false,
                model: arrayData
            })
            localStorage.setItem(`w-edited-${num}.png`, JSON.stringify(imgSrc));
            localStorage.setItem(`w-model-${num}`, JSON.stringify(arrayData));
        }
    } catch (error) {
        console.log(error);
    }
}

// IBANEZ
export const getIbanezModels = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(IBANEZ_FOLDER).listAll();
    if (localStorage.getItem(`i-edited-${num}.jpg`) && localStorage.getItem(`i-model-${num}`)) {
        // consuming from localstorage 
        dispatch({
            type: GET_IBANEZ_MODELS_LOCAL,
            payload: JSON.parse(localStorage.getItem(`i-edited-${num}.jpg`)),
            list: listItems.items.length,
            model: JSON.parse(localStorage.getItem(`i-model-${num}`))
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
            const info = await db.collection(IBANEZ_FOLDER).doc(`i-model-${num}`).get();
            const arrayData = info.data();
            dispatch({
                type: GET_IBANEZ_MODELS,
                payload: imgSrc,
                list: listItems.items.length,
                loading: false,
                model: arrayData
            })
            localStorage.setItem(`i-edited-${num}.jpg`, JSON.stringify(imgSrc));
            localStorage.setItem(`i-model-${num}`, JSON.stringify(arrayData));
        }
    } catch (error) {
        console.log(error);
    }
}

// EPIPHONE
export const getEpiphoneModels = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(EPIPHONE_FOLDER).listAll();
    if (localStorage.getItem(`e-edited-${num}.png`) && localStorage.getItem(`e-model`)) {
        // consuming from localstorage 
        dispatch({
            type: GET_EPIPHONE_MODELS_LOCAL,
            payload: JSON.parse(localStorage.getItem(`e-edited-${num}.png`)),
            list: listItems.items.length,
            model: JSON.parse(localStorage.getItem(`e-model`))
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
            const info = await db.collection(EPIPHONE_FOLDER).doc(`e-model`).get();
            const arrayData = info.data();
            dispatch({
                type: GET_EPIPHONE_MODELS,
                payload: imgSrc,
                list: listItems.items.length,
                loading: false,
                model: arrayData
            })
            localStorage.setItem(`e-edited-${num}.png`, JSON.stringify(imgSrc));
            localStorage.setItem(`e-model`, JSON.stringify(arrayData));
        }
    } catch (error) {
        console.log(error);
    }
}