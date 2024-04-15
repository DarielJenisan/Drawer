import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const AboutUsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.member}>
        <Image
          source={require("../../Form/assets/dariel.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Dariel S. Jenisan</Text>
          <Text style={styles.memberRole}>Bookstore Owner</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image
          source={require("../../Form/assets/mike.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Mike Jun H. Ganol</Text>
          <Text style={styles.memberRole}>Assistant</Text>
        </View>
      </View> 
      <View style={styles.member}>
        <Image
          source={require("../../Form/assets/magno.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Merlinda Y. Magno</Text>
          <Text style={styles.memberRole}>Assistant of Assistant</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#080c16"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  memberRole: {
    fontSize: 16,
    color: "#666",
    color: "white"
  },
});

export default AboutUsPage;
