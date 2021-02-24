import { auth, firebase } from '../firebase';

// init Data/Constants
const initData = {
    loading: false,
    active: false,
    user: []
}
// Type
const LOADING = 'LOADING';
const LOGIN_USER = 'LOGIN_USER';
const LOAD_SUCCESS_USER = 'LOAD_SUCCESS_USER';
const CLOSE_SESSION = 'CLOSE_SESSION';
// Reducer
export default function userReducer(state = initData, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case LOGIN_USER:
            return { ...state, user: action.log, loading: false, active: true };
        case LOAD_SUCCESS_USER:
            return { ...state, user: action.local, active: true };
        case CLOSE_SESSION:
            return { ...initData };
        default:
            return { ...state };
    }
}

// Actions
export const logUserAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const response = await auth.signInWithPopup(provider);
        dispatch({
            type: LOGIN_USER,
            log: {
                uid: response.user.uid,
                email: response.user.email,
                displayName: response.user.displayName,
                display: response.user.photoURL
            }
        });
        localStorage.setItem(response.user.uid, JSON.stringify({
            uid: response.user.uid,
            email: response.user.email,
            displayName: response.user.displayName,
            display: response.user.photoURL
        }));

    } catch (error) {
        console.log(error);
    }
}

export const loggedUser = () => (dispatch) => {
    auth.onAuthStateChanged(user => {
        console.log(user);
        if (localStorage.getItem(user.uid)) {
            dispatch({
                type: LOAD_SUCCESS_USER,
                local: JSON.parse(localStorage.getItem(user.uid))
            })
        }
    });
}

export const closeSession = () => (dispatch) => {
    console.log('cerrando session...')
    auth.onAuthStateChanged(user => {
        localStorage.removeItem(user.uid);        
    });
    auth.signOut();
    dispatch({
        type: CLOSE_SESSION
    })
}