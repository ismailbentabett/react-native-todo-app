import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, text]);
    onChangeText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.heading}>TODO LIST</Text>
      </View>
      <View>
        <FlatList data={todos} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button title="Add Task " color="#841584" onPress={addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  nav: {
    backgroundColor: "#000",

    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
