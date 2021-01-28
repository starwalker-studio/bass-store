import axios from 'axios';
import { storage } from '../firebase';

// Constants
// const WARWICK_FOLDER = 'warwick';

const initData = {
    resutls: []
}

// Types
const GET_WARWICK_MODELS = 'GET_WARWICK_MODELS';

// Reducer
export default function modelReducer(state = initData, action) {
    switch (action.type) {
        case GET_WARWICK_MODELS:
            return { ...state, resutls: action.payload };
        default:
            return state;
    }
}
// Actions
export const getModels = () => async (dispatch) => {
    try {
        const url = [];
        const listItems = await storage.ref().child('warwick').listAll();
        listItems.items.map(ref => {
            ref.getDownloadURL().then(response => {
                dispatch({
                    type: GET_WARWICK_MODELS,
                    payload: response
                })
            })
        })

    } catch (error) {
        console.log(error);
    }
}