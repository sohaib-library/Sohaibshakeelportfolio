import { configureStore, createSlice } from '@reduxjs/toolkit';

// Theme slice
const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'dark',
        themeColors: {
            primaryColor: '#EAB308', // Yellow-500
            secondary: '#CA8A04',    // Yellow-600
            cardBg: '#1a1a1a',
            text: '#ffffff',
            border: '#333333',
            summeryText: '#9ca3af',
        }
    },
    reducers: {}
});

export const store = configureStore({
    reducer: {
        themeReducer: themeSlice.reducer,
    }
});

export default store;
