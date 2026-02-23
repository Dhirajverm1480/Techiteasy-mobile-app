import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <View className="flex-1 items-center justify-center p-3">
      <Text className="text-3xl text-bold mb-3">
        Tech for Every Mind That Loves to Level Up.
      </Text>
      <Text className="text-bold">
        Whether you're gaming late, optimizing your setup, reading a great book,
        or exploring new software, we bring you the gear and tools that make
        every moment better.
      </Text>
      <View className="w-full flex-row justify-between my-4">
        <TouchableOpacity className="py-3 px-6 border">
          <Text className="text-bold text-md">Shop Now</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 px-6 border">
          <Text className="text-bold text-md">Explore More</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;
