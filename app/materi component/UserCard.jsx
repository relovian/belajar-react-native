import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

// 1. Membuat Komponen Reusable UserCard
const UserCard = ({ name, status, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.status, status === 'Aktif' ? styles.active : styles.alumni]}>
          {status}
        </Text>
      </View>
    </View>
  );
};

// 2. Komponen Utama (Layar Utama)
export default function Card() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Direktori Anggota Komunitas</Text>

      <UserCard 
        name="Relovian Rahmadan" 
        status="Aktif" 
        imageUrl="https://picsum.photos/id/1011/200/200" 
      />

      <UserCard 
        name="Farel Wisnu" 
        status="Alumni" 
        imageUrl="https://picsum.photos/id/1027/200/200" 
      />
    </SafeAreaView>
  );
}

// 3. Styling Sederhana
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  active: {
    color: '#2e7d32',
  },
  alumni: {
    color: '#c62828', 
  },
});