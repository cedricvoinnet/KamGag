import React from 'react';
import {
  FlatList, Text, Image, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';

class PostsList extends React.Component {
  state = {
    isFetching: false
  }

  refresh() {
    this.setState({ isFetching: true },
    () => this.waitTwoSec());
  }

  waitTwoSec() {
    setTimeout(() => {
      this.setState({isFetching: false})
    }, 1000);
  }

  render() {
    const { posts } = this.props;
    const { width } = Dimensions.get('window');
    const emptyList = <Text style={{textAlign: 'center',fontSize:20, fontWeight:'bold'}}>No memes yet...{'\n'}Add a new one by pressing "+" below</Text>

    return (
      <FlatList
        data={posts}
        ListEmptyComponent={emptyList}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#000000',
            alignItems: 'flex-start',
            justifyContent: 'center',
            margin: 5,
            padding: 5,
            borderRadius: 10
          }}
          >
            <Text style={{color: "white", fontSize: 24, alignItems: "flex-start"}}>{item.title}</Text>
            <Image source={item.img} style={{ width: width - 20, height: width - 20 }} />
            <Text style={{color: "#808080", fontSize: 12, alignItems: "flex-start"}}>By: {item.author}</Text>
          </View>
        )}
        refreshing={this.state.isFetching}
        onRefresh={() => this.refresh()}
      />
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.object,
  })).isRequired,
};

export default PostsList;
