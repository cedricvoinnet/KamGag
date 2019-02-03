import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostsList from '../posts/PostsList';

const Dashboard = ({ posts }) => (
  <View className="container" style={{ flex: 1 }}>
    {/* <NavBar /> */}
    <PostsList posts={posts} />
  </View>
);

const mapStateToProps = state => ({
  posts: state.post.posts,
});

Dashboard.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Dashboard);
