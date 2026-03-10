import { View, Text } from 'react-native'
import React from 'react'
import { useProduct } from '@/hooks/useProduct'

const about = () => {
  const {products, loading} = useProduct()
  if(loading) return <p>....Loading....</p>
  return (
    <View>
      {
        products.map((item) => (
          <View key={item._id}>{item.title}</View>
        ))
      }
    </View>
  )
}

export default about