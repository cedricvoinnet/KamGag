import React from 'react';
import { View } from 'react-native';
import PostsList from '../posts/PostsList';
import NavBar from './NavBar';

const posts = [
  { id: 1, title: 'Post #1', img: { uri: 'https://img.icons8.com/color/48/000000/jake.png' } },
  { id: 2, title: 'Post #2', img: { uri: 'https://img.icons8.com/color/48/000000/finn.png' } },
  { id: 3, title: 'Post #3', img: { uri: 'https://img.icons8.com/color/48/000000/marceline.png' } },
];

const Dashboard = () => (
  <View className="container">
    <NavBar />
    <PostsList list={posts} />
  </View>
);

export default Dashboard;
