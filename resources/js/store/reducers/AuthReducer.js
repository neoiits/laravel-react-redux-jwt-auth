let defaultState = {};

if(localStorage.getItem('token') != undefined){
    let token = localStorage.getItem('token');
    defaultState = {token : token, user:null, loggedIn:false};
}
else{
    defaultState = {token : null, user:null, loggedIn : false};
}

const AuthReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'LOGIN_USER':
                localStorage.setItem('token', action.payload.token);
                return {...state, token : action.payload.token};
        case 'LOGGED_USER':
                return {...state, user : action.payload.user, loggedIn : action.payload.loggedIn};
        case 'LOGOUT_USER' :
                localStorage.removeItem('token');
                return {
                    token : null, user:null, loggedIn : false
                };        
        default : 
            return state;    
    }
}

export default AuthReducer;