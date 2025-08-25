
# Ecommerce Application (Frontend)

## Kelompok (nda tau kelompok berapa)
### Erika Yanti (105841104322)
### Arsifah Ainun Aulia (105841106122)
### Tegar Surya Prayoga (105841106222)

## Deskripsi
Ecommerce Application adalah aplikasi mobile modern berbasis React Native & Expo yang dirancang untuk memberikan pengalaman belanja online yang lengkap, mudah, dan nyaman bagi pengguna. Aplikasi ini memungkinkan pengguna untuk menjelajahi berbagai produk fashion, elektronik, dan kebutuhan sehari-hari, dengan fitur pencarian, filter kategori, dan rekomendasi produk.

Pengguna dapat melakukan registrasi dan login untuk mengakses seluruh fitur, seperti menambah produk ke keranjang belanja, menyimpan produk favorit ke wishlist, serta melakukan checkout dan pembayaran. Setiap produk memiliki halaman detail yang menampilkan gambar, deskripsi, harga, rating, pilihan ukuran dan warna, serta ulasan dari pengguna lain.

Selain itu, aplikasi ini menyediakan halaman profil untuk mengelola data pribadi, alamat pengiriman, metode pembayaran, riwayat pesanan, dan pengaturan akun. UI aplikasi didesain modern dan responsif, mirip dengan aplikasi ecommerce populer, sehingga mudah digunakan oleh semua kalangan.

Fitur keamanan seperti autentikasi dan penyimpanan data lokal menggunakan Context API dan AsyncStorage memastikan data pengguna tetap aman dan privat. Aplikasi ini juga mendukung integrasi dengan sosial media untuk login cepat dan memiliki tampilan yang menarik berkat penggunaan icon custom dan efek gradien.

## Fitur Utama
- Autentikasi (Login, Signup, Lupa Password)
- Navigasi tab: Home, Shop, Bag, Favorites, Profile
- Browsing produk dengan filter, kategori, dan pencarian
- Detail produk lengkap: gambar, deskripsi, rating, pilihan size & warna
- Keranjang belanja (Bag) dan wishlist (Favorites)
- Checkout dan manajemen pesanan
- Profil pengguna: info, alamat, metode pembayaran, ulasan, pengaturan
- UI modern, responsif, dan mirip aplikasi ecommerce populer

## Teknologi
- React Native
- Expo Router
- Context API (state global)
- AsyncStorage (persistensi data)
- @expo/vector-icons (icon)
- expo-linear-gradient (efek gradien)

## Struktur Folder
```
frontend/
├── app/
│   ├── _layout.tsx
│   ├── (tabs)/home.tsx
│   ├── (tabs)/shop.tsx
│   ├── (tabs)/bag.tsx
│   ├── (tabs)/favorites.tsx
│   ├── (tabs)/profile.tsx
│   ├── (auth)/login.tsx
│   ├── (auth)/signup.tsx
│   ├── (auth)/forgot-password.tsx
│   └── product/[id].tsx
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── CustomButton.tsx
│   ├── InputField.tsx
│   ├── ProductCard.tsx
│   └── SocialButton.tsx
├── contexts/
│   └── AuthContext.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Instalasi & Menjalankan
1. Clone repo:
   ```bash
   git clone https://github.com/friedchickenn/ecommerce-application.git
   cd ecommerce-application/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npx expo start
   ```
4. Scan QR code dengan Expo Go di perangkat Anda.

## Instruksi Penggunaan
- Login/signup untuk mengakses fitur utama
- Navigasi antar tab: Home, Shop, Bag, Favorites, Profile
- Cari dan filter produk di tab Shop
- Klik produk untuk melihat detail, pilih size/warna, dan tambahkan ke keranjang
- Kelola keranjang dan wishlist
- Lakukan checkout dan lihat riwayat pesanan di Profile

## Penjelasan Setiap Halaman Serta Hasil ScreenShot

### Login
Halaman untuk masuk ke aplikasi. Pengguna memasukkan email dan password, serta dapat memilih login dengan sosial media.

<img src="assets/screenshots/login.jpg" alt="Login" width="120" />

### Signup
Halaman pendaftaran akun baru. Pengguna mengisi data diri, email, dan password untuk membuat akun baru.

<img src="assets/screenshots/signup.jpg" alt="Signup" width="120" />

### Forgot Password
Halaman untuk mengatur ulang password jika pengguna lupa. Cukup masukkan email, instruksi reset akan dikirimkan.

<img src="assets/screenshots/forgotpswd.jpg" alt="Forgot Password" width="120" />

### Home
Halaman utama berisi banner, kategori, dan produk rekomendasi. Pengguna dapat langsung melihat promo dan produk unggulan.

<img src="assets/screenshots/home1.jpg" alt="Home1" width="120" /> <img src="assets/screenshots/home2.jpg" alt="Home2" width="120" /> <img src="assets/screenshots/home3.jpg" alt="Home3" width="120" />

### Shop
Menampilkan daftar produk, filter kategori, pencarian, dan sorting. Pengguna dapat mencari produk, memilih kategori, dan mengurutkan hasil sesuai kebutuhan.

<img src="assets/screenshots/shop1.jpg" alt="Shop1" width="120" /> <img src="assets/screenshots/shop2.jpg" alt="Shop2" width="120" />

### Bag (Keranjang)
Menampilkan produk yang sudah ditambahkan ke keranjang. Pengguna dapat mengubah jumlah, menghapus produk, dan melanjutkan ke proses checkout.

<img src="assets/screenshots/bag.jpg" alt="Bag" width="120" />

### Favorites (Wishlist)
Menampilkan produk favorit yang disimpan pengguna. Produk di sini dapat dipindahkan ke keranjang atau dihapus dari daftar favorit.

<img src="assets/screenshots/favorites.jpg" alt="Favorites" width="120" />

### Profile
Menampilkan info pengguna, avatar, email, dan menu navigasi seperti pesanan, alamat, metode pembayaran, promo, ulasan, dan pengaturan akun.

<img src="assets/screenshots/profile.jpg" alt="Profile" width="120" />

### Product Detail
Menampilkan detail produk: gambar, deskripsi, harga, rating, pilihan size dan warna, serta tombol untuk menambah ke keranjang. Gambar produk dapat digeser untuk melihat lebih detail.

<img src="assets/screenshots/detailproduk.jpg" alt="DetailProduk" width="120" /> <img src="assets/screenshots/size.jpg" alt="Size" width="120" /> <img src="assets/screenshots/color.jpg" alt="Color" width="120" />


Aplikasi ini dapat dikembangkan lebih lanjut untuk integrasi backend, pembayaran online, dan fitur lain sesuai kebutuhan bisnis.
