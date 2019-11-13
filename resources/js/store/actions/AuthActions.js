export const userAuth = (token) => {
    return {
        type    : 'LOGIN_USER',
        payload : token,
    }
}

export const LoggedUser = (data) => {
    return {
        type    : 'LOGGED_USER',
        payload : data,
    }
}

export const userLogout = () => {
    return {
        type    : 'LOGOUT_USER',
    }
}