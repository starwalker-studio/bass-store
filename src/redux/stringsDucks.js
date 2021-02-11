import { storage, db } from '../firebase';

// Constants
const DDRIO_FOLDER = 'daddario';
const DR_FOLDER = 'dr';
const ERNIE_BALL_FOLDER = 'ernieball';
const FENDER_FOLDER = 'fender';
const EXL160 = 'EXL160';
const EXL165 = 'EXL165';
const EXL170 = 'EXL170';
const EXL230 = 'EXL230';
const DR_BLACK_BEAUTIES = 'black-beauties';
const DR_HI_BEAM_XL = 'hi-beam-xl';
const DR_HI_BEAM_MEDIUM = 'hi-beam-medium';
const DR_LO_RIDER = 'lo-rider';
const ERNIE_BALL_2813 = '2813';
const ERNIE_BALL_2832 = '2832';
const ERNIE_BALL_2833 = '2833';
const ERNIE_BALL_2834 = '2834';
const FENDER_5250_XL = '5250XL';
const FENDER_72505_M = '72505M';
const FENDER_7250_L = '7250L';
const FENDER_9050_M = '9050M';

const initData = {
    loading: false,
    ddrio: [],
    dr: [],
    ernie: [],
    fender: []
}

// Types
const LOADING = 'LOADING';
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
        case LOADING:
            return { ...state, loading: action.loading };
        case GET_DADDARIO_MODELS:
            return { ...state, ddrio: action.response, loading: action.loading };
        case GET_DADDARIO_MODELS_LOCAL:
            return { ...state, ddrio: action.response };
        case GET_DR_MODELS:
            return { ...state, dr: action.response, loading: action.loading };
        case GET_DR_MODELS_LOCAL:
            return { ...state, dr: action.response };
        case GET_ERNIE_BALL_MODELS:
            return { ...state, ernie: action.response, loading: action.loading };
        case GET_ERNIE_BALL_MODELS_LOCAL:
            return { ...state, ernie: action.response };
        case GET_FENDER_MODELS:
            return { ...state, fender: action.response, loading: action.loading };
        case GET_FENDER_MODELS_LOCAL:
            return { ...state, fender: action.response };
        default:
            return state;
    }
}

// Actions
export const getDaddarioStrings = () => async (dispatch) => {
    if (localStorage.getItem('daddario_info')) {
        dispatch({
            type: GET_DADDARIO_MODELS_LOCAL,
            response: JSON.parse(localStorage.getItem('daddario_info'))
        })
        return
    }
    try {
        dispatch({
            type: LOADING,
            loading: true
        })
        const ddrio_info_160 = await db.collection(DDRIO_FOLDER).doc(EXL160).get();
        const ddrio_info_165 = await db.collection(DDRIO_FOLDER).doc(EXL165).get();
        const ddrio_info_170 = await db.collection(DDRIO_FOLDER).doc(EXL170).get();
        const ddrio_info_230 = await db.collection(DDRIO_FOLDER).doc(EXL230).get();
        const data = [
            {
                exl160: ddrio_info_160.data(),
                exl165: ddrio_info_165.data(),
                exl170: ddrio_info_170.data(),
                exl230: ddrio_info_230.data()
            }
        ];
        dispatch({
            type: GET_DADDARIO_MODELS,
            loading: false,
            response: data
        })
        localStorage.setItem('daddario_info', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export const getDRStrings = () => async (dispatch) => {
    if (localStorage.getItem('dr_info')) {
        dispatch({
            type: GET_DR_MODELS_LOCAL,
            response: JSON.parse(localStorage.getItem('dr_info'))
        })
        return
    }
    try {
        dispatch({
            type: LOADING,
            loading: true
        })
        const dr_info_black_b = await db.collection(DR_FOLDER).doc(DR_BLACK_BEAUTIES).get();
        const dr_info_hi_beam_m = await db.collection(DR_FOLDER).doc(DR_HI_BEAM_MEDIUM).get();
        const dr_info_hi_beam_xl = await db.collection(DR_FOLDER).doc(DR_HI_BEAM_XL).get();
        const dr_info_lo_rider = await db.collection(DR_FOLDER).doc(DR_LO_RIDER).get();
        const data = [
            {
                drblackb: dr_info_black_b.data(),
                drhibeamm: dr_info_hi_beam_m.data(),
                drhibeamxl: dr_info_hi_beam_xl.data(),
                drlorider: dr_info_lo_rider.data()
            }
        ];
        dispatch({
            type: GET_DR_MODELS,
            loading: false,
            response: data
        })
        localStorage.setItem('dr_info', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export const getErnieBallStrings = () => async (dispatch) => {
    if (localStorage.getItem('ernie_ball_info')) {
        dispatch({
            type: GET_ERNIE_BALL_MODELS_LOCAL,
            response: JSON.parse(localStorage.getItem('ernie_ball_info'))
        })
        return
    }
    try {
        dispatch({
            type: LOADING,
            loading: true
        })
        const ernie_ball_info_2813 = await db.collection(ERNIE_BALL_FOLDER).doc(ERNIE_BALL_2813).get();
        const ernie_ball_info_2832 = await db.collection(ERNIE_BALL_FOLDER).doc(ERNIE_BALL_2832).get();
        const ernie_ball_info_2833 = await db.collection(ERNIE_BALL_FOLDER).doc(ERNIE_BALL_2833).get();
        const ernie_ball_info_2834 = await db.collection(ERNIE_BALL_FOLDER).doc(ERNIE_BALL_2834).get();
        const data = [
            {
                eb2813: ernie_ball_info_2813.data(),
                eb2832: ernie_ball_info_2832.data(),
                eb2833: ernie_ball_info_2833.data(),
                eb2834: ernie_ball_info_2834.data()
            }
        ];
        dispatch({
            type: GET_ERNIE_BALL_MODELS,
            loading: false,
            response: data
        })
        localStorage.setItem('ernie_ball_info', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export const getFenderBallStrings = () => async (dispatch) => {
    if (localStorage.getItem('fender_info')) {
        dispatch({
            type: GET_FENDER_MODELS_LOCAL,
            response: JSON.parse(localStorage.getItem('fender_info'))
        })
        return
    }
    try {
        dispatch({
            type: LOADING,
            loading: true
        })
        const fender_info_5250_XL = await db.collection(FENDER_FOLDER).doc(FENDER_5250_XL).get();
        const fender_info_72505_M = await db.collection(FENDER_FOLDER).doc(FENDER_72505_M).get();
        const fender_info_7250_L = await db.collection(FENDER_FOLDER).doc(FENDER_7250_L).get();
        const fender_info_9050_M = await db.collection(FENDER_FOLDER).doc(FENDER_9050_M).get();
        const data = [
            {
                fender5250: fender_info_5250_XL.data(),
                fender72505: fender_info_72505_M.data(),
                fender7250: fender_info_7250_L.data(),
                fender9050: fender_info_9050_M.data()
            }
        ];
        dispatch({
            type: GET_FENDER_MODELS,
            loading: false,
            response: data
        })
        localStorage.setItem('fender_info', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}