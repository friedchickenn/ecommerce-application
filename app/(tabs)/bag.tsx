import { Feather } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const products = [
  {
    name: "Pullover",
    color: "Black",
    size: "L",
    price: 51,
    qty: 1,
    image: require("../../assets/images/bag1.jpg"),
  },
  {
    name: "T-Shirt",
    color: "Gray",
    size: "L",
    price: 30,
    qty: 1,
    image: require("../../assets/images/bag2.jpg"),
  },
  {
    name: "Sport Dress",
    color: "Black",
    size: "M",
    price: 43,
    qty: 1,
    image: require("../../assets/images/product6.jpg"),
  },
];

export default function BagScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>My Bag</Text>
        </View>
        <TouchableOpacity style={styles.headerSearchWrap}>
          <Feather name="search" size={22} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerSpacer} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        {products.map((item, idx) => (
          <View style={styles.productRow} key={idx}>
            <Image source={item.image} style={styles.productImgLeft} />
            <View style={styles.productCardRight}>
              <TouchableOpacity style={styles.menuBtnRight}>
                <Feather name="more-horizontal" size={22} color="#9B9B9B" />
              </TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.productMetaRow}>
                <Text style={styles.productMeta}>Color: {item.color}</Text>
                <Text style={styles.productMeta}>Size: {item.size}</Text>
              </View>
              <View style={styles.qtyRow}>
                <TouchableOpacity style={styles.qtyBtn}><Feather name="minus" size={20} color="#9B9B9B" /></TouchableOpacity>
                <Text style={styles.qtyText}>{item.qty}</Text>
                <TouchableOpacity style={styles.qtyBtn}><Feather name="plus" size={20} color="#9B9B9B" /></TouchableOpacity>
              </View>
              <Text style={styles.productPriceRight}>{item.price}$</Text>
            </View>
          </View>
        ))}
        <View style={styles.promoRow}>
          <TextInput style={styles.promoInput} placeholder="Enter your promo code" placeholderTextColor="#9B9B9B" />
          <TouchableOpacity style={styles.promoBtn}><Feather name="arrow-right" size={22} color="#fff" /></TouchableOpacity>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total amount:</Text>
          <Text style={styles.totalValue}>124$</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>CHECK OUT</Text>
        </TouchableOpacity>
      </ScrollView>
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
  headerTitleWrap: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  headerSpacer: {
    height: 18,
  },
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginBottom: 22,
    height: 120,
  },
  productImgLeft: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: "cover",
  },
  productCardRight: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    height: 120,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    position: "relative",
    justifyContent: "center",
  },
  menuBtnRight: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
    padding: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
    marginTop: 2,
  },
  productMetaRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
  },
  productMeta: {
    fontSize: 13,
    color: "#9B9B9B",
    fontWeight: "500",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    minWidth: 24,
    textAlign: "center",
  },
  productPriceRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  promoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginBottom: 18,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  promoInput: {
    flex: 1,
    fontSize: 16,
    color: "#222",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  promoBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginBottom: 18,
  },
  totalLabel: {
    fontSize: 16,
    color: "#9B9B9B",
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 20,
    color: "#222",
    fontWeight: "700",
  },
  checkoutBtn: {
    backgroundColor: "#DB3022",
    borderRadius: 50,
    marginHorizontal: 18,
    marginTop: 8,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});