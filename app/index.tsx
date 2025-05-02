import Onboarding from "@/components/Onboarding";
import { Stack } from "expo-router";
import { View, Text } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFF",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <Onboarding />
    </View>
  );
}
