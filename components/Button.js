import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ label, isPrimary, onPress }) {
  return (
    <View
      style={
        isPrimary && {
          borderWidth: 4,
          borderStyle: "solid",
          borderColor: "#00ADB5",
          borderRadius: 18,
          padding: 3,
        }
      }
    >
      <Pressable
        style={[
          styles.button,
          isPrimary && {
            backgroundColor: "#222831",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
          },
        ]}
        onPress={onPress}
      >
        {isPrimary && (
          <FontAwesome name="picture-o" size={18} color="#EEEEEE" />
        )}
        <Text
          style={[
            styles.buttonText,
            isPrimary ? { color: "#EEEEEE" } : { color: "#222831" },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#EEEEEE",
    fontWeight: "semibold",
  },
});
