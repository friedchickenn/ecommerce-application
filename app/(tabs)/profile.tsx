import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfileScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            logout();
            router.replace("/(auth)/login");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>My profile</Text>
        <TouchableOpacity style={styles.headerSearchWrap}>
          <Feather name="search" size={22} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileRow}>
        <Image source={require("../../assets/images/profile.jpg")}
          style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Matilda Brown</Text>
          <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <TouchableOpacity style={styles.menuItem}>
          <View>
            <Text style={styles.menuTitle}>My orders</Text>
            <Text style={styles.menuDesc}>Already have 12 orders</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#D8D8D8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View>
            <Text style={styles.menuTitle}>Shipping addresses</Text>
            <Text style={styles.menuDesc}>3 addresses</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#D8D8D8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View>
            <Text style={styles.menuTitle}>Payment methods</Text>
            <Text style={styles.menuDesc}>Visa **34</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#D8D8D8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View>
            <Text style={styles.menuTitle}>Promocodes</Text>
            <Text style={styles.menuDesc}>You have special promocodes</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#D8D8D8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View>
            <Text style={styles.menuTitle}>My reviews</Text>
            <Text style={styles.menuDesc}>Reviews for 4 items</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#D8D8D8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View>
            <Text style={styles.menuTitle}>Settings</Text>
            <Text style={styles.menuDesc}>Notifications, password</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#D8D8D8" />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.logoutContainer}>
        <CustomButton 
          title="LOGOUT" 
          onPress={handleLogout}
          style={styles.logoutButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 54,
    paddingBottom: 0,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  headerSearchWrap: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 18,
    marginTop: 18,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: "#eee",
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 15,
    color: "#9B9B9B",
    fontWeight: "500",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
    backgroundColor: "#fff",
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  menuDesc: {
    fontSize: 14,
    color: "#9B9B9B",
    fontWeight: "500",
  },
  logoutContainer: {
    marginBottom: 100, // Space for tab bar
  },
  logoutButton: {
    backgroundColor: "#FF6B6B",
  },
});