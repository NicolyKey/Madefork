import React, { useState, useRef } from 'react'
import { View, FlatList, Animated, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { router } from 'expo-router'
import OnboardingIten from './OnboardingIten'

import slides from '../slides'
import Paginator from './Paginator';

export default function Onboarding() {

    const handlePress = () => {
        router.push('/login');
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const flatListRef = useRef<FlatList>(null);

    const handleSkip = () => {
        flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
    };

    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    ref={flatListRef}
                    data={slides}
                    renderItem={({ item }) => <OnboardingIten item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                />

            </View>
            <View >
                <TouchableOpacity
                    style={styles.button}
                    onPress={currentIndex === slides.length - 1 ? handlePress : handleSkip}
                >
                    <Text style={{ color: "#FFF", alignSelf: 'center' }}>
                        {currentIndex === slides.length - 1 ? "Get Started" : "Skip"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
                <Paginator data={slides} scrollX={scrollX} />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    button: {
        fontWeight: '600',
        fontSize: 30,
        width: 200,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: "#211C84",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})