import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DefaultButton({
  buttonText,
  click,
  width,
  height,
  marginTop,
  backgroundColor,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: width, height: height, marginTop: marginTop, backgroundColor: backgroundColor },
      ]}
      activeOpacity={0.7}
      onPress={click}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: '2%',
  },
});
