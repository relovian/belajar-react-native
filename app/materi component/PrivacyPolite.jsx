import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Switch, 
  TouchableOpacity, 
  SafeAreaView, 
  Alert 
} from 'react-native';

export default function PrivacyPolicy() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Berhasil', 'Anda telah menyetujui Syarat & Ketentuan.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Kebijakan Privasi</Text>
        
        <Text style={styles.description}>
          Sebelum melanjutkan proses registrasi, mohon tinjau dan setujui Syarat & Ketentuan serta Kebijakan Privasi aplikasi kami.
        </Text>

        {/* Baris Toggle Switch dan Teks Penjelasan */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Saya setuju dengan Syarat & Ketentuan</Text>
          <Switch
            trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
            thumbColor={agreed ? '#007AFF' : '#f4f3f4'}
            onValueChange={setAgreed}
            value={agreed}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.submitButton,
            { backgroundColor: agreed ? '#007AFF' : '#d1d5db' } 
          ]}
          disabled={!agreed}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>Lanjutkan Registrasi</Text>
        </TouchableOpacity>
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
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f2f5',
  },
  switchLabel: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginRight: 10,
    fontWeight: '500',
  },
  submitButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});