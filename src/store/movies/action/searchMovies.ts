import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import baseurl from "../../../utils/BaseUrl";
import { TMovie } from "../../../types/movietype";

type TAgrument ={
    search:string
    page:number
}
type TResponse ={
    page:number
    results:TMovie[]
    total_pages:number
    total_results:number
}


export const searchMovies = createAsyncThunk('movies/searchMovies' , async({search,page}:TAgrument,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI;

    const url = `/search/movie?query=${search}&language=en-US&page=${page}`;
    const config = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTg1ZTFhMzgxOGE1MzcyYmEwZjllNzc0MjQyNGYwZiIsInN1YiI6IjYyODdmZjU5ZTAwNGE2MDA1MDZmNGE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EL6KfVqiVIroipgPq3xzXazdZ7iR7TIv0zfutsH69yM'
          }
    }
    try {
       const {data} = await baseurl.get<TResponse>(url,config);
       console.log(data) 
    } catch (error) {
        console.log(error)
        if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
             
           }else{
               return rejectWithValue ('un expexted error')
           }
    }
})