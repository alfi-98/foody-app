import { View, Text , SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from "@react-navigation/native"
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon} from "react-native-heroicons/outline";
import Categories from '../components/Categories.js'
import FeaturedRow from '../components/FeaturedRow.js'
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
    }, [])

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
                <View className="items-center space-x-2 pb-2 px-4">
                    <View className="bg-gray-200 p-3 ">
                        <TextInput placeholder="Resturaunts and cuisines"
                        keyboardType="default" 
                        />
                    </View>
                </View>

                {/* Body */}
                <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100}}>
                        {/* Categories */}
                        <Categories/>

                        {/* Featured Rows */}
                        <FeaturedRow
                            id="123"                            
                            title="Featured"
                            description="Paid placements from our partners"
                            featuredCategory="featured"
                        />
                        {/* Tasty Discounts */}
                         <FeaturedRow
                            id="124"
                            title="Tasty Discounts"
                            description="Everyones been enjoying these juicy discounts!"
                            featuredCategory="discounts"
                        />
                          {/* Offers near you*/}
                         <FeaturedRow
                            id="125"                          
                            title="Offers near you!"
                            description="Why not support your local resturaunt tonight"
                            featuredCategory="offers"
                        />
                </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen