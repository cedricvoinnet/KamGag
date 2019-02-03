import React, {Component} from 'react';
import { StyleSheet, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';
import createPost from '../../store/actions/postActions';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#5f5f5f',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
});

class CreatePost extends Component {
    static navigationOptions = {
        headerTitle: 'New post ',
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: null,
            empty: true,
        };
    }
    
    handleSubmit = (e) => {
        const {title, img} = this.state;
        const {username} = this.props;
        if (!title || !img){
            alert('Fill the field boooooi')
            return
        }
        this.props.createPost({
            title: title,
            img: img,
            author: username ? username : 'anonymous'
        });
        this.props.navigation.goBack();
    }

    render() {
        let { img } = this.state;
        const { width } = Dimensions.get('window');

        return (
        <View style={styles.container}>
            <TextInput id="title" type="text" multiline={true} style={{margin: 5, fontSize: 24, color: 'black', backgroundColor: 'white'}} onChangeText={(title) => {this.setState({title})}} placeholder="Post title" />
            {!img && <TouchableHighlight onPress={this._pickImage}>
                <Image source={require('../../../assets/empty.png')} style={{ width: width, height: width }} />
            </TouchableHighlight>}
            {img && <TouchableHighlight onPress={this._pickImage}>
                <Image source={{ uri: img }} style={{ width: width, height: width }} />
            </TouchableHighlight>}
            <Button title="Send" style={{height: 30}} onPress={this.handleSubmit} />
        </View>
        )
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
        });

        if (!result.cancelled) {
            this.setState({ img: result.uri, empty: false });
        }
    };
}

const mapStateToProps = state => ({
    username: state.auth.username,
})

const mapDispatchToProps = (dispatch) => {
    return {
       createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);