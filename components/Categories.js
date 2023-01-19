import { View, Text, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import CategoryCard from "/Users/imac/Documents/alfiDev/Foody/foody-app/components/CategoryCard.js";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
   sanityClient.fetch(`
   *[_type == "category"] 
 
   `)
   .then((data) => {
    setCategories(data)
   })
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categorie Card */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
