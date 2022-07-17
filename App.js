import React, { useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import AppBarComponent from "./components/AppBar.component";
import BottomBar from "./components/BottomBar.component";
import TodosList from "./components/TodosList.component";
import { Flex, Spacer } from "@react-native-material/core";

export default function App() {
  const windowHeight = Dimensions.get("window").height;
  const [todos, setTodos] = useState([]);

  const handleText = (newText) => {
    console.log(newText);
    setTodos([...todos, { text: newText, done: false, id: Math.random() }]);
  };
  return (
    <Flex fill>
      <AppBarComponent />

      <ScrollView style={{ height: windowHeight - 150 }}>
        <TodosList todos={todos} />
      </ScrollView>

      <Spacer />
      <BottomBar handleText={handleText} />
    </Flex>
  );
}
