import {
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from './types';


export function setNavbarLinks(links) {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: links
    })
}

export function changeNavbarActive(_id) {
    return ({
        type: CHANGE_NAVBAR_ACTIVE,
        payload: _id
    })
}