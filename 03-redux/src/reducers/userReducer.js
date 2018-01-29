const userReducer = (state = {
  name: 'Louis',
  age: 28,
  lastValues: []
}, action) => {
  switch(action.type) {
    case 'SET_NAME_FULFILLED':
      state = {
        ...state,
        name: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
