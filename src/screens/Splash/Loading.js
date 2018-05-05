import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, AsyncStorage, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { setAuthToken } from '~/redux/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Loading extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  state = {};
  componentDidMount() {
    AsyncStorage.getItem('authToken').then((authToken) => {
      this.props.dispatch(setAuthToken(authToken));
      this.props.navigation.navigate(authToken ? 'App' : 'Auth');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default connect()(Loading);
