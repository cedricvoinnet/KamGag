import React, { Component } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import addUsername from '../../store/actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5f5f5f',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 24,
    margin: 5,
    color: 'black',
    backgroundColor: 'white',
  }
});

class SignIn extends Component {
  static navigationOptions = {
    headerTitle: 'Sign In/Up ',
  };

  state = {
    email: '',
    password: ''
  }

  login = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert('Fill the field to login, boooooi');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res)
      this.props.addUsername({username: res.user.email})
      this.props.navigation.goBack();
    }).catch((err) => {
      const errMsg = err.message;
      alert(errMsg)
    });
  }

  register = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert('Fill the field to sign up, boooooi');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      this.props.addUsername({username: res.user.email})
      this.props.navigation.goBack();
    }).catch((err) => {
      const errMsg = err.message;
      alert(errMsg)
    });
  }

  render() {
    return(
        <View style={styles.container}>
            <TextInput id="email" style={styles.text} autoFocus={true} type="text" onChangeText={(email) => {this.setState({email})}} placeholder="Email" />
            <TextInput id="password" style={styles.text} type="password" secureTextEntry={true} onChangeText={(password) => {this.setState({password})}} placeholder="Password" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 10}}>
              <Button title="Login " onPress={this.login} />
              <Button title="Register " onPress={this.register} />
            </View>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsername: (username) => dispatch(addUsername(username))
  }
}

export default connect(null, mapDispatchToProps)(SignIn);
