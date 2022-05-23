export const LOGIN = 'LOGIN';
export const TOKEN = 'TOKEN';


const initialState = {
  isLogin: false,
  userId: null,
  name: null,
  email: null,
  profilePict: null,
  roleId: null,
  token: null,
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
        profilePict: action.payload.profilePict,
        roleId: action.payload.roleId,
      }
      case TOKEN:
        return {
          ...state,
          token: action.token,
        }
  }
  return state
}

export default ItemReducer
