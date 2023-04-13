import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { headerStyle } from "./Header.style";

export default function Header() {
  const { container, text, title } = headerStyle;

  return (
    <View style={container}>
      <Text style={title}>
        Hello World!
      </Text>
      
      <Text style={text}>
        This is my first React Native app. I am so excited to learn more about it!
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}