import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {fetcharticles} from '../services/articleservice'

export const getArticles = createAsyncThunk(
    "article/getArticles",
    async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {

    const res = await fetcharticles();
    return res.data; // action.payload
    }
    catch (error) {
        return rejectWithValue(error.message);
        }
        }
    );

 export const articleSlice = createSlice({
    name: 'article',
    initialState:{
    articles:[],
    article:{},
    isLoading: false,
    success:null,
    error:null,
    page:1,
    limit:10,
    tot:0,
    searchTerm:''
    },
    extraReducers: (builder) => {
//get articles
    builder
    .addCase(getArticles.pending, (state, action) => {
    state.isLoading=true;
    state.error=null;
    })
    .addCase(getArticles.fulfilled, (state, action) => {
    state.isLoading=false;
    state.error = null;
    state.articles=action.payload;
    })
    .addCase(getArticles.rejected, (state, action) => {
    state.isLoading=false;
    state.error=action.payload;
    console.log("impossible de se connecter au serveur")
    })
    }
    })
export default articleSlice.reducer;