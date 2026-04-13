import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { convertTemperature } from "../utils/conversion";

export default function TempScreen() {
  const [val, setVal] = useState("");

  const renderRow = (label: string, converted: number) => (
    <View style={styles.row}>
      <Text style={styles.unitLabel}>{label}</Text>
      <Text style={styles.valueText}>{converted.toFixed(2)}</Text>
    </View>
  );

  const num = parseFloat(val) || 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputCard}>
        <Text style={styles.label}>Celsius Input (°C)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={val}
          onChangeText={setVal}
          placeholder="0"
        />
      </View>

      <View style={styles.resultsCard}>
        {renderRow("Fahrenheit (°F)", convertTemperature(num, "C", "F"))}
        {renderRow("Kelvin (K)", convertTemperature(num, "C", "K"))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA", padding: 20 },
  inputCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginTop: 80,
    marginBottom: 20,
    elevation: 2,
  },
  label: { color: "#666", marginBottom: 8 },
  input: { fontSize: 32, fontWeight: "bold", color: "#4EA8DE" },
  resultsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  unitLabel: { fontSize: 16, color: "#444" },
  valueText: { fontSize: 18, fontWeight: "700" },
});
