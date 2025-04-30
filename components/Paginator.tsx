import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Paginator({ data, scrollX }: any) {
    const { width } = useWindowDimensions();

    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_: any, i: any) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                })

                return <Animated.View style={[styles.dots, { width: dotWidth }]} key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#000",
        marginHorizontal: 8
    },
})