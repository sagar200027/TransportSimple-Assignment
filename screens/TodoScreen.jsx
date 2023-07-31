import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Timer from "./images/todoscreen/Timer.svg";
import Suitcase from "./images/todoscreen/Suitcase.svg";
import Person from "./images/todoscreen/Person.svg";
import ListBullets from "./images/todoscreen/ListBullets.svg";
import TextBolder from "./images/todoscreen/TextBolder.svg";
import TextItalic from "./images/todoscreen/TextItalic.svg";
import TextUnderline from "./images/todoscreen/TextUnderline.svg";

const { width, height } = Dimensions.get("window");

const TodoScreen = () => {
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
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <TextInput
            placeholder="Title"
            fontSize={20}
            color={"#CCDDE5"}
            style={styles.textInputStyle}
          />

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
                elevation: 4,
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
          </View>

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
                paddingVertical: 14,
                alignSelf: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity>
                <Timer />
              </TouchableOpacity>
              <TouchableOpacity>
                <Suitcase />
              </TouchableOpacity>
              <TouchableOpacity>
                <Person />
              </TouchableOpacity>
            </View>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("TodoScreen");
            }}
            style={styles.createButton}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
              CREATE
            </Text>
          </Pressable>
        </View>
      </View>
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
    marginVertical: 30,
    borderRadius: 40,
    paddingLeft: 30,
    paddingVertical: 13,
  },
  middle: {},
  createButton: {
    backgroundColor: "#F82626",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginVertical: 20,
    borderRadius: 30,
    width: "92%",
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
