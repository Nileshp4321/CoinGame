import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[
    {
        id:Date.now(),
        carName:"Hyundai",
        carModel:"Hyundai Verna",
        price:100000
    }
]
const addCar=createSlice({
    name:"addCar",
    initialState,
    reducers:{
        add:(state,actions)=>{
           console.log(state)
           state.push(actions.payload);
           console.log("Added Sucessfully");
        },
        deleteCarsDetails:(state,actions)=>{
            return state.filter((car)=>{
                return car.id!==actions.payload.id;
            })
        },
        updateCarDetails:(state,actions)=>{
            state.map((car)=>{
                if(car.id===actions.payload.id){
                   car.carName=actions.payload.carName
                   car.carModel=actions.payload.carModel
                   car.price=actions.payload.price
                }
            })
            console.log("Update successfully");
            return;
        }
    }
})

export const {add,updateCarDetails,deleteCarsDetails}=addCar.actions;
export default addCar.reducer;