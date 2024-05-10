import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LostScreen = ({ navigation,trunUser }) => {
  return (
    <View style={styles.container}>
        <View>
        {totalSelectdCoin < 21 ? (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            User Trun : {trunUser ? 'Nilesh' : 'Bot'}
          </Text>
        ) : (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Game Over</Text>
        )}
      </View>
      <Button  title="Play again" onPress={() => navigation.navigate('GamePlay')} />
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
