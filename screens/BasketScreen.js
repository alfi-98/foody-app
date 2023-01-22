import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);
  const groupedItemsInBasket = useMemo(() => {
    return items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-gray-200 bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon height={50} width={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/cf/67/25/cf6725d850f9e287da0172144805d88b.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text>{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0].image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{items[0]?.price}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">Tk. {basketTotal}</Text>
          </View>
          <View className="flex-row items-center justify-between pt-10">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">Tk. 80</Text>
          </View>
          <View className="flex-row items-center justify-between pt-10">
            <Text className="">Order Total</Text>
            <Text className="font-bold">Tk. {basketTotal + 80}</Text>
          </View>
          <TouchableOpacity
            className="bg-[#00CCBB] items-center p-3 mt-5 rounded"
            onPress={() => navigation.navigate("")}
             >       
            <Text className="text-white text-lg font-extrabold">Place Order</Text>           
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
