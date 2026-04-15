import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const BrandedHeader = ({ title, subtitle }: HeaderProps) => {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Ionicons name="chevron-back" size={28} color="#8338EC" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: "#F8F9FA",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 12,
    marginTop: -15, // Aligns arrow center with the title/subtitle block
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E293B",
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8338EC",
    marginTop: -2,
  },
});
