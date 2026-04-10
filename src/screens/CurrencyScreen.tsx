import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FALLBACK_RATES, convertCurrency } from '../utils/currencylogic'

export default function CurrencyScreen() {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('USD');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Currency Exchange</Text>
        <Text style={styles.subtitle}>Base: {baseCurrency}</Text>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter USD amount"
      />

      {/* Here is your ScrollView! It sits inside the SafeAreaView */}
      <ScrollView style={styles.scrollList}>
        {Object.keys(FALLBACK_RATES).map((currency) => (
          <View key={currency} style={styles.row}>
            <Text style={styles.currencyCode}>{currency}</Text>
            <Text style={styles.convertedAmount}>
              {convertCurrency(parseFloat(amount) || 0, baseCurrency, currency, FALLBACK_RATES).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  headerContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666' },
  input: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  scrollList: { flex: 1, paddingHorizontal: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  currencyCode: { fontSize: 18, fontWeight: '600' },
  convertedAmount: { fontSize: 18, color: '#2D6A4F', fontWeight: 'bold' },
});