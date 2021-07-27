import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Main } from './pages/Main';
import { Start } from './pages/Start';
import { Test } from './pages/Test/Test';
import { TestContext } from './context'


export default function App() {
  return (
    <Main />
  );
}


