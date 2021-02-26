import { auth, firebase, db } from '../firebase';

// init Data/Constants
const initData = {
    loading: false,
    active: false,
    user: [],
    cartSize: 0
}
// Type
const LOADING = 'LOADING';
const LOGIN_USER = 'LOGIN_USER';
const LOAD_SUCCESS_USER = 'LOAD_SUCCESS_USER';
const CLOSE_SESSION = 'CLOSE_SESSION';
const ADD_CART_ACTION_TO_LOCAL = 'ADD_CART_ACTION_TO_LOCAL';
const GET_USER_INFO = 'GET_USER_INFO';

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
        case ADD_CART_ACTION_TO_LOCAL:
            return { ...state, cartSize: action.items };
        default:
            return { ...state };
    }
}

// Actions
export const logUserAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const response = await auth.signInWithPopup(provider);
        let user = {
            uid: response.user.uid,
            email: response.user.email,
            displayName: response.user.displayName,
            display: response.user.photoURL,
            cart: []
        };
        await db.collection('users').doc(response.user.uid).get().then(ref => {
            if (!ref.data()) {
                console.log('registro firestore');
                db.collection('users').doc(response.user.uid).set(user);
            } else {
                user = ref.data();
            }
        });
        dispatch({
            type: LOGIN_USER,
            log: user
        });
        localStorage.setItem(response.user.uid, JSON.stringify(user));
        localStorage.setItem('cart', JSON.stringify(user.cart));
    } catch (error) {
        console.log(error);
    }
}

export const loggedUser = () => (dispatch) => {
    auth.onAuthStateChanged(user => {
        if (localStorage.getItem(user.uid)) {
            dispatch({
                type: LOAD_SUCCESS_USER,
                local: JSON.parse(localStorage.getItem(user.uid))
            });
        }
    });
}

export const closeSession = () => (dispatch) => {
    auth.onAuthStateChanged(user => {
        localStorage.removeItem(user.uid);
        localStorage.removeItem('cart');
    });
    auth.signOut();
    dispatch({
        type: CLOSE_SESSION
    });
}

export const addCart = (cart) => async (dispatch) => {
    try {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: ADD_CART_ACTION_TO_LOCAL,
                items: cart.length
            });
            console.log(cart);
            db.collection('users').doc(user.uid).update({
                cart: cart
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    } catch (error) {
        console.log(error);
    }
}