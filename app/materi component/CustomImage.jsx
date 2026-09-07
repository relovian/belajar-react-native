import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ActivityIndicator, 
  SafeAreaView 
} from 'react-native';

const CustomImage = ({ source, style }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={[styles.imageContainer, style]}>
      <Image
        source={source}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color="#007AFF" />
        </View>
      )}
    </View>
  );
};

export default function IndexImage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Galeri Kegiatan Sekolah</Text>

      <View style={styles.galleryGrid}>
        <CustomImage 
          source={{ uri: 'https://picsum.photos/id/1040/400/300' }} 
        />
        <CustomImage 
          source={{ uri: 'https://picsum.photos/id/1043/400/300' }} 
        />
      </View>
    </SafeAreaView>
  );
}

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
  galleryGrid: {
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e1e4e8', 
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});