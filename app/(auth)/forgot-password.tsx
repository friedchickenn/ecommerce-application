import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSend() {
    if (!email.includes("@")) {
      setEmailError("Not a valid email address. Should be your@email.com");
      return;
    }
    setEmailError("");
    // Implementasi kirim email reset di sini
    router.replace("/(auth)/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot password</Text>
      <Text style={styles.desc}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>
      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
        placeholder="your@email.com"
      />
      <CustomButton title="SEND" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 24, justifyContent: "center" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 24 },
  desc: { fontSize: 16, color: "#888", marginBottom: 16 },
});