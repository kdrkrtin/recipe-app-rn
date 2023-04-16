import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './CategoriesComp.style'

const CategoriesComp = ({ category, goToCategory }) => {
    return (
        <TouchableWithoutFeedback onPress={goToCategory}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={{ uri: category.strCategoryThumb }} />
                </View>
                <View style={styles.name_container}>
                    <Text style={styles.name}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesComp;