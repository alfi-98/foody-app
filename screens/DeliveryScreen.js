import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView>
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="white" size={40} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="">
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://ouch-cdn2.icons8.com/GAfVNulcKXYVmkzZ4qUxXyrNQF-b3xLz7bdzKntWqSc/rs:fit:512:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzUz/Lzk1YWNiMGMwLTdm/NDQtNGRlOC1iYzk5/LWU5YmNmNThlYWY3/Ny5wbmc.png",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar
            indeterminate={true}
            color="#00CCBB"
            progress={0.3}
            width={200}
          />
          <Text className="text-gray-400 mt-5">Food is being prepared</Text>
        </View>
      </SafeAreaView>
      <MapView
        intitalRegion={{
          latitude: 23.8103,
          longitude: 90.4125,
          latitudeDelta: 0.0005,
          longitudDelta: 0.0005,
        }}
        className="flex-1 mt-10 z-0"
        mapType="mutedStandard"
      ></MapView>
    </View>
  );
};

export default DeliveryScreen;
