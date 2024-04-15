import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Landscapecat from "./landscapecat";

const categories = [
  {
    id: 1,
    name: "Historical Fiction",
    image: require("../../Form/assets/portrait1.jpg"),
  },

  {
    id: 2,
    name: "Mystery",
    image: require("../../Form/assets/landscape1.jpg"),
  },
  { id: 3, name: "Horror", image: require("../../Form/assets/nature1.jpg") },
  { id: 4, name: "Science Fiction", image: require("../../Form/assets/street1.jpg") },
  { id: 5, name: "Fantacy", image: require("../../Form/assets/wild1.jpg") },
  { id: 6, name: "Romance", image: require("../../Form/assets/travel1.jpg") },
  {
    id: 7,
    name: "Thriller",
    image: require("../../Form/assets/astro1.jpg"),
  },
  {
    id: 8,
    name: "Adventure",
    image: require("../../Form/assets/documentary1.jpg"),
  },
  // Add more categories with images as needed
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("Landscapecat", { category: 1 })}
    >
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => navigation.navigate("Landscapecat", { category: 1 })}
      ></TouchableOpacity>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "#080c16"
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(255, 255, 255)"
  },
});

export default CategoriesScreen;
