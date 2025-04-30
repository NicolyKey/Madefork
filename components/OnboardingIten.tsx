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
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 0.7,
        justifyContent: 'center'
    },
    description: {
        fontWeight: '300',
        color: '#000',
        textAlign: 'center'
    }
})