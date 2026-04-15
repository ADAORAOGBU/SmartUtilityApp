import styles from "@/styles/swapstyle";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BrandedHeader } from "../components/brandedheader";
import { ModeSelector } from "../components/modeselector";
import { allUnits, ConversionMode } from "../utils/conversion";

export default function SwapConverterScreen() {
  const [mode, setMode] = useState<ConversionMode>("Length");
  const [inputValue, setInputValue] = useState("1"); // Start with 1 so user sees a result

  const initialKeys = Object.keys(allUnits["Length"]);
  const [fromUnit, setFromUnit] = useState(initialKeys[0]);
  const [toUnit, setToUnit] = useState(initialKeys[1] || initialKeys[0]);

  // Sync units when the mode changes
  useEffect(() => {
    const newKeys = Object.keys(allUnits[mode]);
    setFromUnit(newKeys[0]);
    setToUnit(newKeys[1] || newKeys[0]);
  }, [mode]);

  // The Alert Logic (Uses the set functions from above)
  const selectUnit = (type: "from" | "to") => {
    const units = Object.keys(allUnits[mode]);
    Alert.alert(
      `Select ${type === "from" ? "Source" : "Target"} Unit`,
      "Choose a unit:",
      units.map((u) => ({
        text: u,
        onPress: () => (type === "from" ? setFromUnit(u) : setToUnit(u)),
      })),
    );
  };
  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const calculateResult = () => {
    const num = parseFloat(inputValue) || 0;
    const units = allUnits[mode];
    // Formula: (Value * FromRate) / ToRate
    const result = (num * units[fromUnit]) / units[toUnit];

    return result.toLocaleString(undefined, {
      maximumFractionDigits: 4,
      minimumFractionDigits: 0,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BrandedHeader
        title="Quick Swap"
        subtitle="Instant Multi-Unit Conversion"
      />
      <ScrollView>
        <ModeSelector
          currentMode={mode}
          onModeChange={(newMode) => setMode(newMode)}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.content}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              {/* --- FROM SECTION --- */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => selectUnit("from")}
              >
                <View style={styles.inputBox}>
                  <Text style={styles.label}>FROM: {fromUnit}</Text>
                  <TextInput
                    style={styles.inputValue}
                    value={inputValue}
                    onChangeText={setInputValue}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#94A3B8"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.swapCircle}
                onPress={handleSwap}
              >
                <Ionicons name="swap-vertical" size={26} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => selectUnit("to")}
              >
                <View style={[styles.inputBox, styles.resultBox]}>
                  <Text style={styles.label}>TO: {toUnit}</Text>
                  <Text style={styles.resultValue}>{calculateResult()}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.hint}>
              Tap the boxes above to change units in {mode} mode
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
