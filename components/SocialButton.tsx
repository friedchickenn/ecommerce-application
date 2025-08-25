import { TouchableOpacity, Image, StyleSheet } from "react-native";

const icons = {
  google: require("../assets/icons/google.webp"),
  facebook: require("../assets/icons/facebook.png"),
};

type Props = {
  icon: "google" | "facebook";
  onPress?: () => void;
};

export default function SocialButton({ icon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={icons[icon]} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 8,
  },
  icon: { width: 32, height: 32 },
});