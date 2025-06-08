import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isMenuOpen: false, 
    currentSection: 'home',
};

const uiSlice = createSlice({
    name: ui,
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setCurrentSection: (state,action) => {
            state.currentSection = action.payload;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
})

export const {
    toggleMenu,
    setCurrentSection,
    closeMenu,
} = uiSlice.actions;

export default uiSlice.reducer;