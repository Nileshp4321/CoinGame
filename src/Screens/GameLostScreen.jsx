import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>You lost!</Text>
      <Button title="Play again" onPress={() => navigation.navigate('GamePlay')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LostScreen;
