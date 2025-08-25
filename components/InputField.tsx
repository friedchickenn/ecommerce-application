import { View, TextInput, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
};

export default function InputField({ label, value, onChangeText, placeholder, secureTextEntry, error }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { marginBottom: 5, color: "#888", fontSize: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fafafa",
    padding: 12,
    fontSize: 16,
  },
  inputError: { borderColor: "#E53935" },
  error: { color: "#E53935", fontSize: 12, marginTop: 2 },
});