import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tab as TabRNE, TabView } from "@rneui/themed";
import { useState } from "react";
import MoviesPage from "../pages/MoviesPage";
import SearchPage from "../pages/SearchPage";
import TVShowPage from "../pages/TVShowPage";

const Tab = ({navigation}) => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      <TabRNE
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#2c3e50",
          height: 3,
        }}
        variant="primary"
        style={styles.tab}
      >
        <TabRNE.Item
          title="Movies"
          titleStyle={{ fontSize: 12, color: "black" }}
          style={styles.tabItem}
        />
        <TabRNE.Item
          title="Search results"
          titleStyle={{ fontSize: 12, color: "black" }}
          style={styles.tabItem}
        />
        <TabRNE.Item
          title="TV shows"
          titleStyle={{ fontSize: 12, color: "black" }}
          style={styles.tabItem}
        />
      </TabRNE>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabView}>
          <MoviesPage navigation={navigation}  />
        </TabView.Item>
        <TabView.Item style={styles.tabView}>
          <SearchPage navigation={navigation}   />
        </TabView.Item>
        <TabView.Item style={styles.tabView}>
          <TVShowPage  navigation={navigation}  />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab:{
    backgroundColor: "#ccc",
  },
    tabItem: {
    backgroundColor: "#fff",
    height: 50,
  },
  tabView: {
    backgroundColor: "#fff",
    width: "100%",
  },
});
