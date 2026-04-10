    import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { convertWeight, weightUnits, WeightUnit } from '../utils/conversion';

export default function WeightScreen() {
  const [val, setVal] = useState('');
  const num = parseFloat(val) || 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Input Weight (Kilograms)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={val}
          onChangeText={setVal}
          placeholder="0"
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {Object.keys(weightUnits).map((unit) => (
          <View key={unit} style={styles.row}>
            <View>
              <Text style={styles.unitName}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</Text>
              <Text style={styles.unitSub}>{unit === 'kilograms' ? 'Base Unit' : `Converted from KG`}</Text>
            </View>
            <Text style={styles.unitValue}>
              {convertWeight(num, 'kilograms', unit as WeightUnit).toLocaleString(undefined, {
                maximumFractionDigits: 3,
              })}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    padding: 30, 
    backgroundColor: '#64DFDF', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: { color: '#2D6A4F', marginBottom: 8, fontWeight: '700', fontSize: 14, textTransform: 'uppercase' },
  input: { fontSize: 48, fontWeight: 'bold', color: '#fff' },
  list: { padding: 20, paddingTop: 30 },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 18, 
    borderBottomWidth: 1, 
    borderBottomColor: '#f0f0f0' 
  },
  unitName: { fontSize: 18, fontWeight: '600', color: '#333' },
  unitSub: { fontSize: 12, color: '#999' },
  unitValue: { fontSize: 20, fontWeight: 'bold', color: '#2D6A4F' }
});