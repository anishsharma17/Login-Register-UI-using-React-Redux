const signupReducer = (state={}, {type , payload} )=>{

    switch(type) {
        case 'SET_USER_REGISTER':
            return {
                ...state,
            userSignupResponse : payload
              };
        case 'SET_USER_OTP_VERIFY':
            return {
                ...state,
                userOtpResponse: payload
            }

    default:
        return state;
    }
}
export default signupReducer;