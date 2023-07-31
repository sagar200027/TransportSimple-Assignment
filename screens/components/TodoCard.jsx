import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Image1 from "../images/homescreen/image1.svg";
import { useNavigation } from "@react-navigation/native";

const TodoCard = () => {
  
  const navigation = useNavigation()

  return (
    <Pressable style={styles.main}>
      <View
        style={{
          flexDirection: "row",
          //   backgroundColor: "red",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text style={styles.title}>Make client side documentation</Text>
        </View>
        <Pressable>
          <Image1 />
        </Pressable>
      </View>
      <Text style={{ color: "#D9D9D9" }}>Dec 16 16:00 - 17:00</Text>
    </Pressable>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    // elevation: 4,
  },
  title: {
    color: "#868BFE",
    // width: "75%",
    // backgroundColor: "red",
    fontSize: 26,
    fontWeight: "700",
    overflow: "scroll",
  },
});
