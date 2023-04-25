import { Text, View } from "react-native";
import { footerStyle } from "./Footer.style";

export default function Footer() {
  const { container, text } = footerStyle;
  return (
    <View style={container}>
      <Text style={text}>Made with ❤️ by @gomeznahuel</Text>
    </View>
  );
}
