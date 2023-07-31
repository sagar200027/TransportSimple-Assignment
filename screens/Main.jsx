import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import OnboardingNavigator from "./OnboardingNavigator";
import MainNavigator from "./MainNavigator";
import { user } from "../redux/Reducers";

const Main = () => {
  const { user } = useSelector((state) => state.sliceComp);

  return (
    <SafeAreaView style={styles.main}>
      {true ? <MainNavigator /> : <OnboardingNavigator />}
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
