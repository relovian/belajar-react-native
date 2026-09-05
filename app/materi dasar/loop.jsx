import React from 'react'
import {Text, View, ScrollView} from 'react-native';

export default function LoopScreen() {

    // # Soal 1 
    let hasilSoal1 = [];
    for (let i = 1; i <= 8; i++) {
        hasilSoal1.push(`Tiket antrean nomor: ${i}`);
    }

    // # Soal 2 
    let hasilSoal2 = [];
    for (let i = 5; i >= 1; i--) {
        hasilSoal2.push(i);
    }
    hasilSoal2.push("Roket Meluncur!");

    // # Soal 3 
    let hasilSoal3 = [];
    let jumlah = 0;
    for (let deret = 5; deret > 0; deret--) {
        jumlah += deret;
        hasilSoal3.push(`Jumlah total saat ini: ${jumlah}`);
    }

    // # Soal 4 
    let hasilSoal4 = [];
    for (let deret = 2; deret < 10; deret += 2) {
        hasilSoal4.push(`Nomor meja VIP: ${deret}`);
    }

    // # Soal 5 
    let hasilSoal5 = [];
    for (let i = 0; i <= 6; i++) {
        if (i === 3) {
            hasilSoal5.push("Peringatan: Suhu Mesin Stabil!");
        } else {
            hasilSoal5.push(`Indeks ke-${i}`);
        }
    }

    // # Soal 6 
    let hasilSoal6 = [];
    let flag6 = 1;
    while (flag6 < 10) {
        hasilSoal6.push(`Memanggil nasabah antrean ke-${flag6}`);
        flag6++;
    }

    // # Soal 7 
    let hasilSoal7 = [];
    let deret7 = 4;
    let jumlah7 = 0;
    while (deret7 > 0) {
        jumlah7 += deret7;
        hasilSoal7.push(`Jumlah tabungan saat ini: ${jumlah7}`);
        deret7--;
    }

    // # Soal 8 
    let hasilSoal8 = [];
    let i8 = 0;
    while (i8 < 5) {
        if (i8 === 3) {
            hasilSoal8.push("Awas Halangan Dekat!");
        } else {
            hasilSoal8.push(`Sensor posisi normal: ${i8}`);
        }
        i8++;
    }

    // # Soal 9 
    let penjelasanSoal9 = "Infinite looping terjadi karena nilai flag (1) tidak pernah bertambah (tidak ada flag++), sehingga kondisi (flag < 10) akan selamanya bernilai true dan membuat aplikasi macet.";

    // # Soal 10 
    let hasilSoal10 = [];
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            hasilSoal10.push(`Kupon ${i}: Kupon Genap`);
        } else {
            hasilSoal10.push(`Kupon ${i}: Kupon Ganjil`);
        }
    }

    return (
        <ScrollView>
            <View>
        
                {/* # Soal 1 */}
                <Text>
                   {hasilSoal1.join("\n")}
                </Text>

                {/* # Soal 2 */}
                <Text>
                   {hasilSoal2.join(", ")}
                </Text>

                {/* # Soal 3 */}
                <Text>
                   {hasilSoal3.join("\n")}
                </Text>

                {/* # Soal 4 */}
                <Text>
                   {hasilSoal4.join("\n")}
                </Text>

                {/* # Soal 5 */}
                <Text>
                   {hasilSoal5.join("\n")}
                </Text>

                {/* # Soal 6 */}
                <Text>
                   {hasilSoal6.join("\n")}
                </Text>

                {/* # Soal 7 */}
                <Text>
                   {hasilSoal7.join("\n")}
                </Text>

                {/* # Soal 8 */}
                <Text>
                   {hasilSoal8.join("\n")}
                </Text>

                {/* # Soal 9 */}
                <Text>
                   {penjelasanSoal9}
                </Text>

                {/* # Soal 10 */}
                <Text>
                   {hasilSoal10.join("\n")}
                </Text>

            </View>
        </ScrollView>
    );
}