import type {Customer} from "../../types/Customer.ts";
import {customersData} from "../../data/data.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface CustomerState {
    customers: Customer[]
}

const initialState: CustomerState = {
    customers: customersData
}

const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers:{
           addCustomer:(state,action: PayloadAction<Customer>) => {
               state.customers.push(action.payload);
           },
           updateCustomer: (state,action: PayloadAction<Customer>) => {
               const index = state.customers.findIndex((customer)=> customer.id === action.payload.id)
               if (index !== -1){
                   state.customers[index] = action.payload;
               }
           },
            deleteCustomer: (state,action: PayloadAction<number>) => {
               state.customers = state.customers.filter((customer) => customer.id !== action.payload)
            }
    }

})

export default customersSlice.reducer;
export const {addCustomer,updateCustomer,deleteCustomer} = customersSlice.actions;

