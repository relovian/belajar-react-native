import React from 'react'
import {Text, View, ScrollView} from 'react-native';

export default function FunctionScreen() {

    // # Soal 1
    function tampilkanPesan() {
        return "Selamat Datang di Aplikasi Mobile SMK!";
    }

    let pesan = tampilkanPesan();


    // # Soal 2
    function dapatkanKodeUnik() {
        return 404;
    }

    let kodeUnik = dapatkanKodeUnik();


    // # Soal 3
    function hitungPromo(harga) {
        return harga * 2;
    }

    let hasilPromo = hitungPromo(75000);


    // # Soal 4
    function jumlahkanBelanja(hargaBarangA, hargaBarangB) {
        return hargaBarangA + hargaBarangB;
    }

    let totalBelanja = jumlahkanBelanja(120000, 85000);


    // # Soal 5
    function hitungOngkir(jarak, tarif = 5000) {
        return jarak * tarif;
    }

    let ongkirPertama = hitungOngkir(3, 7000);
    let ongkirKedua = hitungOngkir(4);


    // # Soal 6
    function cekKelulusan(nilaiUjian) {
        if (nilaiUjian >= 75) {
            return "Lulus Kompeten";
        } else {
            return "Remedial";
        }
    }

    let statusKelulusan = cekKelulusan(80);


    // # Soal 7
    function jalankanHitungMundur(batas) {
        let hasil = "";

        for (var i = 0; i < batas; i++) {
            hasil += i + " ";
        }

        return hasil;
    }

    let hitungMundur = jalankanHitungMundur(4);


    // # Soal 8
    const hitungLuasPersegiPanjang = function(panjang, lebar) {
        return panjang * lebar;
    };

    let luasPersegiPanjang = hitungLuasPersegiPanjang(5, 6);


    // # Soal 9
    const konversiIDRkeUSD = (rupiah) => {
        return rupiah / 15000;
    };

    let hasilKonversi = konversiIDRkeUSD(300000);


    // # Soal 10
    const formatNamaLengkap = (...rest) => {
        let [depan, belakang] = rest;

        return `${depan} ${belakang}`;
    };

    let namaLengkap = formatNamaLengkap("Siti", "Aisyah");


    return (
        <ScrollView style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 16 }}>
            <View>

                {/* # Soal 1 */}
                <Text>
                    {pesan}
                </Text>

                {/* # Soal 2 */}
                <Text>
                    Kode Unik: {kodeUnik}
                </Text>

                {/* # Soal 3 */}
                <Text>
                    Hasil Promo: Rp {hasilPromo}
                </Text>

                {/* # Soal 4 */}
                <Text>
                    Total Belanja: Rp {totalBelanja}
                </Text>

                {/* # Soal 5 */}
                <Text>
                    Ongkir dengan tarif 7000: Rp {ongkirPertama}
                </Text>

                <Text>
                    Ongkir dengan tarif default: Rp {ongkirKedua}
                </Text>

                {/* # Soal 6 */}
                <Text>
                    Status Kelulusan: {statusKelulusan}
                </Text>

                {/* # Soal 7 */}
                <Text>
                    Hitung Mundur: {hitungMundur}
                </Text>

                {/* # Soal 8 */}
                <Text>
                    Luas Persegi Panjang: {luasPersegiPanjang}
                </Text>

                {/* # Soal 9 */}
                <Text>
                    Hasil Konversi: USD {hasilKonversi}
                </Text>

                {/* # Soal 10 */}
                <Text>
                    Nama Lengkap: {namaLengkap}
                </Text>

            </View>
        </ScrollView>
    );
}