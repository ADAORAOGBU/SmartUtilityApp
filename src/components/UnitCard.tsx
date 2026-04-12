import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface UnitCardProps {
  label: string;
  value: string;
  symbol: string;
}

export const UnitCard = ({ label, value, symbol }: UnitCardProps) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.unitName}>{label}</Text>
      <Text style={styles.symbol}>{symbol}</Text>
    </View>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },
  unitName: { fontSize: 16, fontWeight: "700", color: "#2D3748" },
  symbol: { fontSize: 12, color: "#8338EC", fontWeight: "bold" },
  value: { fontSize: 18, fontWeight: "800", color: "#2D3748" },
});
