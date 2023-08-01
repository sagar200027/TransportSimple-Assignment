import {
  Alert,
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { baseURL } from "../Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const NameScreen = (props) => {
  const { phone, token } = props?.route?.params;
  const navigation = useNavigation();
  const disptach = useDispatch();
  const [name, setName] = useState("");
  console.log(phone, token, name);
  const handleNext = () => {
    if (!name) {
      Alert.alert("Please enter your name!");
      return;
    }
    fetch("http://13.126.244.224/api/user", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: `+91${phone}`,
        name: name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const setToken = async () => {
          await AsyncStorage.setItem("token", token);
          await AsyncStorage.setItem("user", JSON.stringify(res?.data));
          // console.log("res 2", res?.data, user);
          disptach(setUser(res?.data));
          // navigation.navigate("MainNavigator");
        };
        setToken();
      });
  };

  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient
        colors={["#868BFE", "transparent"]}
        style={styles.background}
        // end={{x:0,y:1}}
      >
        <View
          style={{
            height: height / 7,
            justifyContent: "flex-end",
            paddingLeft: 30,
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>
            Sign up
          </Text>
        </View>
        <ImageBackground
          style={{
            flex: 1,
            // marginTop: 100,
            // backgroundColor: "red",
            width: width,
            height: height,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 70,
          }}
          source={require("./images/signup/Rectangle.png")}
        >
          <View style={{ width: width / 1.4 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#18306D",
                fontWeight: "700",
                // marginBottom: 10,
              }}
            >
              What is your name?
            </Text>

            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.inputContainer}
            />
            <Pressable onPress={handleNext} style={styles.button}>
              <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>
                Lets Go
              </Text>
            </Pressable>

            <View style={{ paddingHorizontal: 23 }}>
              <Text
                style={{
                  color: "#CDCFF6",
                  fontWeight: "500",
                  textAlign: "center",
                  marginTop: 19,
                  fontSize: 15,
                }}
              >
                By signing up you agree to the{" "}
                <Text style={{ color: "#A3A6FF" }}>Terms and Conditions</Text>{" "}
                of Taskoo
              </Text>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "red",
  },
  background: {
    flex: 1,
    padding: 0,
    paddingBottom: 100,
    // position: "absolute",
    // zIndex: -1,
  },
  container: {
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  inputContainer: {
    borderWidth: 5,
    borderRadius: 30,
    borderColor: "white",
    padding: 0,
    backgroundColor: "#EAF0FF",
    width: width / 1.4,
    marginVertical: 10,
    paddingLeft: 30,
    paddingVertical: 9,
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#868BFE",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
  },
});
