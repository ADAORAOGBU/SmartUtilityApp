import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ConversionMode } from "../utils/conversion";

interface ModeSelectorProps {
  currentMode: ConversionMode;
  onModeChange: (mode: ConversionMode) => void;
}

const MODES: ConversionMode[] = ["Length", "Weight", "Area", "Volume"];

export const ModeSelector = ({
  currentMode,
  onModeChange,
}: ModeSelectorProps) => {
  return (
    <View style={styles.modeRow}>
      {MODES.map((m) => (
        <TouchableOpacity
          key={m}
          onPress={() => onModeChange(m)}
          style={[styles.modeBox, currentMode === m && styles.activeModeBox]}
        >
          <Ionicons
            name={
              m === "Length"
                ? "resize"
                : m === "Weight"
                  ? "scale"
                  : m === "Area"
                    ? "layers"
                    : "water"
            }
            size={20}
            color={currentMode === m ? "#fff" : "#4EA8DE"}
          />
          <Text
            style={[
              styles.modeText,
              currentMode === m && styles.activeModeText,
            ]}
          >
            {m}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: "#FFF",
    // Add these for a premium shadow
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  modeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
  },
  modeBox: {
    width: "23%",
    aspectRatio: 1,
    justifyContent: "center",
    marginTop: 60,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E1E8ED",
  },
  activeModeBox: { backgroundColor: "#4EA8DE", borderColor: "#4EA8DE" },
  modeText: { fontSize: 10, fontWeight: "700", marginTop: 5, color: "#4EA8DE" },
  activeModeText: { color: "#fff" },
});
