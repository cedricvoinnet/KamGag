import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import FAB from 'react-native-fab';
import Dashboard from '../components/dashboard/Dashboard';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#5f5f5f',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
  });
  
class HomeScreen extends Component{
    static navigationOptions = ({navigation, screenProps}) => {
        return {
            headerTitle: 'Home ',
            headerRight: (
            <Button
                // onPress={() => alert(screenProps.username)}
                onPress={() => navigation.navigate('SignIn')}
                title="Sign in "
                color="#5f5f5f"
            />
            ),
        }
    };

    signOut() {
        firebase.auth().signOut().then((res) => {
            alert('Disconnected');
        }).catch((err) => {
            alert(err.message);
        })
    }

    render() {
        const { username } = this.props;
        return (
            <View style={styles.container}>
                <Text style={{color: "red"}}>{username ? username : 'Not connected'}</Text>
                <Dashboard />
                <FAB buttonColor="#000000" iconTextColor="#5f5f5f" onClickAction={() => { this.props.navigation.navigate('CreatePost'); }} visible={true} iconTextComponent={<Text>+</Text>} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.username,
});

FAB.propTypes = {};
  
export default connect(mapStateToProps)(HomeScreen);