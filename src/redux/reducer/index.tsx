import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "api/mock-api";
import { editProfile } from "redux/thunk/edit-profile";
import img from "img";

export interface RootState {
	user: Profile;
}

const initialState: RootState = {
	user: {
		firstName: "Dua",
		lastName: "Clipa",
		dateOfBirth: "",
		profilePictureURL: img.logo,
		salary: 40000,
		about: "",
	},
};

export const rootSlice = createSlice({
	name: "root",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Profile>) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(editProfile.fulfilled, (state, action) => {
			if (action.payload) {
				state.user = action.payload;
			}
		});
	},
});
