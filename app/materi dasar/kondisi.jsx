import React from 'react'
import {Text, View, ScrollView} from 'react-native';

export default function IfScreen() {

    // # Soal 1 
    let nilaiUjian = 80;
    let statusKelulusan = nilaiUjian >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus.";
    let warnaKelulusan = nilaiUjian >= 75 ? "green" : "red";

    // # Soal 2 
    let suhuUdara = 38;
    let isCuacaPanas = suhuUdara > 35;

    // # Soal 3 
    let isLoggedIn = true;
    let namaUser = "Budi Santoso";
    let statusLogin = isLoggedIn ? `Halo, ${namaUser}!` : "Silakan Login Terlebih Dahulu";

    // # Soal 4 
    let totalBelanja = 350000;
    let infoDiskon = totalBelanja >= 500000 ? "Anda Mendapat Diskon 20%!" : totalBelanja >= 200000 
        ? "Anda Mendapat Diskon 10%!" : "Belanja lebih banyak untuk dapat diskon!";
    let warnaDiskon = totalBelanja >= 500000 ? "purple" : totalBelanja >= 200000 ? "blue" : "gray";

    // # Soal 5 
    let jamSekarang = 14;
    let statusToko = (jamSekarang >= 8 && jamSekarang <= 17) ? "Toko Buka" : "Toko Tutup";

    // # Soal 6 
    let isDarkMode = true;
    let bgTheme = isDarkMode ? "#121212" : "#FFFFFF";
    let textTheme = isDarkMode ? "#FFFFFF" : "#000000";

    // # Soal 7 
    let password = "123";
    let isPasswordPendek = password.length < 6;

    // # Soal 8 
    let jenisKendaraan = "Mobil";
    let tarifParkir = jenisKendaraan === "Mobil" ? "Tarif Parkir: Rp 5.000/jam" : jenisKendaraan === "Motor" ? "Tarif Parkir: Rp 2.000 / jam" : "Jenis kendaraan tidak dikenal";

    // # Soal 9 
    let stokBarang = 5;
    let statusStok = "";
    let warnaStok = "";
    if (stokBarang > 10) {
        statusStok = "Stok Tersedia";
        warnaStok = "green";
    } else if (stokBarang >= 1 && stokBarang <= 10) {
        statusStok = "Stok Terbatas! Segera Beli";
        warnaStok = "orange";
    } else {
        statusStok = "Stok Habis";
        warnaStok = "red";
    }

    // # Soal 10 
    let usiaPenonton = 16;
    let kategoriFilm = "";
    if (usiaPenonton < 13) {
        kategoriFilm = "Kategori: Semua Umur (SU)";
    } else if (usiaPenonton >= 13 && usiaPenonton <= 17) {
        kategoriFilm = "Kategori: Remaja (R)";
    } else {
        kategoriFilm = "Kategori: Dewasa (D)";
    }

    return (
        <ScrollView style={{ backgroundColor: bgTheme, flex: 1, padding: 16 }}>
            <View>
        
                {/* # Soal 1 */}
                <Text style={{ color: warnaKelulusan }}>
                   {statusKelulusan}
                </Text>

                {/* # Soal 2 */}
                <Text style={{ color: textTheme }}>
                   {isCuacaPanas && "Peringatan: Cuaca Sangat Panas Hari Ini!"}
                </Text>

                {/* # Soal 3 */}
                <Text style={{ color: textTheme }}>
                   {statusLogin}
                </Text>

                {/* # Soal 4 */}
                <Text style={{ color: warnaDiskon }}>
                   {infoDiskon}
                </Text>

                {/* # Soal 5 */}
                <Text style={{ color: textTheme }}>
                   {statusToko}
                </Text>

                {/* # Soal 6 */}
                <Text style={{ color: textTheme }}>
                   Mode Tampilan: {isDarkMode ? "Gelap" : "Terang"}
                </Text>

                {/* # Soal 7 */}
                <Text style={{ color: "red" }}>
                   {isPasswordPendek && "Password terlalu pendek (minimal 6 karakter)"}
                </Text>

                {/* # Soal 8 */}
                <Text style={{ color: textTheme }}>
                   {tarifParkir}
                </Text>

                {/* # Soal 9 */}
                <Text style={{ color: warnaStok }}>
                   {statusStok}
                </Text>

                {/* # Soal 10 */}
                <Text style={{ color: textTheme }}>
                   {kategoriFilm}
                </Text>

            </View>
        </ScrollView>
    );
}