import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from "react-native";

const posts = [
  { id: "1", content: "Just had an amazing day! 🌟" },
  { id: "2", content: "AI is changing the world! 🤖" },
  { id: "3", content: "Who else loves late-night thoughts? 🌙" }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.text}>{item.content}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>❤️</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>💬</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>🔁</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  post: {
    backgroundColor: "#1e1e1e",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Times New Roman",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
  }
});
