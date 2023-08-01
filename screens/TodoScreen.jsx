import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Timer from "./images/todoscreen/Timer.svg";
import ColoredTimer from "./images/todoscreen/ColoredTimer.svg";
import Suitcase from "./images/todoscreen/Suitcase.svg";
import ColoredSuitcase from "./images/todoscreen/ColoredSuitcase.svg";
import Person from "./images/todoscreen/Person.svg";
import ColoredPerson from "./images/todoscreen/ColoredPerson.svg";
import ListBullets from "./images/todoscreen/ListBullets.svg";
import TextBolder from "./images/todoscreen/TextBolder.svg";
import TextItalic from "./images/todoscreen/TextItalic.svg";
import TextUnderline from "./images/todoscreen/TextUnderline.svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const TodoScreen = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleCreateTask = async () => {
    if (!(category && title && details)) {
      Alert.alert("Please enter all the details!");
      return;
    }
    setLoading(true);

    const token = await AsyncStorage.getItem("token");
    const user = await AsyncStorage.getItem("user");
    console.log("todo details", user);
    fetch("http://13.126.244.224/api/task", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "+917206723227",
        name: title,
        details: details,
        category: "work",
        expiry_date: "2022-08-12 16:00:00",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("create task", res);
        setLoading(false);
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: "#868BFE" }]}>
      <View style={styles.header}>
        <Image
          style={styles.imageStyle}
          source={require("./images/homescreen/sagar.jpg")}
        />
        <Text style={styles.homeTextStyle}>Home</Text>
      </View>

      <View style={styles.body}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          {/* Title */}
          <TextInput
            placeholder="Title"
            fontSize={20}
            color={"#CCDDE5"}
            onChangeText={setTitle}
            style={styles.textInputStyle}
          />

          {/* main text input */}
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                paddingVertical: 14,
                paddingHorizontal: 15,
                alignSelf: "center",
                borderRadius: 30,
                backgroundColor: "white",
                elevation: 2,
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity>
                <TextBolder />
              </TouchableOpacity>
              <TouchableOpacity>
                <TextItalic />
              </TouchableOpacity>
              <TouchableOpacity>
                <TextUnderline />
              </TouchableOpacity>
              <TouchableOpacity>
                <ListBullets />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="This is a demo of the tasks that can be created.
            B is for bold
            I is for italics
            U is for underline
            The hamburger menu makes a list"
              onChangeText={setDetails}
              multiline
              style={styles.detailsInputStyle}
            />
          </View>

          {/* category */}
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "space-evenly",
              flexDirection: "row",
              borderRadius: 30,
              elevation: 4,
            }}
          >
            <View
              style={{
                width: "85%",
                flexDirection: "row",
                paddingVertical: 10,
                alignSelf: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity onPress={() => setCategory("timer")}>
                {category === "timer" ? <ColoredTimer /> : <Timer />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCategory("suitcase")}>
                {category === "suitcase" ? <ColoredSuitcase /> : <Suitcase />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCategory("person")}>
                {category === "person" ? <ColoredPerson /> : <Person />}
              </TouchableOpacity>
            </View>
          </View>

          {/*Create button  */}
          <Pressable onPress={handleCreateTask} style={styles.createButton}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
              Create
            </Text>
          </Pressable>
        </View>
      </View>

      {loading && (
        <View
          style={{
            flex: 1,
            position: "absolute",
            justifyContent: "center",
            zIndex: 100,
            height: height,
            width: width,
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
            Just a sec
          </Text>
          <ActivityIndicator />
        </View>
      )}
    </SafeAreaView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  textInputStyle: {
    backgroundColor: "white",
    elevation: 3,
    marginTop: 30,
    color: "black",
    marginBottom: 15,
    borderRadius: 40,
    paddingLeft: 30,
    paddingVertical: 13,
  },
  middle: {},
  detailsInputStyle: {
    flex: 1,
    backgroundColor: "white",
    elevation: 1,
    padding: 20,
    overflow: "scroll",
    // marginBottom: 15,
    bottom: 25,
    zIndex: -1,
    borderRadius: 30,
  },
  createButton: {
    backgroundColor: "#F82626",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginVertical: 20,
    borderRadius: 30,
    width: "70%",
    alignSelf: "center",
  },
  body: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    paddingLeft: width / 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width / 10,
  },
  imageStyle: {
    width: width / 6,
    aspectRatio: 1,
    // height: width / 6,
    marginRight: 20,
    resizeMode: "contain",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "white",
  },
  homeTextStyle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
});
