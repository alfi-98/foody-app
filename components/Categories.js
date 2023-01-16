import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from "/Users/alfi/Documents/SoftwareDev/React/foody/components/CategoryCard.js";

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* Categorie Card */}
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BA0uG_A-76UEcfujjvSsQgobdhw8GUXzMg&usqp=CAU" title="Testing"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_S3ePtyPrrt5bDYGpmcWR5aB7whewcnlVlQ&usqp=CAU" title="Testing"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8YUCurJ-_nV83P1TB91xqRRkpncFbbV_NQ&usqp=CAU" title="Testing"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9gCj672Qh28umVpza6QXodRPTKmeLB4lLg&usqp=CAU" title="Testing"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8YUCurJ-_nV83P1TB91xqRRkpncFbbV_NQ&usqp=CAU" title="Testing"/>
      
    </ScrollView>
  )
}

export default Categories