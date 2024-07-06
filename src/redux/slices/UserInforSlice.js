import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { handleSignin } from "../../services/adminService"

const initialState = {
    admin: {},
    isLoading: false,
    isError: false,
}

export const getUserInfor = createAsyncThunk(
    'users/Login',
    async(data) => {
       // console.log('check data1 :', data)
        const response = await handleSignin(data.username, data.password)
        console.log('check data1 :', response)
        return response.data;
    }
)


export const UserSlice = createSlice({
    name: 'userInfor',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfor.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getUserInfor.fulfilled, (state, action) => {
                console.log("check data actions:", action);
                state.admin = action.payload;
                state.isError = false;
                state.isLoading = false;
            })
            .addCase(getUserInfor.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
            })
    }
})

export default UserSlice.reducer;