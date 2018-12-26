import React, { Component } from 'react';
import {
  FlatList, Text, Image, View,
} from 'react-native';

class PostsList extends Component {

    _keyExtractor = (item, index) => {item.id.toString()};

    render() {
        return (
        <FlatList
            keyExtractor={this._keyExtractor}
            data={this.props.list}
            renderItem={({ item }) => (
            <View>
                <Text>{item.title}</Text>
                <Text>{item.id}</Text>
                <Image source={item.img} style={{width:50, height:50}}/>
            </View>
            )}
        />
        );
    }
}

export default PostsList;
