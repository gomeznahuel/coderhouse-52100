import { Button, StyleSheet, Text, View } from "react-native";
import { Task } from "../../interfaces";

type RenderProps = {
  item: Task;
  handleComplete: (id: string) => void;
  handleModal: (id: string) => void;
};

const Render = ({ item, handleComplete, handleModal }: RenderProps) => {
  return (
    <View style={styles.renderTasks}>
      <Text style={[styles.renderTasksText, { textDecorationLine: item.complete ? "line-through" : "none" }]}>
        {item.title}
      </Text>
      <View style={styles.renderTasksButtons}>
        <Button title="Complete" color={"#3A5985"} onPress={() => handleComplete(item.id)} />
        <Button title="Delete" color={"red"} onPress={() => handleModal(item.id)} />
      </View>
    </View>
  );
};

export default Render;

const styles = StyleSheet.create({
  renderTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    minWidth: 280,
    borderBottomWidth: 1,
    borderColor: "gray",
    marginTop: 10,
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
