import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin1234');

  async function setUsers() {
    try {
      await AsyncStorage.setItem("adminUsername", "admin");
      await AsyncStorage.setItem("adminPassword", "admin1234");
      await AsyncStorage.setItem("guesUsername", "guest");
      await AsyncStorage.setItem("guestPassoword", "guest1234");
      
      // const userData = await AsyncStorage.getItem('username');
      // const currentUser = JSON.parse(userData);
      // console.log(" ",currentUser);
    } catch (error) {
      console.log(' ', error);
    }
  }

  useEffect(() => {
    setUsers();
  },[]);
  const handleLogin =async() => {
    // Check login credentials
    const adminUsername=await AsyncStorage.getItem("adminUsername");
    const adminPassoword=await AsyncStorage.getItem("adminPassword");
    const guesUsername=await AsyncStorage.getItem("guesUsername");
    const guestPassoword=await AsyncStorage.getItem("guestPassoword");
    
    // console.log("adminuser ",adminUsername)
    // console.log("username ",typeof password)
    // console.log("adminpass ",typeof adminPassoword)

    if (username === adminUsername && password === adminPassoword) {
      navigation.navigate('GamePlay');
    } else if (username === guesUsername && password === guestPassoword) {
      navigation.navigate('GamePlay');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color:"black",fontSize:30,margin:15}}>Login To Continue</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"#494F55"}
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#494F55"}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <View style={{width:300,borderRadius:300}}>
      <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color:"black",
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:5,
    margin:3,

  },
});

export default LoginScreen;
