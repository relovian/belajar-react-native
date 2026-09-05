import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SectionList, 
  SafeAreaView 
} from 'react-native';

// Data dummy yang terkelompok berdasarkan kategori (sections)
const studentData = [
  {
    title: 'Mata Pelajaran Kejuruan',
    data: [
      { id: '1', subject: 'Pemrograman Mobile', score: '88' },
      { id: '2', subject: 'Pemrograman Web', score: '90' },
      { id: '3', subject: 'Basis Data', score: '85' },
    ],
  },
  {
    title: 'Mata Pelajaran Umum',
    data: [
      { id: '4', subject: 'Matematika', score: '82' },
      { id: '5', subject: 'Bahasa Indonesia', score: '88' },
      { id: '6', subject: 'Pendidikan Kewarganegaraan', score: '92' },
    ],
  },
];

export default function StudentDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Dashboard Nilai Siswa</Text>

      {/* Implementasi SectionList */}
      <SectionList
        sections={studentData}
        keyExtractor={(item) => item.id}
        
        // Render untuk item per baris di dalam kategori
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.subjectText}>{item.subject}</Text>
            <Text style={styles.scoreText}>{item.score}</Text>
          </View>
        )}
        
        // Render untuk judul kategori (section header)
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#e1e4e8',
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 8,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  subjectText: {
    fontSize: 15,
    color: '#444',
    fontWeight: '500',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});