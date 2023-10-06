import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Button } from "@rneui/base";
import { getTVShow } from "../../services/MovieAPI";
import { useState } from "react";
import ListCard from "../cards/ListCard";
import { BottomSheet, ListItem, Icon } from "@rneui/themed";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Loader from "../../loader/Loader";

const TVShowPage = ({navigation}) => {
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("popular");
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const list = [
    {
      title: "popular",
      onPress: () => {
        setCategory("popular");
      },
      containerStyle: { padding: 5 , paddingTop: 25},
    },
    {
      title: "airing_today",
      onPress: () => setCategory("airing_today"),
      containerStyle: { padding: 5 },
    },
    {
      title: "on_the_air",
      onPress: () => setCategory("on_the_air"),
      containerStyle: { padding: 5 },
    },
    {
      title: "top_rated",
      onPress: () => setCategory("top_rated"),
      containerStyle: { padding: 5, paddingBottom: 25},
    },

  ];

  const handlePress = () => {
    console.log("Button pressed");
    setIsBottomVisible(true);
    console.log(isBottomVisible);
  };

  useEffect(() => {
    setIsBottomVisible(false);
    setIsLoading(true);
    const fetchMovies = async () => {
      const results = await getTVShow(category);
      setTvShows(results);
      setIsLoading(false);
    };
    fetchMovies();
  }, [category]);
  console.log(isBottomVisible);
    console.log("tvShows", tvShows);

  return (
    <View>
      <Button
        title={category}
        color="transparent"
        titleStyle={{
          fontSize: 14,
          color: "black",
        }}
        containerStyle={{
          width: "60%",
          borderColor: "#ccc",
          borderWidth: 1,
          alignSelf: "center",
          marginTop: 30,
          marginBottom: 30,
          borderRadius: 8,
        }}
        buttonStyle={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
        iconContainerStyle={{ marginLeft: 10 }}
        icon={{
          name: "chevron-down",
          type: "font-awesome",
          size: 15,
          color: "black",
        }}
        iconRight
        onPress={handlePress}
      ></Button>
      <BottomSheet
        onBackdropPress={() => setIsBottomVisible(false)}
        modalProps={{ visible: isBottomVisible }}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={false}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content
              style={
                category == l.title ? styles.itemActive : styles.itemContainer
              }
            >
              <ListItem.Title
                style={[l.titleStyle, category == l.title && styles.textActive]}
              >
                {l.title}
              </ListItem.Title>
              {category == l.title && (
                <FontAwesome5 name="check" style={styles.iconActive} />
              )}
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      {isLoading ? (
        <Loader />
      ) : (
        //   <Text>Loading...</Text>
        <ListCard data={tvShows} type={"tvShows"} navigation={navigation} />
      )}
    </View>
  )
}

export default TVShowPage


const styles = StyleSheet.create({
  iconActive: {
    color: "white",
  },
  itemActive: {
    backgroundColor: "#377B70",
    padding: 8,
    margin: 0,
    color: "white",
    borderRadius: 8,

    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    gap: 20,
    alignItems: "center",
  },
  itemContainer: {
    padding: 8,
    margin: 0,
  },
  textActive: {
    color: "white",
  },
});
