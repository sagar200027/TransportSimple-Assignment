import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OnboardingNavigator from "./OnboardingNavigator";
import MainNavigator from "./MainNavigator";
import { user } from "../redux/Reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
  const { user } = useSelector((state) => state.sliceComp);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log();
      if (token) {
        setIsLoggedIn(true);
      }
      getToken();
    };
  });

  return (
    <SafeAreaView style={styles.main}>
      {isLoggedIn || user ? <MainNavigator /> : <OnboardingNavigator />}
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
