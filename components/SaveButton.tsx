// src/components/SaveButton.tsx

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface SaveButtonProps {
  onPress: () => void; // prop onPress untuk menangani event saat tombol ditekan
}

const SaveButton: React.FC<SaveButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SaveButton;
