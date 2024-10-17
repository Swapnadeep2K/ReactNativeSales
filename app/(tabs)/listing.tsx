import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Card, Avatar, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

interface SalesPerson {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  dealsClosed: number;
  clientsServed: number;
  pricePerConsultation: string;
  image: string;
  isTopPerformer: boolean;
  isAvailable: boolean;
  waitTime?: string;
}

const ListingScreen: React.FC = () => {
  const navigation = useNavigation();

  // // Customize the header when the screen is loaded
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: "SalesPro", // Set the title to "SalesPro"
  //     headerBackVisible: false, // Disable the default back button
  //   });
  // }, [navigation]);

  const [salesPeople] = useState<SalesPerson[]>([
    {
      id: "1",
      name: "John Doe",
      specialization: "B2B Sales",
      experience: "5 Years",
      dealsClosed: 100,
      clientsServed: 50,
      pricePerConsultation: "₹500/Consultation",
      image: "https://picsum.photos/id/237/200",
      isTopPerformer: true,
      isAvailable: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      specialization: "Retail Sales",
      experience: "3 Years",
      dealsClosed: 75,
      clientsServed: 30,
      pricePerConsultation: "₹300/Consultation",
      image: "https://picsum.photos/id/349/200",
      isTopPerformer: false,
      isAvailable: false,
      waitTime: "02:00",
    },
    {
      id: "3",
      name: "Alice Johnson",
      specialization: "Digital Marketing",
      experience: "4 Years",
      dealsClosed: 90,
      clientsServed: 40,
      pricePerConsultation: "₹400/Consultation",
      image: "https://picsum.photos/id/447/200",
      isTopPerformer: true,
      isAvailable: true,
    },
    {
      id: "4",
      name: "Michael Brown",
      specialization: "Corporate Sales",
      experience: "6 Years",
      dealsClosed: 120,
      clientsServed: 60,
      pricePerConsultation: "₹600/Consultation",
      image: "https://example.com/avatar4.png",
      isTopPerformer: false,
      isAvailable: true,
    },
    {
      id: "5",
      name: "Emma Wilson",
      specialization: "Product Sales",
      experience: "2 Years",
      dealsClosed: 50,
      clientsServed: 20,
      pricePerConsultation: "₹250/Consultation",
      image: "https://example.com/avatar5.png",
      isTopPerformer: true,
      isAvailable: false,
      waitTime: "01:30",
    },
    {
      id: "6",
      name: "David Miller",
      specialization: "Consulting",
      experience: "7 Years",
      dealsClosed: 110,
      clientsServed: 70,
      pricePerConsultation: "₹700/Consultation",
      image: "https://example.com/avatar6.png",
      isTopPerformer: false,
      isAvailable: true,
    },
    {
      id: "7",
      name: "Sophia Davis",
      specialization: "E-commerce Sales",
      experience: "3 Years",
      dealsClosed: 80,
      clientsServed: 35,
      pricePerConsultation: "₹350/Consultation",
      image: "https://example.com/avatar7.png",
      isTopPerformer: true,
      isAvailable: false,
      waitTime: "00:45",
    },
    {
      id: "8",
      name: "James Taylor",
      specialization: "Sales Strategy",
      experience: "8 Years",
      dealsClosed: 150,
      clientsServed: 80,
      pricePerConsultation: "₹800/Consultation",
      image: "https://example.com/avatar8.png",
      isTopPerformer: false,
      isAvailable: true,
    },
    {
      id: "9",
      name: "Olivia Martinez",
      specialization: "Retail Management",
      experience: "5 Years",
      dealsClosed: 70,
      clientsServed: 25,
      pricePerConsultation: "₹450/Consultation",
      image: "https://example.com/avatar9.png",
      isTopPerformer: true,
      isAvailable: true,
    },
    {
      id: "10",
      name: "William Anderson",
      specialization: "B2C Sales",
      experience: "4 Years",
      dealsClosed: 60,
      clientsServed: 15,
      pricePerConsultation: "₹200/Consultation",
      image: "https://example.com/avatar10.png",
      isTopPerformer: false,
      isAvailable: false,
      waitTime: "03:00",
    },
  ]);

  const renderSalesPersonItem = ({ item }: { item: SalesPerson }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftSection}>
          <Avatar
            rounded
            source={{ uri: item.image }}
            size="medium"
            containerStyle={styles.avatar}
          />
          {item.isTopPerformer && (
            <View style={styles.topPerformerBadge}>
              <Text style={styles.topPerformerText}>Top Performer</Text>
            </View>
          )}
          <Text style={styles.dealsClosedText}>
            {item.dealsClosed} Deals Closed
          </Text>
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.specialization}>{item.specialization}</Text>
          <Text style={styles.experience}>Experience: {item.experience}</Text>
          <Text style={styles.clientsServed}>
            Clients Served: {item.clientsServed}
          </Text>
        </View>

        <View style={styles.rightSection}>
          {item.isAvailable ? (
            <Button
              title="Contact"
              buttonStyle={styles.contactButton}
              titleStyle={styles.contactButtonText}
              onPress={() =>
                navigation.navigate("chat", {
                  name: item.name,
                  image: item.image,
                })
              }
            />
          ) : (
            <View>
              <Text style={styles.waitText}>Wait: {item.waitTime}</Text>
              <Button
                title="Book Consultation"
                buttonStyle={styles.disabledButton}
                titleStyle={styles.contactButtonText}
                disabled
              />
            </View>
          )}
          <Text style={styles.priceText}>{item.pricePerConsultation}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <View style={styles.header}>
        <Text style={styles.headerText}>SalesPro</Text>
      </View>
      <FlatList
        data={salesPeople}
        renderItem={renderSalesPersonItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // paddingTop: 25,
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
  flatListContent: {
    paddingVertical: 10,
    paddingTop: 0, // Remove default padding on top to avoid double spacing
  },
  card: {
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: "#1E1E1E",
    padding: 10,
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSection: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    marginBottom: 10,
  },
  topPerformerBadge: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  topPerformerText: {
    color: "white",
    fontSize: 12,
  },
  dealsClosedText: {
    color: "gray",
    marginTop: 5,
  },
  middleSection: {
    flex: 2,
    paddingHorizontal: 10,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  specialization: {
    color: "lightgray",
    marginVertical: 5,
  },
  experience: {
    color: "gray",
  },
  clientsServed: {
    color: "gray",
    marginTop: 5,
  },
  rightSection: {
    flex: 1,
    alignItems: "flex-end",
  },
  contactButton: {
    backgroundColor: "#28A745",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  contactButtonText: {
    color: "white",
    fontSize: 14,
  },
  waitText: {
    color: "orange",
    marginBottom: 5,
  },
  priceText: {
    color: "white",
    marginTop: 10,
  },
});

export default ListingScreen;