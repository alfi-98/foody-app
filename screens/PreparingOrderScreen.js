import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/gif.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-92 w-92"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-gray-600 my-10 font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.CircleSnail color={["red", "green", "blue"]} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
