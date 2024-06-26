import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/loading";
import { TMovie } from "../../types/movietype";
import { getAllTrendingMovies } from "./action/getAllTrendingMovies";
import { getMovieDetails } from "./action/getMovieDetails";
import { searchMovies } from "./action/searchMovies";


interface CategoryState {
    allMovies:TMovie[];
    oneMovieDetails:TMovie |null;
    loading:TLoading;
    error:string|null
    total_pages:number
    total_results:number
}


const initialState:CategoryState = {
    allMovies:[],
    oneMovieDetails:null,
    loading:'idle',
    error:null,
    total_results:0,
    total_pages:0,
 
}



const moviesSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers:{
        clearMovieDetails :(state) =>{
            state.oneMovieDetails= null
        }
    },
    extraReducers:(builder)=>{
        // get all movies
        builder.addCase(getAllTrendingMovies.pending,(state)=>{
            state.loading='pending'
            state.error=null;
        })
        builder.addCase(getAllTrendingMovies.fulfilled,(state,action)=>{
            state.loading='succeeded'
            state.allMovies=action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        })
        builder.addCase(getAllTrendingMovies.rejected,(state,action)=>{
            state.loading='failed'
            if ( typeof action.payload === 'string') {
                
                state.error = action.payload
            }
        })
        // get one movie details
        builder.addCase(getMovieDetails.pending,(state) =>{
            state.loading='pending'
            state.error=null;
        })
        builder.addCase(getMovieDetails.fulfilled,(state,action) =>{
            state.loading='succeeded'
            state.oneMovieDetails = action.payload
        })
        builder.addCase(getMovieDetails.rejected,(state,action) =>{
            state.loading='failed'
            if ( typeof action.payload === 'string') {
                
                state.error = action.payload
            }
        })

        //search for movies
        builder.addCase(searchMovies.pending,(state) =>{
            state.loading='pending'
            state.error=null;
        })
        builder.addCase(searchMovies.fulfilled,(state,action) =>{
            state.loading='succeeded'
            state.allMovies=action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        })
        builder.addCase(searchMovies.rejected,(state,action) =>{
            state.loading='failed'
            if ( typeof action.payload === 'string') {
                
                state.error = action.payload
            }
        })

    }
})
export const  {clearMovieDetails} = moviesSlice.actions
const moviesReducer = moviesSlice.reducer
export default moviesReducer