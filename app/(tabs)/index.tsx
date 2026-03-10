import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { Banners, Category } from "@/constants/constant";
import { useProduct } from "@/hooks/useProduct";

const { width } = Dimensions.get("window");

const Home = () => {
  const { products, loading } = useProduct();
  // console.log("Product::: ", products);
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-orange-300 animate-pulse">
          Loading...
        </Text>
        <Text className="text-3xl font-bold text-orange-300 animate-spin">
          |
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 2 }}
        initialNumToRender={10}
        ListEmptyComponent={
          <View className="items-center mt-10">
            <Text>No products found</Text>
          </View>
        }
        ListHeaderComponent={
          <View className="h-72 px-4 pt-2">
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
                <View
                  key={index}
                  className="py-3 px-3 bg-gray-300 mr-3 my-4 rounded-md"
                >
                  <TouchableOpacity>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity className="w-48 h-48 bg-gray-200 p-3 mx-2 rounded-lg mb-3 shadow-md">
            <Image
              source={{ uri: item.thumbnail as any }}
              className="w-16 h-16 rounded-md"
            />
            <View className="ml-3 flex-1">
              <Text className="font-bold">{item.title}</Text>
              <Text numberOfLines={2}>{item.description}</Text>
              <Text className="font-bold mt-1">${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
