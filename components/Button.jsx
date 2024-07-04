// components/Button.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ type, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type]]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  success: {
    backgroundColor: 'green',
  },
  danger: {
    backgroundColor: 'red',
  },
  info: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'orange',
  },
  buttonText: {
    color: 'white',
  },
});

export default Button;
