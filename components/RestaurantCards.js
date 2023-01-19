import { View, Text,TouchableOpacity ,Image } from 'react-native'
import React from 'react'
import {StarIcon, MapPinIcon} from "react-native-heroicons/solid";
import { urlFor } from '../sanity';

const RestaurantCards = ({
  id, 
  imgUrl, 
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5}/>
          <Text className="text-xs text-gray-500">
            <Text className="green">{rating} </Text>
             . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2 pt-2">
          <MapPinIcon color="green" opacity={0.3}/>

          <Text>Nearby  .  {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards