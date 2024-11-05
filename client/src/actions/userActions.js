import axios, { AxiosError } from "axios";
export const registerUser=(user)=>async dispatch=>{

    dispatch({type: 'USER_REGISTER_REQUEST'})

    try{
const response = await axios.post('/api/users/register' , user)
console.log(response);
dispatch({type:'USER_REGISTER_SUCCESS'})
   
}catch(error){
    dispatch({type:'USER_REGISTER_FAILED' , payload : error})

    }
    
}



export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });

    try {
        const response = await axios.post('/api/users/login', user); // Adjust the URL as necessary
        console.log(response);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data }); // Send user data on success
        localStorage.setItem('userInfo', JSON.stringify(response.data.user));
        window.location.href='/'
    } catch (error) {
        // console.error('Login error:', error.response ? error.response.data : error.message);
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error});
    }
};

