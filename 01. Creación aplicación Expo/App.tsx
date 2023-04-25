import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Header, Footer } from "./src/components";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Footer />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474341",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingTop: 75,
  },
});
