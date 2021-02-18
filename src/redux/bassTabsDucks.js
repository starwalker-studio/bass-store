import { storage } from '../firebase';

// Constants
const BASS_TABS_FOLDER = 'bass-tabs';

const initData = {
    loading: false,
    pdf: ''
}
// Types
const LOADING = 'LOADING';
const GET_BASS_TABS = 'GET_BASS_TABS';
const GET_BASS_TABS_LOCAL = 'GET_BASS_TABS_LOCAL';

// Reducer
export default function tabsReducer(state = initData, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.loading };
        case GET_BASS_TABS:
            return { ...state, pdf: action.src };
        default:
            return state;
    }
}

// Actions
export const getBassTabs = (file) => async (dispatch) => {
    dispatch({
        type: LOADING,
        loading: true
    })
    try {
        const pdf = await storage.ref().child(BASS_TABS_FOLDER).child(file).getDownloadURL();
        dispatch({
            type: GET_BASS_TABS,
            src: pdf
        })        
    } catch (error) {
        console.log(error);
    }
}