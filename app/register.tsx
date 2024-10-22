import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    // Handle the registration logic
    console.log("User registered");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.containerWhole}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SalesPro</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.containerHeader}>Register</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("login")}
        >
          Already have an account?
        </Text>
      </View>
    </SafeAreaView>
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
  label: {
    color: "#FFF", // White label
    fontSize: 16,
    marginBottom: 8,
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
  loginText: {
    color: "#ccc",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default RegisterScreen;
