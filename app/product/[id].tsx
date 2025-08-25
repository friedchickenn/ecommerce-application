import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

const { width } = Dimensions.get("window");

export default function ProductDetailScreen() {
  const router = useRouter();
  const [size, setSize] = useState("Size");
  const [color, setColor] = useState("Black");
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showColorModal, setShowColorModal] = useState(false);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Black", "White", "Red", "Blue", "Green"];
  // Dummy data
  const product = {
    title: "Short dress",
    images: [require("../../assets/images/product7.jpg"), require("../../assets/images/product8.jpg")],
    brand: "H&M",
    subtitle: "Short black dress",
    price: 19.99,
    rating: 5,
    ratingCount: 10,
    description:
      "Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed...",
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{product.title}</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="share-2" size={22} color="#222" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imagesScrollOverflow}
        contentContainerStyle={styles.imagesScrollOverflowContent}
      >
        <View style={styles.imagesRowOverflow}>
          <Image source={product.images[0]} style={styles.productImgOverflowLeft} />
          <Image source={product.images[1]} style={styles.productImgOverflowRight} />
        </View>
      </ScrollView>
      <View style={styles.selectRow}>
        <TouchableOpacity style={styles.selectBtn} onPress={() => setShowSizeModal(true)}>
          <Text style={styles.selectText}>{size}</Text>
          <Feather name="chevron-down" size={18} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectBtn} onPress={() => setShowColorModal(true)}>
          <Text style={styles.selectText}>{color}</Text>
          <Feather name="chevron-down" size={18} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favBtn}>
          <Feather name="heart" size={22} color="#DB3022" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.subtitle}>{product.subtitle}</Text>
          <View style={styles.ratingRow}>
            {[...Array(5)].map((_, i) => (
              <Ionicons key={i} name={i < product.rating ? "star" : "star-outline"} size={16} color={i < product.rating ? "#FFBA49" : "#E6E6E6"} />
            ))}
            <Text style={styles.ratingCount}>({product.ratingCount})</Text>
          </View>
        </View>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.desc}>{product.description}</Text>
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartBtnText}>ADD TO CART</Text>
      </TouchableOpacity>

      <Modal
        visible={showSizeModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowSizeModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowSizeModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.bottomSheet}>
                <View style={styles.sheetHandle} />
                <Text style={styles.sheetTitle}>Select size</Text>
                <View style={styles.sizeGrid}>
                  {sizes.map((s) => (
                    <TouchableOpacity
                      key={s}
                      style={[styles.sizeBtn, size === s && styles.sizeBtnActive]}
                      onPress={() => setSize(s)}
                    >
                      <Text style={[styles.sizeText, size === s && styles.sizeTextActive]}>{s}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity style={styles.sizeInfoRow}>
                  <Text style={styles.sizeInfoText}>Size info</Text>
                  <Feather name="chevron-right" size={18} color="#D8D8D8" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartBtnSheet} onPress={() => setShowSizeModal(false)}>
                  <Text style={styles.cartBtnText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        visible={showColorModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowColorModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowColorModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.bottomSheet}>
                <View style={styles.sheetHandle} />
                <Text style={styles.sheetTitle}>Select color</Text>
                <View style={styles.sizeGrid}>
                  {colors.map((c) => (
                    <TouchableOpacity
                      key={c}
                      style={[styles.sizeBtn, color === c && styles.sizeBtnActive]}
                      onPress={() => setColor(c)}
                    >
                      <Text style={[styles.sizeText, color === c && styles.sizeTextActive]}>{c}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity style={styles.sizeInfoRow}>
                  <Text style={styles.sizeInfoText}>Color info</Text>
                  <Feather name="chevron-right" size={18} color="#D8D8D8" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartBtnSheet} onPress={() => setShowColorModal(false)}>
                  <Text style={styles.cartBtnText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 60,
    paddingBottom: 0,
    backgroundColor: "#fff",
  },
  iconBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    flex: 1,
    textAlign: "center",
  },
  imagesScrollOverflow: {
    width: '100%',
    height: width * 1,
    marginTop: 0,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  imagesScrollOverflowContent: {
    alignItems: 'center',
  },
  imagesRowOverflow: {
    flexDirection: 'row',
    width: width * 1.8,
    height: width * 1.3,
    gap: 5,
  },
  productImgOverflowLeft: {
    width: width * 0.7,
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  productImgOverflowRight: {
    width: width * 0.3,
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  selectRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    marginBottom: 8,
  },
  selectBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 5,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  selectText: {
    fontSize: 15,
    color: "#222",
    fontWeight: "500",
    marginRight: 6,
  },
  favBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    marginLeft: 'auto',
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 4,
    marginTop: 2,
  },
  brand: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#9B9B9B",
    fontWeight: "500",
    marginBottom: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  ratingCount: {
    fontSize: 13,
    color: "#9B9B9B",
    marginLeft: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginLeft: 12,
  },
  desc: {
    fontSize: 14,
    color: "#222",
    fontWeight: "400",
    paddingHorizontal: 18,
    marginBottom: 18,
    marginTop: 8,
  },
  cartBtn: {
    backgroundColor: "#DB3022",
    borderRadius: 50,
    marginHorizontal: 18,
    marginBottom: 24,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cartBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.20)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 32,
    minHeight: 340,
  },
  sheetHandle: {
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#EAEAEA',
    alignSelf: 'center',
    marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: 18,
  },
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
    gap: 9,
  },
  sizeBtn: {
    width: 85,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sizeBtnActive: {
    borderColor: '#DB3022',
    backgroundColor: '#FFF5F2',
  },
  sizeText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '600',
  },
  sizeTextActive: {
    color: '#DB3022',
  },
  sizeInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F6',
    marginBottom: 18,
  },
  sizeInfoText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
  cartBtnSheet: {
    backgroundColor: '#DB3022',
    borderRadius: 50,
    marginTop: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});