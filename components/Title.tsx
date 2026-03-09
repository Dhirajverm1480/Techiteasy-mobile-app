import { View, Text } from 'react-native'
import React from 'react'

export default function Title({title}: {title: string}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export function SubTitle({subtitle} : {subtitle: string}) {
  return (
    <View>
      <Text>{subtitle}</Text>
    </View>
  )
}