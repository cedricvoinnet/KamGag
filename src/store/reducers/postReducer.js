const initState = {
  posts: [
  ],
};

const postReducer = (state = initState, action) => {
  const newPost = action.post;
  switch (action.type) {
    case 'ADD_POST':
      newPost.key = Date.now().toString();
      state.posts.unshift(newPost);
      break;
    default:
      break;
  }
  return state;
};

export default postReducer;
