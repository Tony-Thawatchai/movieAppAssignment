import { View, Text } from "react-native";
import React from "react";
import { Header as HeaderRNE} from "@rneui/themed";

const Header = () => {
  return (
    <HeaderRNE
      backgroundColor="#2c3e50"
      centerComponent={{
        text: "Movies App",
        style: { color: "#fff", fontSize: 18 },
      }}
    ></HeaderRNE>
  );
};

export default Header;
