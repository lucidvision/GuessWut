import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    padding: 10,
    width: '100%',
  },
});

export default function Input(props) {
  return <TextInput style={styles.input} {...props} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {};
