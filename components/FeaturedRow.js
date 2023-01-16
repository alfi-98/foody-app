import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCards from "/Users/alfi/Documents/SoftwareDev/React/foody/components/RestaurantCards.js";

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon />
        </View>
        <Text className="px-4 text-gray-400">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* RestaurantCards Cards */}
            <RestaurantCards
                 id= {123}
                 imgUrl= "https://static.vecteezy.com/system/resources/previews/005/069/906/non_2x/japanese-food-sushi-illustration-vector.jpg"
                 title= "Yo Sushi"
                 rating={4,5}
                 genre="Japanese"
                 address="123 Main st"
                 short_description="This is a test descrip"
                 dishes={[]}
                 long={20}
                 lat={0}
            />
            <RestaurantCards
                 id= {123}
                 imgUrl= "https://static.vecteezy.com/system/resources/previews/005/069/906/non_2x/japanese-food-sushi-illustration-vector.jpg"
                 title= "Yo Sushi"
                 rating={4,5}
                 genre="Japanese"
                 address="123 Main st"
                 short_description="This is a test descrip"
                 dishes={[]}
                 long={20}
                 lat={0}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow