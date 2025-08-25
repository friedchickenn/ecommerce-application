import { Ionicons, MaterialCommunityIcons, MaterialIcons  } from "@expo/vector-icons";
import { Tabs, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function TabLayout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated]);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#E53935",
        tabBarInactiveTintColor: "#bbb",
        tabBarLabelStyle: { fontSize: 11, marginBottom: 0 },
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.07,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 10,
          elevation: 12,
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" size={32} color={focused ? "#E53935" : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="shopping-cart" size={28} color={focused ? "#E53935" : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarLabel: "Bag",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="bag" size={28} color={focused ? "#E53935" : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="heart" size={28} color={focused ? "#E53935" : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person" size={28} color={focused ? "#E53935" : color} />
          ),
        }}
      />
    </Tabs>
  );
}
