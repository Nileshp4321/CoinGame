import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const GamePlayScreen = () => {
  const coin = Array.from({length: 21}, (v, i) => i + 1);
  const [userCoinSelectionLimit, setUserCoinSelectionLimit] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [trunUser, setTrunUser] = useState(true);
  const [nilesh, setNilesh] = useState(0);
  const [bot, setBot] = useState(0);
  const [totalSelectdCoin, setTotalSelectdCoin] = useState(0);
  const [randomNumber, setrandomNumber] = useState(0);
  const [playerName, setPlayerName] = useState("Nilesh")

  console.log('totalSelectdCoin', totalSelectdCoin);

  useEffect(() => {
    if (coin.length >= totalSelectdCoin) {
      if (!trunUser) {
        setPlayerName("Nilesh")
        setNilesh(count => count + userCoinSelectionLimit);
        setTotalSelectdCoin(count => count + userCoinSelectionLimit);
        setModalVisible(true);
        console.log('Nilesh Selection  ', userCoinSelectionLimit);
        handleOnPress();
      } else {
          
        setPlayerName("Bot")
        console.log('bot Selection  ', userCoinSelectionLimit);
        setTotalSelectdCoin(count => count + userCoinSelectionLimit);
        setBot(count => count + userCoinSelectionLimit);
        setTrunUser(true);
        setModalVisible(true);
      }
    } else {
      setModalVisible(false);
    }
  }, [trunUser, userCoinSelectionLimit, randomNumber]);

  console.log("playerName",playerName)
  const handleResetGame = () => {
    setUserCoinSelectionLimit(0);
    setTotalSelectdCoin(0);
    setNilesh(0);
    setBot(0);
    setTrunUser(true);
    setModalVisible(true);
  };

  const handleOnPress = val => {
    if (trunUser) {
      setUserCoinSelectionLimit(val);
    } else {
      setUserCoinSelectionLimit(Math.floor(Math.random() * 4) + 1);
    }
    setModalVisible(!modalVisible);
    setTrunUser(!trunUser);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red', padding: 20}}>
      <View>
        {totalSelectdCoin <= 21 ? (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            User Trun : {trunUser ? 'Nilesh' : 'Bot'}
          </Text>
        ) : (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Game Over</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
          marginVertical: 50,
        }}>
        {coin.slice(totalSelectdCoin, coin.length).map((item, index) => (
          <View
            style={{
              backgroundColor: 'blue',
              width: 70,
              height: 70,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index.toString()}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item}</Text>
          </View>
        ))}
      </View>
      {totalSelectdCoin <= 21 ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Please select your coin limit {trunUser ? 'Nilesh' : 'Bot'}
              </Text>
              <View style={{flexDirection: 'row', gap: 20, marginVertical: 20}}>
                {coin.slice(0, 4).map((val, ind) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'black',
                      height: 50,
                      width: 50,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={ind.toString()}
                    onPress={() => handleOnPress(val)}>
                    <Text style={{color: '#fff'}}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 50,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Opps {playerName} Lost The Game !
          </Text>
          <Button
            color={'green'}
            title="Play again"
            onPress={handleResetGame}
          />
        </View>
      )}
    </View>
  );
};

export default GamePlayScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 50,
  },
  coin: {
    backgroundColor: '#2196F3',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  coinText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  gameOverText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  playAgainButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
