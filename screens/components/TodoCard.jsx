import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Image1 from "../images/homescreen/image1.svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoCard = ({ item, todosCall }) => {
  const navigation = useNavigation();
  const [bgColor, setBgColor] = useState("#FFA95A");
  const [expanded, setExpanded] = useState(false);
  // console.log("inside item", item);

  const handleCompleteTask = async () => {
    setExpanded(false);
    const token = await AsyncStorage.getItem("token");
    const user = await AsyncStorage.getItem("user");
    // console.log("todo details",user?.phone);
    fetch("http://13.126.244.224/api/task", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: JSON.parse(user)?.phone,
        uniquelink: item?.uniquelink,
        status: "completed",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("update task", res);
        setBgColor("white");
        todosCall();
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (item?.status == "completed") {
      setBgColor("white");
    }
  }, []);

  return (
    <Pressable
      onPress={() => {
        setExpanded((prev) => !prev);
      }}
      disabled={bgColor == "white" ? true : false}
      style={[
        styles.main,
        { backgroundColor: item?.status == "completed" ? "white" : bgColor },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          //   backgroundColor: "red",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text style={styles.title}>{item?.name}</Text>
        </View>
        <Pressable>
          <Image1 />
        </Pressable>
      </View>
      {expanded && <Text style={styles.todoDetailsText}>{item?.details}</Text>}
      <Text style={{ color: "#D9D9D9" }}>Dec 16 16:00 - 17:00</Text>
      {expanded && (
        <View style={styles.buttonsContiner}>
          <Pressable
            onPress={() => {
              setBgColor("#FF5A5A");
              setExpanded(false);
            }}
            style={[styles.buttons, { backgroundColor: "#FD3939C9" }]}
          >
            <Text style={styles.buttonText}>Ignore</Text>
          </Pressable>
          <Pressable
            onPress={handleCompleteTask}
            style={[styles.buttons, { backgroundColor: "#8AF9A2" }]}
          >
            <Text style={styles.buttonText}>Complete</Text>
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    elevation: 4,
    width: "85%",
    alignSelf: "center",
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 20,
  },
  title: {
    color: "#868BFE",
    // width: "75%",
    // backgroundColor: "red",
    fontSize: 26,
    fontWeight: "700",
    overflow: "scroll",
  },
  todoDetailsText: {
    color: "#526066",
    marginVertical: 10,
  },
  buttonsContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    marginTop: 10,
    marginBottom: 2,
    borderRadius: 30,
    width: "45%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});
