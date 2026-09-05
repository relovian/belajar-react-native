import React from 'react'
import {Text, View, ScrollView} from 'react-native';

export default function VarScreen() {

    // # Soal 1 
    const firstName = 'Budi';
    const lastName = 'Santoso';
    let isAktif = true;
    if(isAktif) {
       console.log(`Akun atas nama "${firstName}" "${lastName}" status aktif: "${isAktif}" `);
    } else {
       console.log(`Akun atas nama "${firstName}" "${lastName}" status nonaktif: "${isAktif}" `);
    }

    // # Soal 2 
    let rawUsername = " admin_smkn10 ";
    let cleanUsername = rawUsername.trim();
    let panjangUsername = cleanUsername.length;

    // # Soal 3 
    let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
    let posisiBuruk = komentar.indexOf("buruk");
    let potongKomentar = komentar.substring(0, 19);

    // # Soal 4 
    const string1 = "diskon";
    const string2 = "spesial50";
    let kodeKupon = string1.concat(string2).toUpperCase();

    // # Soal 5 
    let hargaStr = "150000.50";
    let hargaNum = parseFloat(hargaStr);
    let stokStr = "25";
    let stokInt = parseInt(stokStr);
    let totalHargaBarang = hargaNum * stokInt;

    // # Soal 6 
    let totalBelanja = 250000;
    totalBelanja -= 50000; 
    let totalPembayaran = totalBelanja + (totalBelanja * 0.10);

    // # Soal 7 
    let inputUsia = "17";
    let syaratUsia = 17;
    let cekStrict = inputUsia === syaratUsia; 
    let cekPerbandingan = inputUsia >= syaratUsia;

    // # Soal 8 
    let isPasswordCorrect = true;
    let isEmailVerified = true;
    let canLogin = isPasswordCorrect && isEmailVerified;

    // # Soal 9 
    let isNilaiTinggi = true;
    let isJuaraLomba = false;
    let dapatBeasiswa = isNilaiTinggi || isJuaraLomba;

    // # Soal 10 
    let member = true;
    let statusScopeLet = "";
    if (member) {
        let diskon = 0.2;
        statusScopeLet = `Variabel let diskon bernilai ${diskon} (hanya bisa di dalam blok if)`;
    }

    return (
        <View>
    
            {/* # soal 1 */}
            <Text>
               Akun atas nama {firstName} {lastName} status: {isAktif ? "aktif" : "tidak aktif"}
            </Text>

            {/* # Soal 2 */}
            <Text>
                Username: "{cleanUsername}", Panjang: {panjangUsername} karakter
            </Text>

            {/* # Soal 3 */}
            <Text>
                Indeks "buruk": {posisiBuruk}, Potongan (0-19): "{potongKomentar}"
            </Text>

            {/* # Soal 4 */}
            <Text>
                Kode Kupon: {kodeKupon}
            </Text>

            {/* # Soal 5 */}
            <Text>
                Total Harga (Harga * Stok): {totalHargaBarang}
            </Text>

            {/* # Soal 6 */}
            <Text>
                Total Pembayaran Akhir (+ Pajak 10%): {totalPembayaran}
            </Text>

            {/* # Soal 7 */}
            <Text>
                Strict ("17" === 17): {cekStrict ? "true" : "false"} | (&gt;=): {cekPerbandingan ? "true" : "false"}
            </Text>

            {/* # Soal 8 */}
            <Text>
                Status Login (AND): {canLogin ? "True (Masuk)" : "False (Ditolak)"}
            </Text>

            {/* # Soal 9 */}
            <Text>
                Status Beasiswa (OR): {dapatBeasiswa ? "True (Berhak)" : "False"}
            </Text>

            {/* # Soal 10 */}
            <Text>
                Block Scope: {statusScopeLet}
            </Text>

    
        </View>
    );
}
