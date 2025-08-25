import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categories = ["Women", "Men", "Kids"];
const listCategories = [
  { label: "New", image: require("../../assets/images/category1.jpg") },
  { label: "Clothes", image: require("../../assets/images/category2.jpg") },
  { label: "Shoes", image: require("../../assets/images/category3.jpg") },
  { label: "Accesories", image: require("../../assets/images/category4.jpg") },
];
const productCategories = [
  "Tops", "Shirts & Blouses", "Cardigans & Sweaters", "Knitwear", "Blazers", "Outerwear", "Pants", "Jeans", "Shorts", "Skirts", "Dresses","Socks","Underwear"
];

export default function ShopScreen() {
  const [activeTab, setActiveTab] = useState("Women");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={22} color="#222" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsRowScroll} contentContainerStyle={styles.tabsRowContentCenter}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={styles.tabBtn}
            onPress={() => setActiveTab(cat)}
          >
            <Text style={[styles.tabTextLarge, activeTab === cat && styles.tabTextActive]}>{cat}</Text>
            {activeTab === cat && <View style={styles.tabUnderlineLarge} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.bannerWrap}>
          <View style={styles.bannerRed}>
            <Text style={styles.bannerTitle}>SUMMER SALES</Text>
            <Text style={styles.bannerSubtitle}>Up to 50% off</Text>
          </View>
        </View>
        {listCategories.map((cat) => (
          <View style={styles.catCard} key={cat.label}>
            <Text style={styles.catLabel}>{cat.label}</Text>
            <View style={styles.catImgWrapRight}>
              <Image source={cat.image} style={styles.catImg} />
            </View>
            <View style={styles.catDivider} />
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>VIEW ALL ITEMS</Text>
        </TouchableOpacity>
        <Text style={styles.chooseCategory}>Choose category</Text>
        {productCategories.map((cat, idx) => (
          cat ? (
            <View key={cat} style={styles.listCatRow}>
              <Text style={styles.listCatText}>{cat}</Text>
              <View style={styles.listCatDivider} />
            </View>
          ) : null
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 54,
    paddingBottom: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",

  },
  tabsRowScroll: {
    backgroundColor: "#fff",
    marginBottom: 12,
    maxHeight: 48,
  },
  tabsRowContentCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    gap: 32,
    width: "100%",
  },
  tabTextLarge: {
    fontSize: 17,
    color: "#9B9B9B",
    fontWeight: "500",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  tabUnderlineLarge: {
    marginTop: 4,
    height: 2,
    width: "100%",
    backgroundColor: "#DB3022",
    borderRadius: 4,
    alignSelf: "center",
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  tabText: {
    fontSize: 16,
    color: "#9B9B9B",
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#DB3022",
  },
  tabUnderline: {
    marginTop: 4,
    height: 2.5,
    width: "100%",
    backgroundColor: "#DB3022",
    borderRadius: 4,
  },
  bannerWrap: {
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  bannerRed: {
    backgroundColor: "#DB3022",
    borderRadius: 8,
    paddingVertical: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 2,
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  catCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 18,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    height: 120,
    overflow: "hidden",
    position: "relative",
  },
  catImgWrapRight: {
    width: 200,
    height: 120,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
    marginLeft: "auto",
  },
  catDivider: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#F2F2F2",
  },
  catImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  catLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginLeft: 18,
  },
  viewAllBtn: {
    backgroundColor: "#DB3022",
    borderRadius: 24,
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 24,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  viewAllText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  chooseCategory: {
    marginHorizontal: 18,
    marginBottom: 8,
    color: "#9B9B9B",
    fontSize: 14,
    fontWeight: "500",
    
  },
  listCatRow: {
    marginHorizontal: 18,
    marginBottom: 20,
    position: "relative",
    height: 32,
    justifyContent: "center",
    textAlign: "center",
  },
  listCatText: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
    marginBottom: 0,
    justifyContent: "center",
  },
  listCatDivider: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#F2F2F2",
  },
});