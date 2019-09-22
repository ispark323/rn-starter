import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box #1 </Text>
            <Text style={styles.textStyle}>Box #2 </Text>
            <Text style={styles.textStyle}>Box #3 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;
