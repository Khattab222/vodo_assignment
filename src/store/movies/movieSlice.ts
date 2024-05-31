import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/loading";
import { TMovie } from "../../types/movietype";
import { getAllTrendingMovies } from "./action/getAllTrendingMovies";


interface CategoryState {
    allMovies:TMovie[];
    loading:TLoading;
    error:string|null
}


const initialState:CategoryState = {
    allMovies:[],
    loading:'idle',
    error:null
}



const moviesSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllTrendingMovies.pending,(state)=>{
            state.loading='pending'
            state.error=null;
        })
        builder.addCase(getAllTrendingMovies.fulfilled,(state,action)=>{
            state.loading='succeeded'
            state.allMovies=action.payload
        })
        builder.addCase(getAllTrendingMovies.rejected,(state,action)=>{
            state.loading='failed'
            if ( typeof action.payload === 'string') {
                
                state.error = action.payload
            }
        })
    }
})

const productReducer = moviesSlice.reducer
export default productReducer