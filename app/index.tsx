import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a loading time, then navigate to the main screen
    const timer = setTimeout(() => {
      navigation.replace("login"); // Replace with your main screen (e.g., ListingScreen or LoginScreen)
    }, 3000); // 3-second delay for the splash screen

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <Text style={styles.appName}>SalesPro</Text>
      <ActivityIndicator size="large" color="#28A745" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark background
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: "#FFF", // White text for the app name
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
