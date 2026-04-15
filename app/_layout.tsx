import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2f6586",
          },
          headerBackground: () => (
            <LinearGradient
              colors={["#4EA8DE", "#3A86FF"]}
              style={{ flex: 1 }}
            />
          ),
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
          headerBackVisible: true,

          contentStyle: {
            backgroundColor: "#F8F9FA",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "SMART TOOLKIT" }}
        />

        {/* The Swap Screen */}
        <Stack.Screen
          name="swapconverterscreen"
          options={{
            headerShown: false,
            title: "QUICK SWAP",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen
          name="converter"
          options={{
            title: "Distance Converter",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="temp"
          options={{
            title: "Temperature Converter",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="currency"
          options={{
            title: "Currency Exchange",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tasks"
          options={{ title: "Task Manager", headerShown: false }}
        />
      </Stack>
    </>
  );
}
