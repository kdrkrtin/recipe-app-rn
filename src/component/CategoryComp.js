import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './CategoryComp.style'

const CategoryComp = ({ categoryItem, goToDetail }) => {
    return (
        <TouchableWithoutFeedback onPress={goToDetail}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={{ uri: categoryItem.strMealThumb }} />
                </View>
                <View style={styles.name_container}>
                    <Text style={styles.name}>{categoryItem.strMeal}</Text>
                    <View style={styles.bgOpacity}></View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryComp;