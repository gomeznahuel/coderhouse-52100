import { Modal, StyleSheet, Text, View, Button } from "react-native";

type CustomModalProps = {
  isVisible: boolean;
  titleText: string;
  messageText: string;
  onDeletePress: () => void;
  onCancelPress: () => void;
};

const CustomModal = ({ isVisible, titleText, messageText, onDeletePress, onCancelPress }: CustomModalProps) => {
  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{titleText}</Text>
        <Text style={styles.modalText}>
          {messageText}
        </Text>
        <View style={styles.modalButtonsContainer}>
          <Button title="Delete" color={"red"} onPress={onDeletePress} />
          <Button title="Cancel" color={"#3A5985"} onPress={onCancelPress} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F4FB",
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  modalText: {
    fontSize: 16,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    marginTop: 10,
  },
});

export default CustomModal;
