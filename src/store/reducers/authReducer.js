const initState = {
  username: '',
};

const authReducer = (state = initState, action) => {
  const { username } = action;
  switch (action.type) {
    case 'ADD_UNAME':
      return username;
    default:
      break;
  }
  return state;
};

export default authReducer;
