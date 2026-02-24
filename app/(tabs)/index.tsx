import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { Banners } from "@/constants/constant";

const { width } = Dimensions.get("window");

const Home = () => {
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
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
