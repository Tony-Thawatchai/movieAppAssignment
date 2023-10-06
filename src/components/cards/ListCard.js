import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/base";

const ListCard = ({ data, navigation, type }) => {
  const [movies, setMovies] = useState(data);
  const [typeOf, setTypeOf] = useState(type);
  console.log("typeOf", typeOf);
  const handleToSinglePage = (
    id,
    title,
    overview,
    poster_path,
    release_date,
    media_type,
    popularity
  ) => {
    navigation.navigate("Single Movie", {
      title,
      id,
      media_type,
      overview,
      poster_path,
      release_date,
      popularity,
    });
  };
  // console.log("data", data);
  return (
    <FlatList
      data={movies}
      
      renderItem={({ item }) => (
        <View style={styles.wrap}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {typeOf === "movies" ? item.title : item.name}
            </Text>
            <Text style={styles.text}>Popularity: {item.popularity}</Text>
            <Text style={styles.text}>Release Date: { typeOf == "movies" ? item.release_date : item.first_air_date}</Text>
            <Button
              title="More Details"
              color="#52B3D0"
              buttonStyle={{
                // backgroundColor: '#52B3D0',
                borderRadius: 8,
              }}
              onPress={() =>
                
                handleToSinglePage(
                  item.id,
                  // item.media_type,
                  item.title || item.name,
                  item.overview,
                  item.poster_path,
                  item.release_date,
                  item.popularity
                )
              }
            ></Button>
          </View>
        </View>
      )}
    />
  );
};

export default ListCard;

const styles = StyleSheet.create({
  textWrap: {
    flex: "1",
    gap: 3,
  },
  button: {
    width: "100%",
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    fontWeight: "normal",
  },
  wrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "start",
    gap: 10,
    alignItems: "center",
    padding: 10,
    // margin: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    // backgroundColor: "red",
    // borderRadius: 10,
  },
  image: {
    width: "30%",
    aspectRatio: 1,
    // height: 200,
    // marginVertical: 10,
    // borderRadius: 10,
  },
});
