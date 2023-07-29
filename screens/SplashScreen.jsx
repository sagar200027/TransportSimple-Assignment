import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient
        colors={["transparent", "#868BFE"]}
        style={styles.background}
        // end={{x:0,y:1}}
      >
        <Image
          style={{
            marginTop: 0,
            width: "100%",
            height: height,
            bottom: 100,
            resizeMode: "contain",
          }}
          source={require("./images/splash/SplashScreenBg.png")}
        />
        <View
          style={{
            position: "absolute",
            flex: 1,
            height: height - 140,
            width: "100%",
            zIndex: 10,
          }}
        >
          <Image
            style={{ marginLeft: 20, marginTop: 30 }}
            source={require("./images/splash/Taskoo.png")}
          />
          <View
            style={{
              width: "80%",
              flex: 1,
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              style={{
                width: "90%",
                height: height / 2.4,
                // backgroundColor: "green",
                resizeMode: "contain",
              }}
              source={require("./images/splash/SplashScreenVector.png")}
            />
            <Text style={{ color: "#18306D", fontWeight: "700", fontSize: 26 }}>
              Manage every work
            </Text>
            <View style={{ width: "70%", flex: 1, alignSelf: "center" }}>
              <Text
                style={{
                  color: "#1B21B5",
                  fontWeight: "700",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                Balance work, life and everything in between with Taskoo
              </Text>
            </View>

            <Pressable
              onPress={() => {
                navigation.navigate("PhoneScreen");
              }}
              style={{
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("./images/splash/RedGradientCircle.png")}
              />
              <Image
                style={{ position: "absolute" }}
                source={require("./images/splash/ArrowCircleRight.png")}
              />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    // backgroundColor: "",
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 0,
    paddingBottom: 100,
    // position: "absolute",
    // zIndex: -1,
  },
});
