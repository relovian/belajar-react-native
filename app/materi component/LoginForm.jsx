import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Pressable, 
  SafeAreaView, 
  Alert 
} from 'react-native';

export default function LoginForm() {
  // State untuk menyimpan input email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Berhasil', `Email: ${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Silakan Login</Text>

        {/* Input Email */}
        <TextInput
          style={styles.input}
          placeholder="Masukkan email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Input Password (Teks Tersembunyi) */}
        <TextInput
          style={styles.input}
          placeholder="Masukkan password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {/* Tombol Login Kustom menggunakan Pressable */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.6 : 1.0 } // Efek umpan balik saat ditekan (opasitas berkurang)
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

// Styling Sederhana
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fafafa',
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});