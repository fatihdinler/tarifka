import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CategoriesComponents from '../components/CategoriesComponents';


const Categories = () => {

  const [categoriesData, setCategoriesData] = useState([]);


  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        setCategoriesData(response.data.categories);
        console.log(categoriesData);
      })
      .catch(error => console.log(error.message))

  }, [])


  return (
    <ScrollView>
      {
        categoriesData.map((item, key) => {
          return (
            <CategoriesComponents
              key={item.idCategory}
              name={item.strCategory}
              image={item.strCategoryThumb}
              description={item.strCategoryDescription}
              data={item}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})