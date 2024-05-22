import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Pressable, StyleSheet } from "react-native";

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonOuter}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={56} color="#EEEEEE" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonOuter: {
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "#00ADB5",
    borderRadius: 75,
    padding: 3,
  },
  circleButton: {
    backgroundColor: "#222831",
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: "center",
    justifyContent: "center",
  },
});
