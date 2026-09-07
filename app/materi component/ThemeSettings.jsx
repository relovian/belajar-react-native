import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function ThemeSettings() {
  const [selectedMode, setSelectedMode] = useState('Light Mode');

  const modes = ['Light Mode', 'Dark Mode', 'System Default'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pengaturan Tema Aplikasi</Text>

      <View style={styles.cardContainer}>
        {modes.map((mode) => {
          const isActive = selectedMode === mode;
          
          return (
            <TouchableOpacity
              key={mode}
              style={[
                styles.optionButton,
                isActive ? styles.activeButton : styles.inactiveButton
              ]}
              onPress={() => setSelectedMode(mode)}
              activeOpacity={0.7}
            >
              <Text 
                style={[
                  styles.optionText, 
                  isActive ? styles.activeText : styles.inactiveText
                ]}
              >
                {mode}
              </Text>
            </TouchableOpacity>
          );
        })}
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
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  optionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
 
  activeButton: {
    backgroundColor: '#007AFF',
  },
  
  inactiveButton: {
    backgroundColor: '#f0f2f5',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeText: {
    color: '#ffffff',
  },
  inactiveText: {
    color: '#333333',
  },
}); 