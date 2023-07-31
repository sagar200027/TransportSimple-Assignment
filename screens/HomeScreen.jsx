import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoCard from "./components/TodoCard";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const bgColor = "#07B594";
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.main, { backgroundColor: bgColor }]}>
      <View style={styles.header}>
        <Image
          style={styles.imageStyle}
          source={require("./images/homescreen/sagar.jpg")}
        />
        <Text style={styles.homeTextStyle}>Home</Text>
      </View>
      <View style={styles.body}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
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

          <FlatList
            data={[0, 1, 2, 3, 4]}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }} />;
            }}
            renderItem={({ item }) => {
              return <TodoCard />;
            }}
          />
        </View>
      </View>
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
  },
  header: {
    paddingLeft: width / 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width / 10,
  },
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
