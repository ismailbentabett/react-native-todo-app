import React, { useState } from "react";
import { FAB, TextInput, Box, Flex, Spacer } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const BottomBar = (handleText) => {
  const [text, setText] = useState("");
  return (
    <View>
      <Box h={80} style={{ backgroundColor: "indigo" }}>
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
        <TextInput
          label="write a todo"
          style={{ height: 40, margin: 20 }}
          onChangeText={(newText) => setText(newText)}
        />
      </Box>
    </View>
  );
};

export default BottomBar;
