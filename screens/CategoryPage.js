import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import Header from '../src/Components/Header';
import RenderCategory from '../src/Components/RenderCategory';

function CategoryPage({ navigation }) {

    const [category, setCategory] = useState("EXPLORE")

    const genders = [
        "EXPLORE",
        "13 pro max",
        "13 pro",
        "13",
        "12 pro max",
        "12 pro",
        "12",
        "11 pro max",
        "11 pro",
        "11",
        "Xs max",
        "Xs",
        "XR",
        "X",
        "8 plus",
        "8",
        "7 plus",
        "7",
        "6s plus",
        "6s",
        "6 plus",
        "6",
    ]

    const renderItem = useCallback(
        ({ item }) => (
            <TouchableOpacity
                style={styles.category}
                onPress={() => setCategory(item)}
            >
                <Text style={[
                    styles.categoryText,
                    { color: category === item ? COLORS.black : COLORS.darkgray }
                ]} >
                    {`${item} Shoes `}
                </Text>
            </TouchableOpacity>
        ),
    )

    return (
        <SafeAreaView style={styles.container} >
            <Header navigation={navigation} />
            <View>
                <FlatList
                    data={genders}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                    key={(item, index) => 'key' + index}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingLeft: SIZES.padding * 2, marginBottom: 10 }}
                />
            </View>
            <View style={styles.categoryContainer} >
                <RenderCategory navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tetiary,
        justifyContent: 'space-between'
        // paddingVertical: SIZES.paddingLarge
    },
    category: {
        marginRight: SIZES.padding
    },
    categoryText: {
        ...FONTS.h5,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    categoryContainer: {
        paddingBottom: 110
    }
})

export default CategoryPage
