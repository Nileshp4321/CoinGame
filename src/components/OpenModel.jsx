import React, { useState } from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateCarDetails } from '../addCar';


const OpenModel = (props) => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');
  const dispatch=useDispatch();
  const {isPress,setPress}=props.pressItem;
  const {id}=props.data;

  let itemid=id;
  // console.log(navigation);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      
      <Modal isVisible={true}>
        
        <View style={{flex: 1}}>
        <Text style={{textAlign:"center"}}>Update Details</Text>
            <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Car Name"
          placeholderTextColor="#fff"
          value={carName}
          onChangeText={text => setCarName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Car Model"
          placeholderTextColor="#fff"
          value={carModel}
          onChangeText={text => setCarModel(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#fff"
          value={price}
          onChangeText={text => setPrice(text)}
        />
      </View>
      <TouchableOpacity style={styles.addbtn} onPress={()=>{
        dispatch(updateCarDetails({
          id:itemid,
          carName:carName,
          carModel:carModel,
          price:price
        }))
        Alert.alert("updated successfully");
        
      }}>
        <Text style={styles.addbtnText}>Update</Text>
      </TouchableOpacity>
    </View>
        </View>
        <Button title='Close' color={"red"} onPress={()=>{
          setModalVisible(false)
          setPress(false)
        }}></Button>
      </Modal>

    </View>
  );
};
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#667eea', 
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: '#fff',
  },
  addbtn: {
    backgroundColor: '#6c5ce7',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  addbtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default OpenModel;
