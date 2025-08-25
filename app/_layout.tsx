import { Stack } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function ProtectedLayout() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#E53935" />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="product" />
    </Stack>
  );
}

export default function Layout() {
  return (
    <AuthProvider>
      <ProtectedLayout />
    </AuthProvider>
  );
}