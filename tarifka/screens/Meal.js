import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

const Meal = ({route}) => {

  useEffect(() => {
    console.log(route)
  }, [])

  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default Meal

const styles = StyleSheet.create({})