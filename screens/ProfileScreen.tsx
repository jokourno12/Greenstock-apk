// screens/HomeScreen.tsx
import React from 'react';
import {SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import SaveButton from '../components/SaveButton';

const handleSave = () => {
  Alert.alert('Save', 'This is save in Profile', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
};

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Greenstock Profile Screen</Text>
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

export default ProfileScreen;
