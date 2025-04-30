import { View, FlatList } from 'react-native'
import React from 'react'
import OnboardingIten from './OnboardingIten'

import slides from '../slides'

export default function Onboarding() {
    return (
        <View>
            <FlatList data={slides} renderItem={({ item }) => <OnboardingIten item={item} />} />
        </View>
    )
}