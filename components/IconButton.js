import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, Pressable, StyleSheet } from "react-native";

export default function IconButton({ name, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={name} size={25} color="#222831" />
      <Text style={{ color: "#222831" }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    alignItems: "center",
    gap: 4,
  },
});
