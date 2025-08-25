import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const bannerImg = require("../../assets/images/banner1.jpg");
const streetImg = require("../../assets/images/street.jpg");
const newCollectionImg = require("../../assets/images/newcollection.jpg");
const promo1Img = require("../../assets/images/summersale.jpg");
const hoodieImg = require("../../assets/images/menhodies.jpg");
const blackImg = require("../../assets/images/black.jpg");

const saleProducts = [
  {
    id: "1",
    name: "Evening Dress",
    brand: "Dorothy Perkins",
    price: 15,
    oldPrice: 20,
    rating: 5,
    review: 10,
    discount: 20,
    image: require("../../assets/images/product4.jpg"),
    isFavorite: true,
  },
  {
    id: "2",
    name: "Sport Dress",
    brand: "Sitlly",
    price: 22,
    oldPrice: 30,
    rating: 5,
    review: 10,
    discount: 15,
    image: require("../../assets/images/product5.jpg"),
    isFavorite: false,
  },
  {
    id: "3",
    name: "Sport T-Shirt",
    brand: "Mango",
    price: 18,
    oldPrice: 25,
    rating: 5,
    review: 5,
    discount: 30,
    image: require("../../assets/images/product6.jpg"),
    isFavorite: true,
  },
];

const newProducts = [
  {
    id: "1",
    name: "T-Shirt Sailing",
    brand: "Dorothy Perkins",
    price: 105,
    tag: "NEW",
    image: require("../../assets/images/product1.jpg"),
  },
  {
    id: "2",
    name: "T-Shirt Classic",
    brand: "Sitlly",
    price: 99,
    tag: "NEW",
    image: require("../../assets/images/product2.jpg"),
  },
  {
    id: "3",
    name: "Casual Shirt",
    brand: "Mango",
    price: 85,
    tag: "NEW",
    image: require("../../assets/images/product3.jpg"),
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
  <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 0 }}>
        {/* Banner Fashion Sale */}
        <View style={styles.bannerContainer}>
          <Image source={bannerImg} style={styles.bannerImg} />
          <View style={styles.bannerOverlay} />
          <View style={styles.bannerTextWrap}>
            <Text style={styles.bannerTitle}>Fashion{'\n'}sale</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Check</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* New Product Section */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>New</Text>
            <Text style={styles.sectionDesc}>You've never seen it before!</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>View all</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={newProducts}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.productCard}
              onPress={() => router.push(`/product/${item.id}`)}
            >
              <View style={styles.productImageContainer}>
                <Image source={item.image} style={styles.productImg} />
                <View style={styles.productTagWrap}>
                  <Text style={styles.productTag}>{item.tag}</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name="heart-outline" size={16} color="#9B9B9B" />
                </TouchableOpacity>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productBrand}>{item.brand}</Text>
                <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 8, marginBottom: 24 }}
        />

        {/* Street Clothes Section */}
        <View style={styles.streetContainer}>
          <Image source={streetImg} style={styles.streetImg} />
          <View style={styles.streetOverlay} />
          <Text style={styles.streetTitle}>Street clothes</Text>
        </View>

        {/* Sale Section */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Sale</Text>
            <Text style={styles.sectionDesc}>Super summer sale</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>View all</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={saleProducts}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.productCardSale}
              onPress={() => router.push(`/product/${item.id}`)}
            >
              <View style={styles.productImageContainer}>
                <Image source={item.image} style={styles.productImgSale} />
                <View style={styles.discountTag}>
                  <Text style={styles.discountText}>-{item.discount}%</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons 
                    name={item.isFavorite ? "heart" : "heart-outline"} 
                    size={16} 
                    color={item.isFavorite ? "#DB3022" : "#9B9B9B"} 
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.productInfo}>
                <View style={styles.productRatingRow}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons 
                      key={i} 
                      name="star" 
                      size={14} 
                      color={i < item.rating ? "#FFBA49" : "#E6E6E6"} 
                    />
                  ))}
                  <Text style={styles.ratingText}>({item.review})</Text>
                </View>
                <Text style={styles.productBrandSale}>{item.brand}</Text>
                <Text style={styles.productNameSale} numberOfLines={1}>{item.name}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.newPrice}>${item.price}</Text>
                  <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 8, marginBottom: 24 }}
        />

        {/* Main 3 Section (Grid Promo) */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridTop}>
            <Image source={newCollectionImg} style={styles.gridImgTop} />
            <Text style={styles.gridTextTop}>New collection</Text>
          </TouchableOpacity>
          
          <View style={styles.gridBottomRow}>
            <View style={styles.gridLeft}>
              <TouchableOpacity style={styles.gridItemLeft1}>
                <Image source={promo1Img} style={styles.gridImgLeft1} />
                <Text style={styles.gridTextLeft1}>Summer{'\n'}sale</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.gridItemLeft2}>
                <Image source={blackImg} style={styles.gridImgLeft2} />
                <Text style={styles.gridTextLeft2}>Black</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.gridRight}>
              <Image source={hoodieImg} style={styles.gridImgRight} />
              <Text style={styles.gridTextRight}>Men's{'\n'}hoodies</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom spacing for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F9F9F9" 
  },

  // Banner Styles
  bannerContainer: { 
    width: "100%", 
    height: 650, // lebih panjang
    position: "relative", 
    marginBottom: 0, 
    marginTop: 0,
    backgroundColor: "#fff",
  },
  bannerImg: { 
    width: "100%", 
    height: "100%", 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0 
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  bannerTextWrap: { 
    position: "absolute", 
    bottom: 40, // geser agar proporsional dengan banner lebih panjang
    left: 16 
  },
  bannerTitle: { 
    color: "#fff", 
    fontSize: 60, 
    fontWeight: "900", 
    marginBottom: 22,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bannerButton: { 
    backgroundColor: "#DB3022", 
    borderRadius: 25, 
    paddingHorizontal: 70, 
    paddingVertical: 14, 
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bannerButtonText: { 
    color: "#fff", 
    fontWeight: "500", 
    fontSize: 14 
  },

  // Section Header
  sectionHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "flex-start", 
    marginHorizontal: 16, 
    marginTop: 34, 
    marginBottom: 4 
  },
  sectionTitle: { 
    fontSize: 34, 
    fontWeight: "900", 
    color: "#222",
    letterSpacing: 0.3,
  },
  sectionLink: { 
    color: "#222", 
    fontSize: 11, 
    marginTop: 12,

  },
  sectionDesc: { 
    color: "#9B9B9B", 
    fontSize: 11, 
    marginLeft: 2, 
    marginBottom: 20,
    letterSpacing: 0.3,
  },

  // Product Card Styles
  productCard: { 
    width: 148, 
    marginRight: 16, 
    marginLeft: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  productImageContainer: {
    position: "relative",
    marginBottom: 7,
  },
  productImg: { 
    width: "100%", 
    height: 184, 
    backgroundColor: "#F9F9F9" 
  },
  productTagWrap: { 
    position: "absolute", 
    top: 8, 
    left: 8, 
    backgroundColor: "#222", 
    borderRadius: 29, 
    paddingHorizontal: 8, 
    paddingVertical: 6 
  },
  productTag: { 
    color: "#fff", 
    fontSize: 11, 
    fontWeight: "600" 
  },
  favoriteButton: {
    position: "absolute",
    bottom: -12,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 4,
  },
  productInfo: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  productBrand: { 
    color: "#9B9B9B", 
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  productName: { 
    fontWeight: "600", 
    fontSize: 16, 
    color: "#222", 
    marginTop: 5,
    marginBottom: 10,
    lineHeight: 20,
  },
  productPrice: { 
    color: "#DB3022", 
    fontWeight: "600", 
    fontSize: 14 
  },

  // Street Clothes Banner
  streetContainer: { 
    marginHorizontal: 0, 
    marginTop: 10, 
    marginBottom: 0, 
    position: "relative" 
  },
  streetImg: { 
    width: "100%", 
    height: 210, 
  },
  streetOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  streetTitle: { 
    position: "absolute", 
    bottom: 16, 
    left: 14, 
    color: "#fff", 
    fontSize: 40, 
    fontWeight: "900",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  // Product Card Sale
  productCardSale: { 
    width: 148, 
    marginRight: 16,
    marginLeft: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  productImgSale: { 
    width: "100%", 
    height: 184, 
    backgroundColor: "#F9F9F9" 
  },
  discountTag: { 
    position: "absolute", 
    top: 8, 
    left: 8, 
    backgroundColor: "#DB3022", 
    borderRadius: 29, 
    paddingHorizontal: 8, 
    paddingVertical: 6 
  },
  discountText: { 
    color: "#fff", 
    fontSize: 11, 
    fontWeight: "600" 
  },
  productBrandSale: { 
    color: "#9B9B9B", 
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  productNameSale: { 
    fontWeight: "600", 
    fontSize: 16, 
    color: "#222", 
    marginTop: 5,
    lineHeight: 20,
  },
  productRatingRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 5, 
    marginBottom: 8 
  },
  ratingText: { 
    color: "#9B9B9B", 
    fontSize: 10, 
    marginLeft: 4 
  },
  priceRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 16,
  },
  newPrice: { 
    color: "#DB3022", 
    fontWeight: "600", 
    fontSize: 14, 
    marginRight: 8 
  },
  oldPrice: { 
    color: "#9B9B9B", 
    fontSize: 11, 
    textDecorationLine: "line-through" 
  },

  // Grid Promo Section
  gridContainer: { 
    margin: 0, 
    marginTop: 0 
  },
  gridTop: { 
    width: "100%", 
    height: 450, 
    position: "relative", 
    marginBottom: 0,
    overflow: "hidden",
  },
  gridImgTop: { 
    width: "100%", 
    height: "100%" 
  },
  gridTextTop: { 
    position: "absolute", 
    bottom:20, 
    left: 139, 
    color: "#fff", 
    fontSize: 40, 
    fontWeight: "700" 
  },
  gridBottomRow: { 
    flexDirection: "row", 
    gap: 0 
  },
  gridLeft: { 
    flex: 1, 
    gap: 0 
  },
  gridItemLeft1: {
    height: 225,
    overflow: "hidden",
    position: "relative",
  },
  gridImgLeft1: { 
    width: "100%", 
    height: "100%" 
  },
  gridTextLeft1: { 
    position: "absolute", 
    top: 56, 
    left: 6, 
    color: "#DB3022", 
    fontSize: 40, 
    fontWeight: "700" 
  },
  gridItemLeft2: {
    height: 225,
    overflow: "hidden",
    position: "relative",
  },
  gridImgLeft2: { 
    width: "100%", 
    height: "100%" 
  },
  gridTextLeft2: { 
    position: "absolute", 
    bottom: 16, 
    left: 6, 
    color: "#fff", 
    fontSize: 40, 
    fontWeight: "700" 
  },
  gridRight: { 
    flex: 1,
    height: 450,
    overflow: "hidden",
    position: "relative",
  },
  gridImgRight: { 
    width: "100%", 
    height: "100%" 
  },
  gridTextRight: { 
    position: "absolute", 
    bottom: 166, 
    left: 36, 
    color: "#fff", 
    fontSize: 40, 
    fontWeight: "700" 
  },
});