import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const MealsComponents = ({ id, name, image }) => {

    const navigation = useNavigation();

    const navigateToMeals = () => {
        navigation.navigate("MealScreen", {
            id : id,
            name : name,
            image : image,
        })
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={navigateToMeals}
        >
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MealsComponents

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginLeft: 10,
        marginRight: 15,
        marginTop: 15,

    },
    innerContainer: {
        flexDirection: 'row',

    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'center',
        borderRadius: 8,
    },
    textContainer: {
        maxWidth: '70%',
        justifyContent: 'center',
        marginLeft: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: '300',
        color: 'gray',
    },
})