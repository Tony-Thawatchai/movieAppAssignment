import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Button } from "@rneui/base";
import { getMovies } from "../../services/MovieAPI";
import { useState } from "react";
import ListCard from "../cards/ListCard";
import { BottomSheet, ListItem, Icon } from "@rneui/themed";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Loader from "../../loader/Loader";

const MoviesPage = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("popular");
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const list = [
    {
      title: "popular",
      onPress: () => {
        setCategory("popular");
      },
      containerStyle: { padding: 5, paddingTop: 25 },
    },
    {
      title: "now_playing",
      onPress: () => setCategory("now_playing"),
      containerStyle: { padding: 5 },
    },
    {
      title: "top_rated",
      onPress: () => setCategory("top_rated"),
      containerStyle: { padding: 5 },
    },
    {
      title: "upcoming",
      onPress: () => setCategory("upcoming"),
      containerStyle: { padding: 5, paddingBottom: 25 },
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
      const results = await getMovies(category);
      setMovies(results);
      setIsLoading(false);
    };
    fetchMovies();
  }, [category]);
  console.log(isBottomVisible);
  //   console.log("movies", movies);

  return (
    <View>
      <Button
        title={category}
        color="transparent"
        titleStyle={{
          fontSize: 14,
          color: "black",
          // backgroundColor: "gold",
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
        // containerStyle={{ 
        //   opacity:1,
        //   backgroundColor:"rgba(0,0,255,1)",
        //   transition: [{ backgroundColor:"rgba(0,0,0,1)" }],
        // }}
        // backdropStyle={{
        //   backgroundColor:"rgba(0,0,0,1)",
        //   transition: [{ backgroundColor:"rgba(0,0,0,1)" }],
        //   // opacity: 0,
        //   transition: [{ opacity: 1 }],
        //   // transform: [{ translateY: 100 }, { scale: 1 }],
        // }}
        // style={styles.bottomSheet}
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
        <ListCard data={movies} type={"movies"} navigation={navigation} />
      )}
    </View>
  );
};

export default MoviesPage;

const styles = StyleSheet.create({
  bottomSheet: {
    borderRadius: 800,
    backgroundColor: "red",
  },
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
