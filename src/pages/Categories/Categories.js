import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './Categories.style'
import useFetch from '../../hooks/useFetch'
import CategoriesComp from '../../component/CategoriesComp'

const Categories = ({ navigation }) => {
    const { categories } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    const handleClick = category => navigation.navigate('CategoryPage', { category });

    const renderCategories = ({ item }) => <CategoriesComp category={item} goToCategory={() => handleClick(item)} />

    return (
        <View style={styles.container}>
            <FlatList data={categories} renderItem={renderCategories} keyExtractor={(item) => item.idCategory} />
        </View>
    )
}

export default Categories;