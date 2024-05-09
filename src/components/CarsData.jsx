import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { deleteCarsDetails } from '../addCar';
import OpenModel from './OpenModel';

const CarsData = () => {
  const dispatch=useDispatch();

  const [isPress,setPress]=useState(false);
  const items = useSelector(state => state.addCars);
  console.log(items);
  return (
    <View style={styles.carContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        {items?.map(car => {
          return (
            <>
              <View key={car.id+"cars"} style={styles.cars}>
                <Text style={styles.aboutCars}>Name : {car.carName}</Text>
                <Text style={styles.aboutCars}>Model : {car.carModel}</Text>
                <Text style={styles.aboutCars}>Price : {car.price}</Text>
                <Text style={styles.aboutCars}>Id : {car.id}</Text>
                <View style={styles.btns}>
                  <Button title="Update" color={'green'} onPress={()=>{
                      setPress(true);
                  }}/>
                  {
                    isPress&&<OpenModel data={car} pressItem={{isPress,setPress}} />
                  }
                  <Text style={{margin:3}} />
                  <Button title="Delete" color={'red'} onPress={()=>{
                    dispatch(deleteCarsDetails({id:car.id}))
                  }} />
                </View>
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#667eea',
    paddingHorizontal: 20,
  },
  carContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#667eea',
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    flex: 1,
  },
  cars: {
    flex: 1,
    // flexWrap:"wrap",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    margin: 2,
  },
  aboutCars: {
    color: 'white',
    fontSize: 14,
    padding:10,
    // width:100,
    // flexDirection:"row"
  },
  btns:{
    flex:1,
    flexDirection:"row",
    marginLeft:10,
  }
});
export default CarsData;
