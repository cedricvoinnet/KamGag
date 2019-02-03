const createPost = post => ({
  type: 'ADD_POST',
  post: { title: post.title, img: { uri: post.img }, author: post.author },
});

export default createPost;
