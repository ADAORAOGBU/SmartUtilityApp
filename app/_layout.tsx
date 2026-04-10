import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4EA8DE', // Matching your toolkit theme
          },
          headerTintColor: '#fff', // White text for the header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Smart Converter',
            headerShown: false,  headerLargeTitle: true// Keeps the home screen clean
          }} 
        />

                <Stack.Screen 
          name="converter" 
          options={{ 
            title: 'Metric Converter',
            headerBackTitle: 'Home', 
          }} 
        />

              <Stack.Screen 
          name="currency" 
          options={{ 
            title: 'Currency Exchange',
            headerBackTitle: 'Home',
          }} 
        />
              <Stack.Screen 
          name="temp" 
          options={{ 
            title: 'Temperature Converter',
            headerBackTitle: 'Home',
          }} 
        />  
        <Stack.Screen 
          name="weight" 
          options={{ 
            title: 'Weight Wizard',
            headerBackTitle: 'Home', headerTintColor: '#fff',
          }} 
        />  
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}