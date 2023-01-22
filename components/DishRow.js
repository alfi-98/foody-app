import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ key, id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 flex-row justify-between ${
          isPressed && "border-b-0"
        }`}
      >
        <View>
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-500 mb-2">{description}</Text>
          <Text className="text-gray-500 mb-1">$ {price}</Text>
        </View>
        <View>
          <Image
            style={{
              borderRadius: 10,
            }}
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3 pt-3">
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "#D3D3D3"}
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
