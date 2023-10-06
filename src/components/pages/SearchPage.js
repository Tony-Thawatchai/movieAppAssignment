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
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { Input } from '@rneui/themed'
import { Input, InputField, InputIcon } from "@gluestack-ui/themed";
import { Button } from "@rneui/themed";
// import { SearchIcon } from "@gluestack/ui-lucide-icons"
const SearchPage = () => {
  return (
    <View style={styles.container}>
      <FormControl
        style={styles.formControl}
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel>
          <FormControlLabelText>
            Search Movie/TV Show Name*
          </FormControlLabelText>
        </FormControlLabel>
        <Input style={styles.input} size="md">
          <FontAwesome5 name="search" style={styles.icon} />
          <InputField
            type="text"
            defaultValue=""
            placeholder="i.e. James Bonds, CSI"
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText style={styles.FormControlLabelText}>
            Choose Search Type*
          </FormControlLabelText>
        </FormControlLabel>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <View style={styles.btnWrap}>
            <Select>
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
            <FormControlHelper>
              <FormControlHelperText>
                Please select the type of search.
              </FormControlHelperText>
            </FormControlHelper>
          </View>
          <Button style={{ 
            
            // width: "40%"
             }}>
              <FontAwesome5 name="search" style={[styles.icon, ]} />
              Search</Button>
        </View>
        <FormControlError>
          <FormControlErrorText>
            Movie/TV show name is required
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
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
});
