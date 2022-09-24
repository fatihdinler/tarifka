import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const CategoriesComponents = (props) => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log(props.data);
  }, [])

  const handlePress = () => {
    navigation.navigate("FoodScreen", {
      name : props.name,
      idCategory : props.idCategory,
      description : props.description
    })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <View style={styles.card}>
        <Text style={styles.name}>{props.name}</Text>
        <Image
          source={{ uri: props.image }}
          style={styles.image}
        />
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoriesComponents

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  card: {
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 8,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 10,
    marginLeft: 10,
    color: "#DAA42E"
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  description: {
    fontWeight: '300',
    padding: 15
  }
})