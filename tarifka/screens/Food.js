import { StyleSheet, Text, View , Button, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { color } from '../colors/colors';

import MealsComponents from '../components/MealsComponents'

const Food = ({route}) => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + route.params.name)
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => console.log(error.message))
  }, [])

  return (
    <ScrollView>
      <Text style={styles.categoryNameText}>{route.params.name}</Text>
      {
        meals.map(item => {
          return(
            <MealsComponents
              key={item.idMeal}
              id={item.idMeal}
              name={item.strMeal}
              image={item.strMealThumb}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default Food

const styles = StyleSheet.create({
  categoryNameText : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 10,
    marginLeft: 10,
    color: color.orange,
  }
})
