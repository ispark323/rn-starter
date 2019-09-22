import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 21 },
        { name: 'Friend #2', age: 22 },
        { name: 'Friend #3', age: 23 },
        { name: 'Friend #4', age: 24 },
        { name: 'Friend #5', age: 25 }
    ];
    return (
        <FlatList 
          keyExtractor={friend => friend.name}
          data={friends} 
          renderItem={({ item }) => {
            return <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>;
            // element === { item: {name: 'Friend #1' }, }
          }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 20
    }
});

export default ListScreen;