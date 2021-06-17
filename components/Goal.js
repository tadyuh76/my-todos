import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Goal({ value, deleteGoal, id }) {
  return (
    <View style={styles.goalItem} animationType="slide">
      <Text style={styles.goalText}>{value}</Text>

      <Feather
        name="delete"
        size={24}
        color="white"
        onPress={() => deleteGoal(id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 12,
    backgroundColor: 'dodgerblue',
    marginTop: 12,
    borderRadius: 15,
  },
  goalText: {
    color: 'white',
    fontSize: 18,
  },
});
