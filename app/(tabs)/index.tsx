import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "@/components/hero";
import Header from "@/components/Header";

const Home = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header />
      {/* <Hero /> */}
    </SafeAreaView>
  );
};

export default Home;
