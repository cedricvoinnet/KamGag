import React, {Component} from 'react';
import { Button, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { onPressSend } = this.props;
    return(
        <View>
            <TextInput id="email" type="text" onChange={this.handleChange} placeholder="Email" />
            <TextInput id="password" type="password" onChange={this.handleChange} placeholder="Password" />
            <Button title="Send" onPress={onPressSend} />
        </View>
    );
  }
}

SignIn.propTypes = {
  onPressSend: PropTypes.func.isRequired,
};

export default SignIn;
