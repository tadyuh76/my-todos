import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, StatusBar } from 'react-native';

import Input from './components/Input';
import Goal from './components/Goal';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandle = (goal) => {
    setGoalList((goalList) => [
      ...goalList,
      { goal, id: Math.random().toString() },
    ]);
    setGoal((goal) => '');
  };

  const deleteGoalHandle = (goalId) => {
    setGoalList((goalList) =>
      goalList.filter((goalItem) => goalItem.id !== goalId)
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" />
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>
      <View style={styles.content}>
        <Input addGoal={addGoalHandle} />
        <FlatList
          data={goalList}
          renderItem={({ item: { goal, id } }) =>
            goal ? (
              <Goal value={goal} deleteGoal={deleteGoalHandle} id={id} />
            ) : null
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
