import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import Test from "../components/Test";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="px-3 pb-4 bg-white">
        <Text className="font-bold text-3xl pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1 pt-2">
          <StarIcon color="green" opacity={0.5} />
          <Text className="text-x text-gray-500">
            <Text className="green">{rating} </Text>. {genre}
          </Text>
          <MapPinIcon color="gray" opacity={0.3} />
          <Text className="text-x text-gray-500">Nearby . {address}</Text>
        </View>
        <Text className="text-gray-500 pt-3 pb-4 pl-1">
          {short_description}
        </Text>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/*Dishes Row*/}
        {dishes?.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}


      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
