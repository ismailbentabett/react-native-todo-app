import React, { useEffect, useState } from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const App = (props) => {
  let [todosdata, settodosdata] = useState(props.todos);
  useEffect(() => {
    settodosdata(props.todos);
  }, [props.todos]);
  console.log(props);
  const handleDelete = (id) => {
    let newTodos = todosdata.filter((todo) => todo.id !== id);
    settodosdata(newTodos);
  };
  let todosTags = todosdata.map((todo) => {
    return (
      <ListItem
        key={todo.id}
        title={todo.text}
        leading={<Icon name="check" size={24} />}
        trailing={(props) => (
          <Icon
            name="delete"
            {...props}
            onPress={() => handleDelete(todo.id)}
          />
        )}
      />
    );
  });
  return <View>{todosTags}</View>;
};

export default App;
