import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addCar, { add } from '../addCar';

export default function CarsDetails({navigation}) {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');

  const dispatch=useDispatch();
  // const selectItem=useSelector((state)=>state.addCarDetails);
  // console.log(selectItem);
  
  return (
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
          keyboardType = 'numeric'
          placeholderTextColor="#fff"
          value={price}
          onChangeText={text => setPrice(text)}
        />
      </View>
      <TouchableOpacity style={styles.addbtn} onPress={()=>{
        dispatch(add({
          id:Date.now(),
          carName:carName,
          carModel:carModel,
          price:price
        }))
        navigation.navigate("CarsData");
      }}>
        <Text style={styles.addbtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
