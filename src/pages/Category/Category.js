import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './Category.style'
import useFetch from '../../hooks/useFetch'
import CategoryComp from '../../component/CategoryComp'

const Category = ({ navigation, route }) => {
    const { category } = route.params;
    const { meals } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)

    const handleClick = categoryItem => navigation.navigate('Detail', { categoryItem });

    const renderCategory = ({ item }) => <CategoryComp categoryItem={item} goToDetail={() => handleClick(item)} />

    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderCategory} keyExtractor={(item) => item.idMeal} />
        </View>
    )
}

export default Category;