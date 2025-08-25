import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type Product = {
  id: string;
  name: string;
  price: number;
  image: any;
  discount?: number;
};

type Props = {
  product: Product;
  onPress?: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} />
      {product.discount && (
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>-{product.discount}%</Text>
        </View>
      )}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 140, margin: 8, borderRadius: 16, backgroundColor: "#fafafa", elevation: 2, padding: 8 },
  image: { width: "100%", height: 120, borderRadius: 12 },
  name: { fontWeight: "bold", fontSize: 16, marginVertical: 4 },
  price: { color: "#E53935", fontWeight: "bold", fontSize: 16 },
  discountTag: { position: "absolute", top: 8, left: 8, backgroundColor: "#E53935", borderRadius: 8, padding: 4 },
  discountText: { color: "#fff", fontSize: 12 },
});