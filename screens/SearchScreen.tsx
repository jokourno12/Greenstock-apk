// screens/HomeScreen.tsx
import React from 'react';
import {SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import SaveButton from '../components/SaveButton';

const handleSave = () => {
  Alert.alert('Save', 'This is save in Search', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
};

const SearchScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Greenstock Search Screen</Text>
    <SaveButton onPress={handleSave} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default SearchScreen;
