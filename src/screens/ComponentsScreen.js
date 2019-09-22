import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = (props) => {
  console.log(props)
  const name = 'Min';
  return (
    <View>
      <Text style={styles.textStyle}> Hello {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  }
});

export default ComponentsScreen;