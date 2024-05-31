import { createAsyncThunk } from "@reduxjs/toolkit";
import  { isAxiosError } from "axios";
import { TMovie } from "../../../types/movietype";
import baseurl from "../../../utils/BaseUrl";


type TResponse ={
    page:number
    results:TMovie[]
    total_pages:number
    total_results:number
}

// get all movies
export const getAllTrendingMovies = createAsyncThunk('movies/getAllTrendingMovies', async (page:number,thunkAPI) => {

const {rejectWithValue}=thunkAPI;

  

try {
    const url = `/trending/movie/week?page=${page}`;
    const config = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTg1ZTFhMzgxOGE1MzcyYmEwZjllNzc0MjQyNGYwZiIsInN1YiI6IjYyODdmZjU5ZTAwNGE2MDA1MDZmNGE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EL6KfVqiVIroipgPq3xzXazdZ7iR7TIv0zfutsH69yM'
          }
    }
    const {data} = await baseurl.get<TResponse>(url,config)
  return data


} catch (error) {
  
      if (isAxiosError(error)) {
     return rejectWithValue(error.response?.data.message || error.message)
      
    }else{
        return rejectWithValue ('un expexted error')
    }
}

})