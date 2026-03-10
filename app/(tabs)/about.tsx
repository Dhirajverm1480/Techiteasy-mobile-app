import { View, Text } from "react-native";
import React from "react";
import { useProduct } from "@/hooks/useProduct";

const about = () => {
  const { products, loading } = useProduct();
  console.log("Product::: ", products);
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      {products.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default about;
