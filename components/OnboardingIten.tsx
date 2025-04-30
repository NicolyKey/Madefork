import { View, Image, useWindowDimensions, ImageSourcePropType, StyleSheet, Text } from 'react-native'
import React from 'react'

interface Slide {
    id: String,
    description: String,
    image: ImageSourcePropType,
}

interface Props {
    item: Slide;
}

export default function OnboardingIten({ item }: Props) {
    const { width } = useWindowDimensions();

    return (
        <View style={{ width }}>
            <Image source={item.image} style={styles.image} />

            <View style={{ flex: 0.5 }}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 0.5,
        width: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    description: {
        fontWeight: '900',
        fontSize: 25,
        width: '90%',
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center'
    }
})