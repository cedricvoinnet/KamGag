import React from 'react';
import { Button, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const Login = ({ onPressSend }) => (
  <View>
    <TextInput type="text" placeholder="Login" />
    <TextInput type="password" placeholder="Password" />
    <Button title="Send" onPress={onPressSend} />
  </View>
);

Login.propTypes = {
  onPressSend: PropTypes.func.isRequired,
};

export default Login;
