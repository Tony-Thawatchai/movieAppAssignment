import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ListCard from "../cards/ListCard";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { Input } from '@rneui/themed'
import { Input, InputField, InputIcon } from "@gluestack-ui/themed";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { getSearch } from "../../services/MovieAPI";

const SearchPage = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("multi");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const handleSearch = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsInvalid(false);
    if (search === "") {
      setIsInvalid(true);
      setIsLoading(false);
      return;
    }
    const fetchMovies = async () => {
      console.log(searchType, search);
      const results = await getSearch(searchType, search);
      if (results.Error) {
        setIsError(true);
        setErrorMessage(results.Error);
        setIsLoading(false);
      }
      setSearchResults(results);
      setIsLoading(false);
    };
    fetchMovies();

    console.log("searchResults", searchResults);
  };

  return (
    <View style={styles.container}>
      <FormControl
        style={styles.formControl}
        isInvalid={isInvalid}
        isRequired={true}
      >
        <FormControlLabel>
          <FormControlLabelText>
            Search Movie/TV Show Name
          </FormControlLabelText>
        </FormControlLabel>
        <Input style={styles.input} size="md">
          <FontAwesome5 name="search" style={styles.icon} />
          <InputField
            type="text"
            value={search}
            defaultValue=""
            placeholder="i.e. James Bonds, CSI"
            onChangeText={(e) => setSearch(e)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText style={styles.FormControlLabelText}>
            Choose Search Type
          </FormControlLabelText>
        </FormControlLabel>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.btnWrap}>
            <Select
              selectedValue={searchType} // Bind the select value to the 'searchType' state
              onValueChange={(itemValue) => setSearchType(itemValue)} // Update 'searchType' state when the select changes
            >
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon mr="$3">
                  <FontAwesome5 name="chevron-down" style={styles.icon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="tv" value="tv" />
                  <SelectItem label="movie" value="movie" />
                  <SelectItem
                    label="multi"
                    value="multi"
                    defaultSelected={true}
                    selectedValue={true}
                  />
                </SelectContent>
              </SelectPortal>
            </Select>
            <FormControlHelper>
              <FormControlHelperText>
                Please select the type of search.
              </FormControlHelperText>
            </FormControlHelper>
          </View>
          <Button
            color="#52B3D0"
            buttonStyle={{
              display: "flex",
              gap: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
            onPress={() => handleSearch()}
          >
            <FontAwesome5
              name="search"
              style={[styles.icon, styles.iconWhite]}
            />
            Search
          </Button>
        </View>
        <FormControlError>
          <FormControlErrorText>
            Movie/TV show name is required
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    <View style={{flex: 1, width: "100%"}}>
    {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {isError ? (
            <Text>{errorMessage}</Text>
          ) : (
            <ListCard data={searchResults}  navigation={navigation} />
          )}
        </View>
      )}
    </View>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 40,
  },
  formControl: {
    width: "100%",
    flex: 0.5,
    // backgroundColor: "hsl(22,100%,90%)",
  },
  FormControlLabelText: {
    marginTop: 20,
  },
  btnWrap: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  inputText: {
    color: "hsl(0,0%,0%)",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "hsl(0,0%,90%)",
    borderRadius: 8,
  },
  icon: {
    color: "hsl(0,0%,70%)",
    fontSize: 20,
  },
  iconWhite: {
    color: "hsl(0,0%,100%)",
    fontSize: 16,
  },
});
