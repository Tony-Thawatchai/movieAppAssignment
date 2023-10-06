import {
  ThemeProvider,
  createTheme,
  lightColors,
  darkColors,
} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/layout/Header";
import Tab from "./src/components/layout/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";

import SinglePage from "./src/components/pages/SinglePage";
import MoviesPage from "./src/components/pages/MoviesPage";
import MainLayout from "./src/components/layout/MainLayout";

const { Navigator, Screen } = createStackNavigator();

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
  mode: "light",
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GluestackUIProvider config={config.theme}>
        <SafeAreaProvider>
          {/* 
      <Header />
      <Tab />  */}
          <NavigationContainer>
            <Navigator>
              <Screen
                name="Home"
                // options={{ title: "Catspiration" }}
                component={MainLayout}
                options={{ headerShown: false }}
              />
              <Screen
                name="Single Movie"
                // options={{ title: "Catspiration" }}
                component={SinglePage}
                options={({ route }) => ({
                  title: route.params.title,
                  headerBackTitle: "Back to List",
                })}
              />
            </Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
