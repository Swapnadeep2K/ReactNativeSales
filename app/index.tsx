// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';  // Add this if you're using expo for gradient effects

// // Common Header Component with a stylish look
// const CommonHeader = ({ title }: { title: string }) => {
//   return (
//     <LinearGradient
//       colors={['#333', '#000']}
//       style={styles.header}
//     >
//       <Text style={styles.headerText}>{title}</Text>
//     </LinearGradient>
//   );
// };

// // Login Screen Component
// const LoginScreen = () => {
//   const navigation = useNavigation();

//   const handleLoginPress = () => {
//     // Navigate to another screen, like HomeScreen after login
//     navigation.navigate('(tabs)');  // Uncomment this when the home screen is ready
//     // console.log('Login Pressed');
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://example.com/your-background-image.png' }}  // Optional background image URL
//       style={styles.background}
//       resizeMode="cover"
//     >
//       {/* Common Header with the enhanced "SalesPro" title */}
//       <CommonHeader title="SalesPro" />

//       {/* Centered content: input fields, login button */}
//       <View style={styles.contentContainer}>

//         {/* Optional: Placeholder for input fields like email or username */}
//         <TextInput
//           placeholder="Username"
//           placeholderTextColor="#aaa"
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry
//           style={styles.input}
//         />

//         {/* Styled Login Button */}
//         <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// // Styles for the components
// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     position: 'absolute',
//     top: 50,  // Dynamic padding to avoid overlap with status bar
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 3,
//     elevation: 5, // For Android shadow effect
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 30,  // Make the text larger for emphasis
//     fontWeight: 'bold',
//     textShadowColor: '#000',  // Add subtle shadow to text for 3D effect
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 5,
//     letterSpacing: 1.5,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     paddingHorizontal: 40,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#333',  // Dark theme input fields
//     color: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   loginButton: {
//     width: '100%',
//     backgroundColor: 'green',  // Bright color for contrast (can be changed)
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loginButtonText: {
//     color: '#fff',  // Black text for contrast
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React, { useState } from "react";
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

  return (
    <View style={styles.containerWhole}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SalesPro</Text>
      </View>
      <View style={styles.container}>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWhole: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    height: 80,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingTop: 30,  // Added padding to prevent overlap
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    width: "80%",
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
  },
});

export default LoginScreen;