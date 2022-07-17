import React from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const App = (todos) => {
  let todosTags = todos.todos.map((todo) => {
    return (
      <ListItem
        key={todo.id}
        title={todo.text}
        leading={<Icon name="check" size={24} />}
        trailing={(props) => <Icon name="delete" {...props} />}
      />
    );
  });
  return <View>{todosTags}</View>;
};

export default App;
