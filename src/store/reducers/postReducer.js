const initState = {
  posts: [
    { id: 1, title: 'Post #1', img: 'fake.url.com' },
    { id: 2, title: 'Post #2', img: 'fake.url.com' },
    { id: 3, title: 'Post #3', img: 'fake.url.com' },
  ],
};

const postReducer = (state = initState, action) => state;

export default postReducer;
