import React from "react";
import { Tabs } from "expo-router";
import {Ionicons, Feather} from "@expo/vector-icons";

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
          tabBarIcon: ({color, focused}) => <Ionicons name={focused? 'home': 'home-outline'} size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: "product",
          headerShown: false,
          tabBarIcon: ({color, focused}) => <Feather name={focused? 'box': 'box'} size={24} color={color} />
        }}
      />
      <Tabs.Screen
      name="cart"
      options={{
        title: "cart",
        headerShown: false,
        tabBarIcon: ({color, focused}) => <Feather name={focused? 'shopping-cart': 'shopping-cart'} size={24} color={color} />
      }} />
      <Tabs.Screen
        name="about"
        options={{
          title: "about",
          headerShown: false,
          tabBarIcon: ({color, focused}) => <Ionicons name={focused? 'information-circle': 'information-circle-outline'} size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "contact",
          headerShown: false,
          tabBarIcon: ({color, focused}) => <Ionicons name={focused? 'call': 'call-outline'} size={24} color={color} />
        }}
      />
    </Tabs>
  );
};

export default _layout;
