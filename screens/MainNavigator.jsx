import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import TodoScreen from "./TodoScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
