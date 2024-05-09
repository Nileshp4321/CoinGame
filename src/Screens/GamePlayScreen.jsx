import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const GamePlayScreen = () => {
  const coin = Array.from({length: 21}, (v, i) => i + 1);
  const [userCoinSelectionLimit, setUserCoinSelectionLimit] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [trunUser, setTrunUser] = useState(true);
  const [nilesh, setNilesh] = useState(0);
  const [bot, setBot] = useState(0);
  const [totalSelectdCoin, setTotalSelectdCoin] = useState(0);

  //   console.log('nilesh', nilesh);
  //   console.log('bot', bot);
  const total = nilesh + bot;
  console.log('total', total);

  useEffect(() => {
    if (coin.length >= totalSelectdCoin) {
      if (!trunUser) {
        setNilesh(count => count + userCoinSelectionLimit);
        console.log('totalSelectdCoin before', userCoinSelectionLimit);
        setTotalSelectdCoin(count => count + userCoinSelectionLimit);
        setModalVisible(true);
      } else {
        setBot(count => count + userCoinSelectionLimit);
        setTotalSelectdCoin(count => count + userCoinSelectionLimit);
        setModalVisible(true);
      }
    } else {
      setModalVisible(false);
    }
  }, [trunUser, userCoinSelectionLimit]);

  return (
    <View style={{flex: 1, backgroundColor: 'red', padding: 20}}>
      <View>
        {totalSelectdCoin < 21 ? (
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
      {totalSelectdCoin < 21 ? (
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
                    onPress={() => {
                      setUserCoinSelectionLimit(val);
                      setModalVisible(!modalVisible);
                      setTrunUser(!trunUser);
                    }}>
                    <Text style={{color: '#fff'}}>{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <Text
          style={{
            textAlign: 'center',
            marginTop: 50,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Opps {!trunUser ? 'Nilesh' : 'Bot'} Lost The Game !
        </Text>
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
    backgroundColor: 'white',
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
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
});
