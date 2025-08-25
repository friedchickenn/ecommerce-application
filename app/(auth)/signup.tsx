import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUpScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUp() {
    if (!email.includes("@")) {
      setEmailError("Invalid email address");
      return;
    }
    
    setEmailError("");
    setIsLoading(true);
    
    try {
      // In a real app, you would make a signup API call here
      // For now, we'll just simulate successful signup and login
      const success = await login(email, password);
      if (success) {
        router.replace("/(tabs)/home");
      } else {
        Alert.alert("Signup Failed", "Something went wrong. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <InputField
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Your name"
      />
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
      <View style={styles.footerRow}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      <CustomButton 
        title={isLoading ? "SIGNING UP..." : "SIGN UP"} 
        onPress={handleSignUp}
        disabled={isLoading}
      />
      <Text style={styles.or}>Or sign up with social account</Text>
      <View style={styles.socialRow}>
        <SocialButton icon="google" />
        <SocialButton icon="facebook" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24, justifyContent: "center" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 24 },
  or: { textAlign: "center", color: "#888", marginVertical: 14 },
  socialRow: { flexDirection: "row", justifyContent: "center", gap: 16 },
  footerRow: { flexDirection: "row", justifyContent: "center", marginTop: 16 },
  link: { color: "#E53935", fontWeight: "bold" },
});