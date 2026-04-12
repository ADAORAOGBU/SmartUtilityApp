import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModeSelector } from "../components/modeselector";
import { allUnits, ConversionMode } from "../utils/conversion";

export default function SwapConverterScreen() {
  const [mode, setMode] = useState<ConversionMode>("Length");
  const [inputValue, setInputValue] = useState("1"); // Start with 1 so user sees a result

  // 1. Initialize state with the first available keys
  const initialKeys = Object.keys(allUnits["Length"]);
  const [fromUnit, setFromUnit] = useState(initialKeys[0]);
  const [toUnit, setToUnit] = useState(initialKeys[1] || initialKeys[0]);

  // 2. Sync units when the mode changes
  useEffect(() => {
    const newKeys = Object.keys(allUnits[mode]);
    setFromUnit(newKeys[0]);
    setToUnit(newKeys[1] || newKeys[0]);
  }, [mode]);

  // 3. The Alert Logic (Uses the set functions from above)
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "flex-start",
    marginBottom: 20,
    marginTop: 10,
  },
  cardContainer: { position: "relative", width: "100%", marginTop: 50 },

  label: {
    fontSize: 10,
    fontWeight: "800",
    color: "#8338EC",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  textInput: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1E293B",
    padding: 0,
  },

  swapCircle: {
    backgroundColor: "#8338EC",
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 10,
    marginVertical: -30,
    borderWidth: 4,
    borderColor: "#F8F9FA",
  },
  hint: {
    textAlign: "center",
    marginTop: 30,
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "500",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1E293B",
    letterSpacing: 1,
  },

  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    height: 110,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: { elevation: 4 },
    }),
  },

  inputValue: {
    fontSize: 40,
    fontWeight: "700",
    color: "#1E293B",
    padding: 0,
    marginTop: 8,
    height: 60,
    paddingVertical: 5,
  },

  resultValue: {
    fontSize: 32, //
    fontWeight: "700",
    color: "#8338EC",
    height: 40, //
  },

  resultBox: {
    backgroundColor: "#F1F5F9",
    borderColor: "#CBD5E1",
    marginTop: 10,
  },
});
