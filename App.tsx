import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form/>
      <List/>
    </SafeAreaView>
  )
}

export default App;
