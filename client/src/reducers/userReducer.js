export const registerUserReducer =(state={} , action) =>{
    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST' : return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS' : return{
            loading:false ,
            success:true
        }
        case 'USER_REGISTER_FAILED' : return{
            loading:false ,
            error:action.payload
        }
        default : return state
    }
}


export const userLoginReducer = (state = { userInfo: null }, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { ...state, loading: true }; // Indicate loading state

        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload }; // Save user info on successful login

        case 'USER_LOGIN_FAILED':
            return { loading: false, error: action.payload }; // Capture error if login fails

        case 'LOGOUT_USER': // Added action to handle logout
            return { ...state, userInfo: null }; // Clear user info on logout

        default:
            return state; // Default case to return current state
    }
};
