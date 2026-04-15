import styles from "@/styles/taskmanagerstyles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BrandedHeader } from "../components/brandedheader";
import { TaskItem } from "../components/taskitem";

export default function TaskManagerScreen() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState("");
  const router = useRouter();

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

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.illustrationWrapper}>
        <View style={styles.glowCircle} />
        <Image
          source={require("../../assets/images/task-icon.png")}
          style={styles.emptyImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.emptyTitle}>You're All Set!</Text>
      <Text style={styles.emptySubtitle}>
        Your list is empty.{"\n"}Add your first goal of the day above!
      </Text>

      <Ionicons
        name="arrow-up"
        size={24}
        color="#8338EC"
        style={{ marginTop: 25, opacity: 0.5 }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BrandedHeader
        title="Today's Focus"
        subtitle={
          tasks.length === 0
            ? "Let's get things done!"
            : tasks.every((t) => t.completed)
              ? "All caught up! 🎉"
              : `${tasks.filter((t) => !t.completed).length} goals remaining`
        }
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="New task..."
          placeholderTextColor="#94A3B8"
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
        ListEmptyComponent={renderEmptyState()}
      />
    </SafeAreaView>
  );
}
