import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="bg-[#00CCBB] flex-row p-4 m-4 rounded items-center justify-between">
        <View className="w-10 h-10 bg-[#00998c] rounded items-center justify-center">
          <Text className="text-white text-lg font-extrabold">
            {items.length}
          </Text>
        </View>
        <Text className="text-white text-lg font-extrabold">View Basket</Text>
        <Text className="font-extrabold text-white text-lg">
          Tk. {basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
