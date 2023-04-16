import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch';

const Detail = ({ route }) => {
    const { categoryItem } = route.params;
    const { meals } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoryItem.idMeal}`)

    const goToYotube = (url) => {
        Linking.canOpenURL(url).then(supported => {
            supported && Linking.openURL(url);
        })
    }

    const renderDetail = ({ item }) => {

        return (
            <View>
                <View>
                    <Image style={styles.img} source={{ uri: item.strMealThumb }} />
                </View>
                <View style={styles.name_container}>
                    <Text style={styles.name}>{item.strMeal}</Text>
                    <Text style={styles.desc}>{item.strInstructions}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.ytpButton} onPress={() => goToYotube(item.strYoutube)}>
                        <Text style={styles.ytpText}>Watch on Youtube</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderDetail} />
        </View>
    )
}

export default Detail;