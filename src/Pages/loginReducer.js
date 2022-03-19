const loginReducer =  (state = {}, { type, payload }) => {
    
      switch (type) {
        case 'SET_USER':
            return {
                ...state,
                userLoginREsponse : payload
              }
  
  
        case 'CLEAR_USER':
          return {};
        case 'SET_User_LIST_RESPONSE':
          return {
            ...state,
            UserListResponse : payload
          }
        default:
          return state;
      }
    };
export default loginReducer;