import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Calculator from './src/Pages/Calculator';

export default function App() {
  return (
    <View>
      <Calculator />
    </View>
  );
}