import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const Loader = () => {
  return (
    <>
      <Button
        title="Loading"
        buttonStyle={{ backgroundColor: "transperant" }}
        loadingProps={{
          size: "small",
          color: "black",
        }}
        //   loadingStyle={{ color: "black" }}
        loading
        titleStyle={{ fontSize: 18, color: "black" }}
      />
      {/* <Text>Loading...</Text> */}
    </>
  );
};

export default Loader;
