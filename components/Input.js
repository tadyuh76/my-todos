import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';

export default function Input({ addGoal }) {
  [goal, setGoal] = useState('');

  const goalInputHandle = (goal) => {
    setGoal(goal);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Add a goal!"
        onChangeText={goalInputHandle}
        defaultValue={goal}
      />
      <Button title="ADD" onPress={() => addGoal(goal)} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 6,
    borderRadius: 15,
  },
});
