import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate("(tabs)");
    console.log("Logging in...");
  };

  const handleRegister = () => {
    // Implement your login logic here
    navigation.navigate("register");
    console.log("Register...");
  };

  useEffect(() => {
    navigation.setOptions({
      // headerTitle: () => (
      //   // Header with dynamic name and image
      //   <View style={styles.header}>
      //     <Text style={styles.headerText}>SalesPro</Text>
      //   </View>
      // ),
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.containerWhole}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SalesPro</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.containerHeader}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWhole: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    height: 80,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingTop: 30, // Added padding to prevent overlap
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  containerHeader: {
    color: "#FFF", // White text color
    fontSize: 24, // Larger font size for the title
    fontWeight: "bold", // Bold text for emphasis
    marginBottom: 20, // Space between header and input fields
    textAlign: "center", // Center the text
    alignSelf: "center", // Center the header inside the container
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: "#1E1E1E",
    color: "white",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "#ccc",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default LoginScreen;
