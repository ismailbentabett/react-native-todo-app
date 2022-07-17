import React, { useState } from "react";
import {
  FAB,
  TextInput,
  Box,
  Flex,
  Spacer,
  Surface,
  AppBar,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const BottomBar = (handleText) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        variant="outlined"
        label="write a todo"
        style={{ height: 40, margin: 20, position: "relative" }}
        onChangeText={(newText) => setText(newText)}
      />
      <AppBar variant="bottom">
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          style={{
            zIndex: 50,
            position: "absolute",
            right: 10,
            top: -28,
            alignSelf: "flex-end",
          }}
          onPress={() => handleText.handleText(text)}
        />
      </AppBar>
    </View>
  );
};

export default BottomBar;
