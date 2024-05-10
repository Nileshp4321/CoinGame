// import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { View } from 'react-native';
import GamePlayScreen from './src/Screens/GamePlayScreen';
import LoginScreen from './src/Screens/LoginScreen';
import LostScreen from './src/Screens/GameLostScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <GamePlayScreen/> */}
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GamePlay" component={GamePlayScreen} />
        <Stack.Screen name="Lost" component={LostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
    </View>
  );
};


    



export default App;





// <Provider store={store}>
{/* <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="CarsDetails" component={CarsDetails} />
  <Stack.Screen name="CarsData" component={CarsData} />
  <Stack.Screen name="OpenModel" component={OpenModel} />
</Stack.Navigator>
</NavigationContainer>
{/* <CarsDetails />
// <CarsData /> */}
// </Provider> */}