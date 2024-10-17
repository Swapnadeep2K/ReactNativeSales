import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importing for the back icon

// Define the props for the screen based on route params
type ChatScreenRouteProp = RouteProp<{ params: { name: string; image: string } }, 'params'>;

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'salesperson';
  timestamp: Date;
}

const ChatScreen: React.FC = () => {
  const route = useRoute<ChatScreenRouteProp>();
  const navigation = useNavigation();
  const { name, image } = route.params;

  // Initial static messages
  const [chatData, setChatData] = useState<Message[]>([
    { id: '1', text: 'Hello, how can I assist you today?', sender: 'salesperson', timestamp: new Date() },
    { id: '2', text: 'I need help with B2B sales.', sender: 'user', timestamp: new Date() },
    { id: '3', text: 'Sure, let’s get started.', sender: 'salesperson', timestamp: new Date() },
  ]);

  // State to manage the input text
  const [inputText, setInputText] = useState('');

  // Create a ref for the FlatList to control scrolling
  const flatListRef = React.useRef<FlatList>(null);

  // Function to format date and time
  const formatTimestamp = (timestamp: Date) => {
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

    const day = timestamp.getDate();
    const month = timestamp.getMonth() + 1; // Months are 0-indexed
    const year = timestamp.getFullYear();
    const dateString = `${day}-${month}-${year}`;

    return `${dateString} ${timeString}`;
  };

  // Function to scroll to the latest message
  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  // Function to send a new message
  const handleSend = () => {
    if (inputText.trim()) {
      // Add new user message to the chat data
      const newMessage: Message = {
        id: (chatData.length + 1).toString(),
        text: inputText,
        sender: 'user',
        timestamp: new Date(), // Capture current timestamp
      };
      setChatData((prevChatData) => [...prevChatData, newMessage]); // Update chat data with the new message
      setInputText(''); // Clear the input field
      scrollToEnd(); // Scroll to the latest message
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={item.sender === 'salesperson' ? styles.salespersonMessage : styles.userMessage}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestampText}>{formatTimestamp(item.timestamp)}</Text>
    </View>
  );

  // Customizing the header with back icon and dynamic name + image
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        // Header with dynamic name and image
        <View style={styles.header}>
          <Image source={{ uri: image }} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('Info icon pressed')} style={styles.infoButton}>
          <Ionicons name="information-circle-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#1E1E1E",
      },
      headerTitleAlign: 'center', // Center the title
    });
  }, [navigation, name, image]);
  
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Chat messages */}
      <FlatList
        ref={flatListRef}
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
        onContentSizeChange={scrollToEnd} // Scroll to the latest message when the content size changes
      />

      {/* Message input */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type a message..."
            placeholderTextColor="#888"
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',  // Center vertically
    justifyContent: 'center', // Center horizontally in the header
    paddingVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoButton: {
    paddingHorizontal: 10, // Add some padding for spacing
    alignSelf: 'center', // Center it vertically in the header
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  salespersonMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  messageText: {
    color: '#FFF',
  },
  timestampText: {
    color: 'gray',
    fontSize: 10,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1E1E1E',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#333',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#28A745',
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ChatScreen;