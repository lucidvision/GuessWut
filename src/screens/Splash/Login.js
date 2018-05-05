import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Input } from '~/components';
import { setAuthToken } from '~/redux/auth';
import { login } from '~/api/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  state = {
    email: '',
    password: '',
  };
  handleLoginPressed = () => {
    const credentials = this.state;
    login(credentials).then((res) => {
      const authToken = res.headers['x-auth'];
      AsyncStorage.setItem('authToken', authToken);
      this.props.dispatch(setAuthToken(authToken));
      this.props.navigation.navigate('App');
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>GuessWut</Text>
        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          value={this.state.email}
        />
        <Input
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
        />
        <Button label="Login" onPress={this.handleLoginPressed} />
      </View>
    );
  }
}

export default connect()(Login);
