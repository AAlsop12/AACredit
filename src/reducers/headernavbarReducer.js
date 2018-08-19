import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [
        {
            title: 'Login'
        },
        {
            title: 'Sign Up'
        }
    ],
    navbarLinks: [
        {
            title: 'About Me',
            active: true
        },
        {
            title: 'My Mission',
            active: false
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navbarLinks: action.payload
            }
        default: return state;
    }
}