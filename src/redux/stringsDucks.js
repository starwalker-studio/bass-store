import { storage, db } from '../firebase';

// Constants
const DDRIO_IMG_FOLDER = 'daddario';
const initData = {
    loading: false,
    imgResult: [],
    info: []
}

// Types
const GET_DADDARIO_MODELS = 'GET_DADDARIO_MODELS';
const GET_DR_MODELS = 'GET_DR_MODELS';
const GET_ERNIE_BALL_MODELS = 'GET_ERNIE_BALL_MODELS';
const GET_FENDER_MODELS = 'GET_FENDER_MODELS';
const GET_DADDARIO_MODELS_LOCAL = 'GET_DADDARIO_MODELS_LOCAL';
const GET_DR_MODELS_LOCAL = 'GET_DR_MODELS_LOCAL';
const GET_ERNIE_BALL_MODELS_LOCAL = 'GET_ERNIE_BALL_MODELS_LOCAL';
const GET_FENDER_MODELS_LOCAL = 'GET_FENDER_MODELS_LOCAL';

// Reducer
export default function bassStrReducer(state = initData, action) {
    switch (action.type) {
        case GET_DADDARIO_MODELS:
            return { ...state, imgResult: action.response };
        default:
            return state;
    }
}

// Actions
export const getDaddarioStrings = () => async (dispatch) => {
    try {
        const ddrio01 = await storage.ref(DDRIO_IMG_FOLDER).child('daddario-exl160-medium-50-105.jpg').getDownloadURL();
        const ddrio02 = await storage.ref(DDRIO_IMG_FOLDER).child('daddario-exl165-reg-light-top-medium-bottom-45-105.jpg').getDownloadURL();
        const ddrio03 = await storage.ref(DDRIO_IMG_FOLDER).child('daddario-exl170-regular-light-45-100.jpg').getDownloadURL();
        const ddrio04 = await storage.ref(DDRIO_IMG_FOLDER).child('daddario-exl230-heavy-55-110.jpg').getDownloadURL();
        const files = [ddrio01, ddrio02, ddrio03, ddrio04];
        dispatch({
            type: GET_DADDARIO_MODELS,
            response: files
        })
    } catch (error) {
        console.log(error);
    }
}