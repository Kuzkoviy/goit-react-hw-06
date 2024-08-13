import { createSlice } from "@reduxjs/toolkit";
import initialContacts from '../initialContacts.json'

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {initialContacts},
    reducers: {
        addContact(state, action) {
            state.items = [...state.items, action.payload];
        },
        deleteContact(state, action) {
            state.items = state.items.filter((el) => el.id !== action.payload);
        },
        resetContacts(state, action) {
            state.items = initialContacts;
        }
    }
})

export const {addContact, deleteContact, resetContacts} = contactSlice.actions;

export default contactSlice.reducer;