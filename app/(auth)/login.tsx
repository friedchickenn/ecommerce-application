import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    if (!email.includes("@")) {
      setEmailError("Invalid email address");
      return;
    }
    
    setEmailError("");
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        router.replace("/(tabs)/home");
      } else {
        Alert.alert("Login Failed", "Invalid email or password");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
        placeholder="your@email.com"
      />
      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => router.push("/(auth)/forgot-password")}>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
      <CustomButton 
        title={isLoading ? "LOGGING IN..." : "LOGIN"} 
        onPress={handleLogin} 
        disabled={isLoading}
      />
      <Text style={styles.or}>Or login with social account</Text>
      <View style={styles.socialRow}>
        <SocialButton icon="google" />
        <SocialButton icon="facebook" />
      </View>
      <View style={styles.footerRow}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24, justifyContent: "center" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 24 },
  forgot: { color: "#E53935", alignSelf: "flex-end", marginVertical: 6 },
  or: { textAlign: "center", color: "#888", marginVertical: 14 },
  socialRow: { flexDirection: "row", justifyContent: "center", gap: 16 },
  footerRow: { flexDirection: "row", justifyContent: "center", marginTop: 16 },
  link: { color: "#E53935", fontWeight: "bold" },
});