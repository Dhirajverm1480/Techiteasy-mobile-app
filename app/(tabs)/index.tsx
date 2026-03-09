import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { Banners, Category } from "@/constants/constant";
import Title from "@/components/Title";

const { width } = Dimensions.get("window");

type Product = {
  id: number,
  title: String,
  price: number,
  thumbnail: String,
  description: String,
}

type productResponse = {
  products: Product[]
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  // "https://dummyjson.com/products"
  const fetchData = async () => {
    try {
      const response = await axios.get<productResponse>("https://dummyjson.com/products");
      setProducts(response.data.products)
      // console.log("Res : ", response.data.products)
    } catch (error) {
      console.log("Fetch Err : ", error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header />
      <ScrollView className="flex-1 px-4 pt-2">
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="w-full h-48 rounded-xl"
          scrollEventThrottle={18}
        >
          {Banners.map((item) => (
            <View
              key={item.id}
              className="relative w-full h-48 bg-gray-200 overflow-hidden"
              style={{ width: width - 28 }}
            >
              <Image
                source={item.image_url as any}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-4 left-4 z-10">
                <Text className="text-white text-2xl font-bold">
                  {item.title}
                </Text>
                <Text className="text-white text-sm font-medium">
                  {item.subtitle}
                </Text>
                <TouchableOpacity className="mt-2 bg-white px-4 py-2 rounded-full self-start">
                  <Text className="text-black text-xs font-bold">
                    {item.cta_text}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="absolute inset-0 bg-black/40" />
            </View>
          ))}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Category.map((item, index) => (
            <View key={index} className="py-3 px-3 bg-gray-300 mr-3 my-4 rounded-md">
              <TouchableOpacity>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Title title={"Latest Product"} />
        {products.map((item) => (
  <TouchableOpacity
    key={item.id}
    className="bg-gray-200 p-3 rounded-lg mb-3 flex-row"
  >
    <Image
      source={{ uri: item.thumbnail }}
      className="w-16 h-16 rounded-md"
    />

    <View className="ml-3 flex-1">
      <Text className="font-bold">{item.title}</Text>
      <Text numberOfLines={2}>{item.description}</Text>
      <Text className="font-bold mt-1">${item.price}</Text>
    </View>
  </TouchableOpacity>
))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
