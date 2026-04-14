import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TaskItem = ({
  title,
  completed,
  onToggle,
  onDelete,
}: TaskItemProps) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.content} onPress={onToggle}>
        <View style={[styles.checkbox, completed && styles.checked]}>
          {completed && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
        <Text style={[styles.text, completed && styles.textDone]}>{title}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete} hitSlop={10}>
        <Ionicons name="trash-outline" size={22} color="#F87171" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  content: { flex: 1, flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#8338EC",
    borderRadius: 8,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: { backgroundColor: "#8338EC" },
  text: { fontSize: 16, fontWeight: "600", color: "#1E293B" },
  textDone: { textDecorationLine: "line-through", color: "#94A3B8" },
});
