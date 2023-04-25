import { StyleSheet } from "react-native";

export const footerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#023128",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#c1dbd3",
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
    lineHeight: 20,
  },
});
