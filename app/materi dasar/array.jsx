import React from 'react'
import {Text, View, ScrollView} from 'react-native';

export default function ArrayScreen() {

    // # Soal 1
    let gudang = [101, 102, 103, 104, 105];
    let barangTerakhir = gudang[4];


    // # Soal 2
    let nilaiUjian = [78, 90, 65, 88, 92, 70];
    nilaiUjian.sort((a, b) => a - b);


    // # Soal 3
    let antreanVaksin = [];

    antreanVaksin.push("Andi");
    antreanVaksin.push("Budi");
    antreanVaksin.push("Siti");

    antreanVaksin.pop();


    // # Soal 4
    let darurat = ["Kebakaran", "Kecelakaan"];

    darurat.unshift("Medis Darurat");
    darurat.shift();


    // # Soal 5
    let transaksi = [1000, 2500, 3200, 4100, 5000];
    let sampelData = transaksi.slice(1, 4);


    // # Soal 6
    let menu = ["Burger", "Pizza", "Hotdog", "Pasta"];

    menu.splice(2, 1, "Spaghetti", "Salad");


    // # Soal 7
    let judul = "belajar pemrograman perangkat bergerak smk";

    let kataKata = judul.split(" ");
    let slug = kataKata.join("-");


    // # Soal 8
    let skorSiswa = [98, 85, 90, 75, 80];

    let [juaraSatu, juaraDua, juaraTiga] = skorSiswa;


    // # Soal 9
    let semuaNilai = [95, 88, 90, 85, 78, 82];

    let [nilaiUtama, ...sisaNilai] = semuaNilai;


    // # Soal 10
    let keranjangA = ["Sepatu", "Baju"];
    let keranjangB = ["Tas", "Topi"];

    let keranjangUtama = [...keranjangA, ...keranjangB, "Jaket"];


    return (
        <ScrollView style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 16 }}>
            <View>

                {/* # Soal 1 */}
                <Text>
                    Barang terakhir: {barangTerakhir}
                </Text>

                {/* # Soal 2 */}
                <Text>
                    Nilai setelah diurutkan: {nilaiUjian.join(", ")}
                </Text>

                {/* # Soal 3 */}
                <Text>
                    Antrean vaksin: {antreanVaksin.join(", ")}
                </Text>

                {/* # Soal 4 */}
                <Text>
                    Data darurat: {darurat.join(", ")}
                </Text>

                {/* # Soal 5 */}
                <Text>
                    Sampel data: {sampelData.join(", ")}
                </Text>

                {/* # Soal 6 */}
                <Text>
                    Menu setelah diperbarui: {menu.join(", ")}
                </Text>

                {/* # Soal 7 */}
                <Text>
                    Slug: {slug}
                </Text>

                {/* # Soal 8 */}
                <Text>
                    Juara Satu: {juaraSatu}
                </Text>

                <Text>
                    Juara Dua: {juaraDua}
                </Text>

                <Text>
                    Juara Tiga: {juaraTiga}
                </Text>

                {/* # Soal 9 */}
                <Text>
                    Nilai Utama: {nilaiUtama}
                </Text>

                <Text>
                    Sisa Nilai: {sisaNilai.join(", ")}
                </Text>

                {/* # Soal 10 */}
                <Text>
                    Keranjang Utama: {keranjangUtama.join(", ")}
                </Text>

            </View>
        </ScrollView>
    );
}