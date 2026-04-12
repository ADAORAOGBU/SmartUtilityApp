import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MODULES = [
  {
    id: "1",
    title: "Quick Swap",
    path: "/swapconverterscreen",
    icon: "🔄",
    color: "#8338EC",
  },

  {
    id: "2",
    title: "Distance Converter",
    path: "/converter",
    icon: "📏",
    color: "#4EA8DE",
  },
  {
    id: "3",
    title: "Currency Exchange",
    path: "/currency",
    icon: "💰",
    color: "#48BFE3",
  },
  {
    id: "4",
    title: "Temperature Converter",
    path: "/temp",
    icon: "🌡️",
    color: "#56CFE1",
  },
];

const HomeScreen = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: (typeof MODULES)[0] }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => router.push(item.path as any)}
    >
      <View
        style={[styles.iconContainer, { backgroundColor: item.color + "20" }]}
      >
        <Text style={styles.iconEmoji}>{item.icon}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>

      <Text style={styles.arrow}>〉</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Smart Toolkit</Text>
        <FlatList
          data={MODULES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8", //
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1A202C",
    marginBottom: 25,
    letterSpacing: -0.5,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    // Modern Soft Shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  iconEmoji: {
    fontSize: 26,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D3748",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#718096",
    fontWeight: "500",
    letterSpacing: 1,
    marginTop: 2,
  },
  arrow: {
    fontSize: 18,
    color: "#CBD5E0",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default HomeScreen;
