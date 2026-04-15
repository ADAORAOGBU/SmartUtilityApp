import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TaskItem = ({ title, completed, onToggle, onDelete }: any) => {
  return (
    <View style={[styles.taskCard, completed && styles.taskCardCompleted]}>
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.7}
        onPress={onToggle}
      >
        <View style={[styles.checkbox, completed && styles.checkboxCompleted]}>
          {completed && <Ionicons name="checkmark" size={18} color="white" />}
        </View>
        <Text style={[styles.taskText, completed && styles.taskTextCompleted]}>
          {title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        activeOpacity={0.6}
      >
        <Ionicons name="trash-outline" size={20} color="#F87171" />
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

  checked: { backgroundColor: "#8338EC" },
  text: { fontSize: 16, fontWeight: "600", color: "#1E293B" },
  textDone: { textDecorationLine: "line-through", color: "#94A3B8" },

  taskCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20, // More rounded for modern look
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    // Soft shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Soft shadow for Android
    elevation: 2,
  },
  taskCardCompleted: {
    backgroundColor: "#F8F7FF",
    borderColor: "#E8E1FF",
    opacity: 0.8, // Slightly fades the whole card
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: "#8338EC",
    borderRadius: 9, // Squircle look
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  checkboxCompleted: {
    backgroundColor: "#8338EC",
    borderColor: "#8338EC",
  },
  taskText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
  },
  taskTextCompleted: {
    color: "#94A3B8",
    textDecorationLine: "line-through", // Keep it for clarity, or remove for "soft" look
  },
  deleteButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#FFF5F5", // Faint red background for the trash icon
  },
});
