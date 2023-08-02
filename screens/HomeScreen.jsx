import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoCard from "./components/TodoCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { homeBgColor } from "../redux/Reducers";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  // const bgColor = "#07B594";
  const navigation = useNavigation();
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();
  const { homeColor } = useSelector((state) => state.sliceComp);
  console.log('bg home',homeColor);

  useFocusEffect(
    useCallback(() => {
      todosCall();
    }, [])
  );

  const todosCall = async () => {
    const token = await AsyncStorage.getItem("token");
    let user = await AsyncStorage.getItem("user");
    const phone = JSON.parse(user)?.phone.substring(3);
    console.log("token", phone);
    fetch(`http://13.126.244.224/api/task?phone=%2B91${phone}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("todos list", res?.data?.task);
        const arr = res?.data?.task?.reverse();
        setTaskList(arr);
        const statusArray = arr.map((item) => item.status);
        dispatch(homeBgColor(statusArray));
      });
  };

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: homeColor }]}>
      <View style={styles.header}>
        <Image
          style={styles.imageStyle}
          source={require("./images/homescreen/sagar.jpg")}
        />
        <Text style={styles.homeTextStyle}>Home</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={{ paddingHorizontal: 15 }}>
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
        <FlatList
          data={taskList}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 20 }} />;
          }}
          // contentContainerStyle={{ alignSelf: "center" }}
          renderItem={({ item }) => {
            // console.log("todo item", item);
            return (
              <View style={{ width: "100%" }}>
                <TodoCard item={item} todosCall={todosCall} />
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingTop:10
  },
  header: {
    paddingLeft: width / 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width / 10,
  },
  createButton: {
    backgroundColor:
      "radial-gradient(rgba(248, 38, 38, 1), rgba(253, 57, 57, 0.79))",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginVertical: 20,
    borderRadius: 30,
    width: "92%",
    alignSelf: "center",
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
