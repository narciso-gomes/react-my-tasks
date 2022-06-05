import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {TaskList} from '../../components/task-list';
import {TasksContext} from '../../context/TasksContext';

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  // const tasks = React.useContext(TasksContext);

  const {addTask} = React.useContext(TasksContext);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ?? 'Task empty',
    };
    addTask(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo, Dev!</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor="#555"
          placeholder="Nova tarefa... "
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={[styles.title, styles.titleTasks]}>Minhas tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: 15,
    marginTop: Platform.OS === 'ios' ? 15 : 20,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  textButton: {
    color: '#121214',
    fontSize: 18,
    fontWeight: '400',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: '400',
  },
});
