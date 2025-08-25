import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export default function CustomButton({ title, onPress, style, textStyle, disabled = false }: Props) {
  return (
    <TouchableOpacity 
      style={[styles.button, disabled && styles.buttonDisabled, style]} 
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.textDisabled, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E53935",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  textDisabled: {
    color: "#999999",
  },
});