import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Language {
	locale: string;
}

const initialState: Language = {
	locale: 'en',
};

export const textSlice = createSlice({
	name: 'text',
	initialState,
	reducers: {
		swap: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.locale === 'en' ? (state.locale = 'es') : (state.locale = 'en');
		},
	},
});

// Action creators are generated for each case reducer function
export const { swap } = textSlice.actions;

export default textSlice.reducer;
