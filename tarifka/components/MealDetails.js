import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react';
import { color } from '../colors/colors';

const MealDetails = ({ data }) => {
    useEffect(() => {
        console.log(data);
    }, [])
    return (
        <View>
            <Text style={styles.name}>{data.strMeal}</Text>
            <Text style={styles.area}>{data.strArea}</Text>
            <Image
                source={{
                    uri: data.strMealThumb
                }}
                style={styles.image}
            />
            <View style={styles.ingredients}>
                <Text style={styles.ingredientsText}>Ingredients</Text>
                <View style={{ flexDirection: 'column' }}>
                    {
                        data.strMeasure1 && data.strIngredient1
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient1 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure1 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure2 && data.strIngredient2
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient2 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure2 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure3 && data.strIngredient3
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient3 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure3 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure4 && data.strIngredient4
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient4 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure4 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure5 && data.strIngredient5
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient5 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure5 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure6 && data.strIngredient6
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient6 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure6 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure7 && data.strIngredient7
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient7 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure7 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure8 && data.strIngredient8
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient8 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure8 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure9 && data.strIngredient9
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient9 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure9 + " )"} </Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure1 && data.strIngredient1
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient10 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure10 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure11 && data.strIngredient11
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient11 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure11 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure12 && data.strIngredient12
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient12 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure12 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure13 && data.strIngredient13
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient13 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure13 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure14 && data.strIngredient14
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient14 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure14 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure15 && data.strIngredient15
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient15 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure15 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure16 && data.strIngredient16
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient16 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure16 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure17 && data.strIngredient17
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient17 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure17 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure18 && data.strIngredient18
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient18 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure18 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure19 && data.strIngredient19
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient19 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure19 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        data.strMeasure20 && data.strIngredient20
                            ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.strIngredient}>{data.strIngredient20 + "  "}</Text>
                                <Text style={styles.strMeasure}>{"( " + data.strMeasure20 + " )"}</Text>
                            </View>
                            :
                            null
                    }
                </View>

            </View>
            <View style={styles.instructionContainer}>
                <Text style={styles.howTo}>How to ?</Text>
                <Text style={styles.instruction}>{data.strInstructions}</Text>
            </View>

        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        resizeMode: 'center',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 15,
    },
    instructionContainer: {
        marginLeft : 15,
        marginRight : 15,
        padding : 5,
        backgroundColor : 'white',
        borderRadius : 8,
        marginTop : 10,
    },
    instruction: {
        fontSize: 15,
        fontWeight: '300',
        padding: 5,
    },
    howTo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 10,
        marginTop: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
        marginTop: 10,
        marginLeft: 10,
        color: color.orange,
    },
    area: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        marginLeft: 10,
        color: "gray"
    },
    ingredients: {
        marginLeft: 15,
        marginTop: 20,
        marginRight : 18,
        backgroundColor : 'white',
        padding : 5,
        borderRadius : 8,

    },
    ingredientsText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 10,
    },
    strIngredient: {
        fontSize: 15,
        fontWeight: '300',
    },
    strMeasure: {
        fontSize: 15,
        fontWeight: '200'
    },

})