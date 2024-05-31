import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import { TMovie } from "../../../types/movietype";


type TResponse ={
    page:number
    results:TMovie[]
    total_pages:number
    total_results:number
}

// get all movies
export const getAllTrendingMovies = createAsyncThunk('movies/getAllTrendingMovies', async (_,thunkAPI) => {

const {rejectWithValue}=thunkAPI;

  

try {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?page=1';
    const config = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTg1ZTFhMzgxOGE1MzcyYmEwZjllNzc0MjQyNGYwZiIsInN1YiI6IjYyODdmZjU5ZTAwNGE2MDA1MDZmNGE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EL6KfVqiVIroipgPq3xzXazdZ7iR7TIv0zfutsH69yM'
          }
    }
    const {data} = await axios.get<TResponse>(url,config)
  return data.results


} catch (error) {
  
      if (isAxiosError(error)) {
     return rejectWithValue(error.response?.data.message || error.message)
      
    }else{
        return rejectWithValue ('un expexted error')
    }
}

})