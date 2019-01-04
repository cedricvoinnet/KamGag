import react, {Component} from 'react';
import {TextInput} from 'react-native';

class CreatePost extends Component {
    state = {
        title: '',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
        
    render() {
        return (
        <View>
            <TextInput id="title" type="text" onChange={this.handleChange} placeholder="Post title" />
            <Button title="Send" onPress={onPressSend} />
        </View>
        )
    }
}

export default CreatePost;