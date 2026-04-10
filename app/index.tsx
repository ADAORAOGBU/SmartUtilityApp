
import {useRouter} from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const MODULES = [
  { id: '1', title: 'Metric Converter', icon: '📏', color: '#4EA8DE' },
  { id: '2', title: 'Currency Exchange', icon: '💰', color: '#48BFE3' },
  { id: '3', title: 'Temperature Converter', icon: '🌡️', color: '#56CFE1' },
  { id: '4', title: 'Weight Wizard', icon: '⚖️', color: '#64DFDF' },
];

const HomeScreen = () => {
    const router = useRouter();
  const renderItem = ({ item }: { item: typeof MODULES[0] }) => (
    
  
    <TouchableOpacity onPress={() => {
        if (item.id === '1') router.push('/converter');
        if (item.id === '2') router.push('/currency');
        if (item.id === '3') router.push('/temp');
        if (item.id === '4') router.push('/weight');
      }}
      activeOpacity={0.7}
      style={[styles.card, { borderLeftColor: item.color }]}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>Tap to open tool</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Smart Toolkit</Text>
        <FlatList
          data={MODULES}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  innerContainer: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#212529',
    marginBottom: 30,
  },
  list: {
    gap: 15,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 6,
    marginBottom: 15,
    // Android Shadow
    elevation: 4,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    fontSize: 32,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#343A40',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6C757D',
    marginTop: 2,
  },
});

export default HomeScreen;