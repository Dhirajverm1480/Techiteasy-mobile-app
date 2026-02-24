import { View, Text, Pressable} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';

const Header = () => {
  return (
    <View className='p-3 flex-row justify-between items-center bg-white rounded-md mx-1'>
      <Text className='text-3xl text-bold'>TechITEasy</Text>
      <Pressable>
          <Ionicons name="search" size={24} color="black" />
      </Pressable>
      <Pressable>
          <Ionicons name="heart" size={24} color="red" />
      </Pressable>
      <Pressable>
          <Ionicons name="menu" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Header