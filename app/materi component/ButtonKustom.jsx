import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Pressable, 
  View, 
  SafeAreaView, 
  Alert 
} from 'react-native';

const MyButton = ({ title, onPress, variant = 'primary' }) => {
  
  const getBackgroundColor = () => {
    switch (variant) {
      case 'success':
        return '#2e7d32'; 
      case 'danger':
        return '#c62828'; 
      case 'primary':
      default:
        return '#007AFF';
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: getBackgroundColor() },
        { opacity: pressed ? 0.7 : 1.0 } 
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};


export default function ButtonCustom() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Demonstrasi Tombol Varian</Text>

      <MyButton 
        title="Tombol Primary" 
        variant="primary" 
        onPress={() => Alert.alert('Informasi', 'Tombol Primary ditekan!')} 
      />

      <MyButton 
        title="Tombol Success" 
        variant="success" 
        onPress={() => Alert.alert('Informasi', 'Tombol Success ditekan!')} 
      />

      <MyButton 
        title="Tombol Danger" 
        variant="danger" 
        onPress={() => Alert.alert('Informasi', 'Tombol Danger ditekan!')} 
      />
    </SafeAreaView>
  );
}

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