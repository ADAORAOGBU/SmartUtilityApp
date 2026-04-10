import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { convertLength, lengthUnits, LengthUnit } from '../utils/conversion';

export default function ConverterScreen() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState<LengthUnit>('meters');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Amount to Convert</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter value..."
        />

        <Text style={styles.resultsHeader}>Results:</Text>
        {Object.keys(lengthUnits).map((unit) => (
          <View key={unit} style={styles.resultRow}>
            <Text style={styles.unitName}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</Text>
            <Text style={styles.unitValue}>
              {convertLength(parseFloat(inputValue), fromUnit, unit as LengthUnit).toFixed(4)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  label: { fontSize: 16, color: '#666', marginBottom: 8 },
  input: {
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  resultsHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  unitName: { fontSize: 16, color: '#444' },
  unitValue: { fontSize: 16, fontWeight: '600', color: '#4EA8DE' },
});