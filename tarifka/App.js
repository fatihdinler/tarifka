import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Food from './screens/Food';
import Categories from './screens/Categories';

export default function App() {

  const Stack = createNativeStackNavigator();

  const StackNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FoodScreen"
          component={Food}
          options={{
            headerShown : false,
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MainScreen'
          component={StackNavigation}
          options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#DAA42E' },
            headerLeft: () => {
              return (
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ fontWeight: '300', fontSize: 25, color: 'white' }}>tarif</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>ka</Text>
                </View>
              )
            },
            headerRight: () => {
              return (
                <View style={{ justifyContent: 'center', position: 'absolute', right: 2, }}>
                  <Ionicons name="ios-fast-food-outline" size={24} color="white" />
                </View>
              )
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
