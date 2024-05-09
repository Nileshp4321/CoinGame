
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { View } from 'react-native';
import GamePlayScreen from './src/Screens/GamePlayScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={{flex:1}}>
      <GamePlayScreen/>
    </View>
  );
};


    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="GamePlayScreen">
      //     <Stack.Screen name="GamePlay" component={GamePlayScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Lost" component={LostScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  



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