import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Food = ({route}) => {

  return (
    <View>
      <Text>{route.params.idCategory}</Text>
    </View>
  )
}

export default Food

const styles = StyleSheet.create({})
