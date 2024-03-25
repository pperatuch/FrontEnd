import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    carItem: ReservationItem[]
}

const initialState:CartState = { carItem:[] }

export const cardSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>)=> {
            state.carItem.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>)=> {
         const remainItems =   state.carItem.filter( obj =>{
                return ( (obj.carModel !== action.payload.carModel) 
                 || (obj.pickupDate !== action.payload.pickupDate)
                 || (obj.returnDate !== action.payload.returnDate) )
            })
            state.carItem = remainItems
        }
    }
})

export const { addReservation, removeReservation} = cardSlice.actions
export default cardSlice.reducer