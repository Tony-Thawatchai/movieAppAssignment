import { ScrollView, Image, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Text } from "@rneui/themed";
import { getShowSingle } from "../../services/MovieAPI";

const SinglePage = ({ navigation, id, title, movies, route }) => {
  console.log("single ", route.params);
  const [paramId, setParamId] = useState(route.params.id);
  const [paramMediaType, setParamMediaType] = useState(route.params.media_type);
  const [movie, setMovie] = useState();

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     console.log("paramId", paramId);
  //     console.log("paramMediaType", paramMediaType);
  //     const results = await getShowSingle(paramMediaType,paramId);
  //     setMovie(results);
  //     console.log("movie", movie);  
  //   };
  //   fetchMovie();
    
  // }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.wrap}>
        <Text h1 style={styles.h1}>
          {route.params.title}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${route.params.poster_path}`,
          }}
        ></Image>
        <View style={styles.textWrap}>
          <Text style={styles.paragraph}>{route.params.overview}</Text>
          <Text style={styles.meta}>
            Popularity: {route.params.popularity} | Release Date :{" "}
            {route.params.release_date}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SinglePage;

const styles = StyleSheet.create({
  scrollView: {},
  wrap: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    alignItems: "center",
  },
  h1: {
    fontSize: 20,
    color: "hsl(0, 0%,30%)",
    fontWeight: "bold",
    margin: 40,
  },
  image: {
    width: 300,
    height: 300,
  },
  textWrap: {
    display: "flex",
    justifyContent: "start",
  },
  paragraph: {
    color: "hsl(0, 0%,30%)",
    fontSize: 16,
    fontWeight: "normal",
    margin: 20,
  },
  meta: {
    fontSize: 12,
    color: "hsl(0, 0%,30%)",
    fontWeight: "normal",
    margin: 20,
  },
});
