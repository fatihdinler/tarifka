import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

import MealDetails from '../components/MealDetails'

const Meal = ({route}) => {

  const [data, setData] = useState([]);
  let ingredients = [];

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + route.params.id)
      .then(response => {
        setData(response.data.meals);
      })
      .catch(error => console.log(error.message))
  }, [])

  return (
    <ScrollView>
      {/* <Button
        title='Fetch'
        onPress={() => console.log(data)}
      /> */}
      {
        data.map(item => {
          return(
            <MealDetails
              data={item}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default Meal

const styles = StyleSheet.create({
})