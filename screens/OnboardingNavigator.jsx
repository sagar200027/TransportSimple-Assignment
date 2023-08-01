import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./SplashScreen";
import PhoneScreen from "./PhoneScreen";
import OtpScreen from "./OtpScreen";
import NameScreen from "./NameScreen";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      {/* <Stack.Screen name="MainNavigator" component={MainNavigator} /> */}
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
