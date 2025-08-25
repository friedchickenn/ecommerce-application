import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categories = ["Summer", "T-Shirts", "Shirts"];
const products = [
  {
    brand: "LIME",
    name: "Shirt",
    color: "Blue",
    size: "L",
    price: 32,
    rating: 5,
    ratingCount: 10,
    image: require("../../assets/images/fv1.jpg"),
    badge: null,
    soldOut: false,
  },
  {
    brand: "Mango",
    name: "Longsleeve Violeta",
    color: "Orange",
    size: "S",
    price: 46,
    rating: 0,
    ratingCount: 0,
    image: require("../../assets/images/fv2.jpg"),
    badge: "NEW",
    soldOut: false,
  },
  {
    brand: "Olivier",
    name: "Shirt",
    color: "Gray",
    size: "L",
    price: 52,
    rating: 3,
    ratingCount: 3,
    image: require("../../assets/images/fv3.jpg"),
    badge: null,
    soldOut: false,
  },
  {
    brand: "8Berries",
    name: "T-Shirt",
    color: "Black",
    size: "S",
    price: 52,
    rating: 0,
    ratingCount: 0,
    image: require("../../assets/images/fv4.jpg"),
    badge: "-30%",
    soldOut: true,
  },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Favorites</Text>
        <TouchableOpacity style={styles.headerSearchWrap}>
          <Feather name="search" size={22} color="#222" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll} contentContainerStyle={styles.categoriesRow}>
          {categories.map((cat, idx) => (
            <TouchableOpacity key={cat} style={[styles.categoryBtn, idx === 0 ? { marginLeft: 0 } : { marginLeft: 12 }]}> 
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.filtersRowFinal}>
          <View style={styles.filterItemFinal}>
            <Feather name="sliders" size={20} color="#222" />
            <Text style={styles.filterLabelFinal}>Filters</Text>
          </View>
          <View style={styles.filterItemFinal}>
            <Feather name="arrow-up" size={20} color="#222" style={{ transform: [{ rotate: "180deg" }] }} />
            <Text style={styles.filterLabelFinal}>Price: lowest to high</Text>
          </View>
          <View style={styles.filterItemFinalGrid}>
            <Feather name="grid" size={20} color="#222" />
          </View>
        </View>
        <View style={styles.shadowLineWrap}>
          <View style={styles.shopShadowLineFixed} />
        </View>
        {products.map((item, idx) => (
          <View style={styles.productCardImgFull} key={idx}>
            <View style={styles.productImgWrapFull}>
              <Image source={item.image} style={styles.productImgNoBorder} />
            </View>
            <TouchableOpacity style={styles.closeBtnFull}>
              <Feather name="x" size={22} color="#D8D8D8" />
            </TouchableOpacity>
            <View style={styles.productInfoWrapFull}>
              <Text style={styles.productBrandFull}>{item.brand}</Text>
              <Text style={styles.productNameFull}>{item.name}</Text>
              <View style={styles.productMetaRowFull}>
                <Text style={styles.productMetaFull}>Color: <Text style={styles.productMetaBoldFull}>{item.color}</Text></Text>
                <Text style={styles.productMetaFull}>Size: <Text style={styles.productMetaBoldFull}>{item.size}</Text></Text>
              </View>
              <View style={styles.productBottomRowFull}>
                <Text style={styles.productPriceFull}>{item.price}$</Text>
                <View style={styles.ratingRowFull}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons key={i} name={i < item.rating ? "star" : "star-outline"} size={16} color={i < item.rating ? "#FFBA49" : "#E6E6E6"} />
                  ))}
                  {item.ratingCount > 0 && <Text style={styles.ratingCountFull}>({item.ratingCount})</Text>}
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.bagBtnFull}>
              <Feather name="shopping-bag" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
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
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    letterSpacing: -1,
  },
  headerSearchWrap: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  categoriesScroll: {
    marginTop: 8,
    marginBottom: 8,
  },
  categoriesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    paddingHorizontal: 18,
  },
  categoryBtn: {
    backgroundColor: "#222",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginRight: 6,
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  filtersRowFinal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
    paddingHorizontal: 12,
    marginBottom: 15,
    marginTop: 10,
  },
  filterItemFinal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  filterLabelFinal: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
    marginLeft: 4,
  },
  filterItemFinalGrid: {
    marginLeft: 'auto',
    flexDirection: "row",
    alignItems: "center",
  },
  shadowLineWrap: {
    width: '100%',
    height: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  shopShadowLineFixed: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
    opacity: 1,
    marginBottom: 25,
    marginTop: 9,
  },
  productCardImgFull: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    padding: 0,
    position: "relative",
    minHeight: 120,
    height: 120,
  },
  productImgWrapFull: {
    width: 120,
    height: 120,
    overflow: "hidden",
    marginRight: 18,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  productImgNoBorder: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfoWrapFull: {
    flex: 1,
    justifyContent: "center",
    minHeight: 96,
    height: 96,
    gap: 2,
  },
  productBrandFull: {
    fontSize: 13,
    color: "#9B9B9B",
    fontWeight: "700",
    marginBottom: 2,
  },
  productNameFull: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  productMetaRowFull: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 2,
  },
  productMetaFull: {
    fontSize: 13,
    color: "#9B9B9B",
    fontWeight: "500",
  },
  productMetaBoldFull: {
    color: "#222",
    fontWeight: "700",
  },
  productPriceFull: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  productBottomRowFull: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 2,
  },
  ratingRowFull: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
    marginTop: 0,
  },
  ratingCountFull: {
    fontSize: 12,
    color: "#9B9B9B",
    marginLeft: 4,
  },
  closeBtnFull: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 2,
    backgroundColor: "transparent",
    padding: 2,
  },
  bagBtnFull: {
    position: "absolute",
    right: 1,
    bottom:-11,
    backgroundColor: "#DB3022",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
});