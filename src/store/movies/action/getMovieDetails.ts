import { createAsyncThunk } from "@reduxjs/toolkit";
import  { isAxiosError } from "axios";
import baseurl from "../../../utils/BaseUrl";
import { TMovie } from "../../../types/movietype";



export const getMovieDetails = createAsyncThunk('movies/getMovieDetails',async (id:string,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI

    const url = `/movie/${id}?language=en-US`
    const config = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTg1ZTFhMzgxOGE1MzcyYmEwZjllNzc0MjQyNGYwZiIsInN1YiI6IjYyODdmZjU5ZTAwNGE2MDA1MDZmNGE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EL6KfVqiVIroipgPq3xzXazdZ7iR7TIv0zfutsH69yM'
          }
    }


    try {
        const {data} = await baseurl.get<TMovie>(url,config);
      
        return data
    } catch (error) {
        if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
             
           }else{
               return rejectWithValue ('un expexted error')
           }
    }
})