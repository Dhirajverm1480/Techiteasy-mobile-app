import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#CDCDE0",
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          height: 56,
          paddingTop: 4,
          paddingBottom:4,
          margin: 6,
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
      name="product"
      options={{
        title:"product",
        headerShown: false
      }} />
      <Tabs.Screen
        name="about"
        options={{
          title: "about",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "contact",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
