import { configureStore } from "@reduxjs/toolkit";
import addCar from "./addCar";
const store = configureStore({
    reducer: {
        addCars: addCar
    }
});

export default store;