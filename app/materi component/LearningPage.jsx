import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function LearningPage() {
  const categories = ['Semua', 'React Native', 'JavaScript', 'UI/UX Design', 'Backend', 'Database'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollVerticalContainer} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.pageTitle}>Modul Pembelajaran</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Kategori Materi</Text>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {categories.map((category, index) => (
              <View key={index} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Artikel Pilihan</Text>
          
          <View style={styles.articleCard}>
            <Text style={styles.articleTitle}>Pengenalan React Native untuk Pemula</Text>
            <Text style={styles.articleBody}>
              React Native adalah kerangka kerja (framework) sumber terbuka yang dibuat oleh Meta (sebelumnya Facebook) untuk membangun aplikasi seluler menggunakan JavaScript dan React. Dengan React Native, kamu dapat menulis kode sekali saja dan menerapkannya ke platform Android maupun iOS secara bersamaan.
            </Text>
          </View>

          <View style={styles.articleCard}>
            <Text style={styles.articleTitle}>Pentingnya Komponen Reusable</Text>
            <Text style={styles.articleBody}>
              Dalam pengembangan aplikasi modern, memecah komponen besar menjadi komponen-komponen kecil yang bisa digunakan kembali (reusable) sangat penting untuk menjaga kerapian kode, menghindari duplikasi, dan mempermudah proses pemeliharaan atau debugging aplikasi.
            </Text>
          </View>

          <View style={styles.articleCard}>
            <Text style={styles.articleTitle}>Tips Manajemen State yang Efektif</Text>
            <Text style={styles.articleBody}>
              State management adalah inti dari interaktivitas aplikasi berbasis React. Memahami kapan harus menggunakan useState, useEffect, atau manajemen state global akan membuat performa aplikasimu menjadi jauh lebih optimal dan responsif.
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollVerticalContainer: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  horizontalScroll: {
    paddingVertical: 5,
  },
  categoryCard: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  articleCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  articleBody: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});