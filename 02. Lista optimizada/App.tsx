import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Task } from "./src/interfaces";
import { CustomModal, Render } from "./src/components";
import { generateKey, validateTask } from "./src/utils";

const INITIAL_TASK: Task = { id: "", title: "", complete: false };
const INITIAL_TASKS: Task[] = [];

export default function App() {
  const [newTask, setNewTask] = useState<Task>(INITIAL_TASK);
  const [tasksList, setTasksList] = useState<Task[]>(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState<Task>(INITIAL_TASK);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const clearNewTaskInput = () => {
    setNewTask(INITIAL_TASK);
  };

  const handleNewTaskInputChange = (text: string) => {
    setNewTask({ ...newTask, title: text });
  };

  const addNewTask = () => {
    const error = validateTask(newTask, tasksList);
    if (error) {
      alert(error);
      return;
    }
    setTasksList((prevState) => [...prevState, { ...newTask, id: generateKey() }]);
    clearNewTaskInput();
  };

  const handleModal = (taskId: string) => {
    const selectedTask = tasksList.find((task) => task.id === taskId);
    setSelectedTask(selectedTask as Task);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setTasksList((prevState) => prevState.filter((task) => task.id !== id));
    setIsModalVisible(false);
  };

  const handleComplete = (id: string) => {
    setTasksList((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const isEmpty = () => {
    return <Text style={{ fontSize: 20, marginTop: 10 }}>No tasks added yet!</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do List App!</Text>

      <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
        <TextInput
          style={styles.inputTask}
          onChangeText={handleNewTaskInputChange}
          value={newTask.title}
          placeholder="Add a new task..."
        />

        <TouchableOpacity style={styles.button} onPress={addNewTask}>
          <Text style={styles.buttonMessage}>Add</Text>
        </TouchableOpacity>
      </View>

      {tasksList.length > 0 ? <FlatList 
          data={tasksList}
          renderItem={({ item }) => <Render item={item} handleComplete={handleComplete} handleModal={handleModal} /> }
          keyExtractor={(item) => item.id}
        /> : isEmpty()
      }

      <CustomModal
        isVisible={isModalVisible}
        titleText="Delete Task"
        messageText="Are you sure you want to delete this task?"
        onCancelPress={() => setIsModalVisible(false)}
        onDeletePress={() => handleDelete(selectedTask.id)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: "auto",
    backgroundColor: "#F1F4FB",
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputTask: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 210,
    padding: 10,
    backgroundColor: "white",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#3A5985",
    padding: 10,
    borderRadius: 5,
  },
  buttonMessage: {
    color: "white",
    fontSize: 15,
  },
  renderTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    maxWidth: 350,
    minWidth: 350,
  },
  renderTasksText: {
    fontSize: 16,
    textDecorationLine: "none",
  },
  renderTasksButtons: {
    flexDirection: "row",
    gap: 10,
  },
});
