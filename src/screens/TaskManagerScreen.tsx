import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TaskItem } from "../components/taskitem";

export default function TaskManagerScreen() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("@smart_tasks");
      if (saved) setTasks(JSON.parse(saved));
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@smart_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([
      { id: Date.now().toString(), title: newTask, completed: false },
      ...tasks,
    ]);
    setNewTask("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="New task..."
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            completed={item.completed}
            onToggle={() =>
              setTasks(
                tasks.map((t) =>
                  t.id === item.id ? { ...t, completed: !t.completed } : t,
                ),
              )
            }
            onDelete={() => setTasks(tasks.filter((t) => t.id !== item.id))}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  header: { padding: 20 },
  title: { fontSize: 28, fontWeight: "900", color: "#1E293B" },
  inputRow: { flexDirection: "row", paddingHorizontal: 20, marginBottom: 10 },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  addBtn: {
    backgroundColor: "#8338EC",
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
