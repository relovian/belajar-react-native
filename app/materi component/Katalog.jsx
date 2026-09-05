import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  SafeAreaView, 
  Image 
} from 'react-native';

// Data dummy produk (sebanyak 50 item)
const productsData = Array.from({ length: 50 }, (_, index) => ({
  id: (index + 1).toString(),
  name: `Produk Sekolah ${index + 1}`,
  price: `Rp ${(index + 1) * 15000}`,
  imageUrl: `https://picsum.photos/id/${(index % 30) + 10}/200/200`,
}));

export default function ProductCatalog() {
  // Fungsi untuk merender tiap item dalam FlatList
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Katalog Produk Toko Online</Text>

      {/* Implementasi FlatList */}
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});