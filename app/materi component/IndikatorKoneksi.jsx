import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Pressable, 
  View, 
  SafeAreaView, 
  Alert 
} from 'react-native';

// 1. Membuat Komponen Reusable MyButton
const MyButton = ({ title, onPress, variant = 'primary' }) => {
  // Fungsi untuk menentukan warna background berdasarkan varian
  const getBackgroundColor = () => {
    switch (variant) {
      case 'success':
        return '#2e7d32'; // Hijau
      case 'danger':
        return '#c62828'; // Merah
      case 'primary':
      default:
        return '#007AFF'; // Biru
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: getBackgroundColor() },
        { opacity: pressed ? 0.7 : 1.0 } // Efek umpan balik saat ditekan
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

// 2. Komponen Utama (Layar Utama)
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Demonstrasi Tombol Varian</Text>

      {/* Tombol Varian Primary (Biru) */}
      <MyButton 
        title="Tombol Primary" 
        variant="primary" 
        onPress={() => Alert.alert('Informasi', 'Tombol Primary ditekan!')} 
      />

      {/* Tombol Varian Success (Hijau) */}
      <MyButton 
        title="Tombol Success" 
        variant="success" 
        onPress={() => Alert.alert('Informasi', 'Tombol Success ditekan!')} 
      />

      {/* Tombol Varian Danger (Merah) */}
      <MyButton 
        title="Tombol Danger" 
        variant="danger" 
        onPress={() => Alert.alert('Informasi', 'Tombol Danger ditekan!')} 
      />
    </SafeAreaView>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});