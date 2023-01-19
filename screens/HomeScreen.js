import { View, Text , SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from "@react-navigation/native"
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon} from "react-native-heroicons/outline";
import Categories from '../components/Categories.js'
import FeaturedRow from '../components/FeaturedRow.js'
import sanityClient from "../sanity"
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategory, setFeaturedCategories] = useState()
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
    }, [])

    useEffect(() => {
       sanityClient.fetch(
           `
           *[_type == "featured"] {
            ...,
            restaurants[] -> {
              ...,
              dishes[] ->
                }
          }
           `
       ).then((data) => {
           setFeaturedCategories(data);
       })
    }, []);
    console.log(featuredCategory)

    return (
        <SafeAreaView className="bg-white pt-5">

                {/* Header */}
                <View className="flex-row pb-3 items-center max-4 space-x-2 p-4">
                    <Image
                        source={{
                            uri: "https://i.pinimg.com/originals/cf/67/25/cf6725d850f9e287da0172144805d88b.png"
                        }}
                        className="h-7  w-7 bg-purple-800 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                        <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB"/>
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00CCBB"/>
                </View>

                {/* Search */}
                <View className="flex-row items-center space-x-2 pb-2 px-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
                        <MagnifyingGlassIcon size={20} color="gray"/>
                        <TextInput placeholder="Resturaunts and cuisines"
                        keyboardType="default" 
                        length={100}
                        />
                    </View>
                    <AdjustmentsVerticalIcon size={20} color="#00CCBB"/>
                </View>

                {/* Body */}
                <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100}}>
                        {/* Categories */}
                        <Categories/>

                        {/* Featured Rows */}
                        {featuredCategory?.map(category => (
                            <FeaturedRow 

                                key={category._id}
                                id={category._id}
                                title={category.name}
                                description={category.short_description}

                            />
                        ))} 
                        
                        {/* Tasty Discounts */}
                        
                          {/* Offers near you*/}
                        
                </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen