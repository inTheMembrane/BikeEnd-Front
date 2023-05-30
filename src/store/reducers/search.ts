import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAppAsyncThunk } from '../../utils/redux';
import { Journey } from '../../@types/journey';

interface JourneySearchParams {
  from: string;
  datetime: string;
  max_duration: number;
}

interface SearchState {
  params: JourneySearchParams;
  journeys: Journey[];
  error: string | null;
  loading: boolean;
}

const initialState: SearchState = {
  params: {
    from: '',
    datetime: new Date(),
    max_duration: '01:00',
  },
  journeys: [],
  error: null,
  loading: false,
};

export type KeysOfParams = keyof SearchState['params'];

export const changeParamsField = createAction<{
  propertyKey: KeysOfParams
  value: string | number;
}>('search/CHANGE_PARAMS_FIELD');

export const searchJourneys = createAppAsyncThunk<
Journey[],
JourneySearchParams>(
  'search/SEARCH_JOURNEYS',
  async (params) => {
    const tokenWithQuotesTest = localStorage.getItem('token');
    if (tokenWithQuotesTest) {
      try {
        const token = tokenWithQuotesTest.replace(/^"(.*)"$/, '$1');
        const queryParams = new URLSearchParams(`from=${params.from}&max_duration=${params.max_duration}&datetime=${params.datetime}&per_page=10&current_page=1`);
        const url = `journey/search?${queryParams.toString()}`;
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`https://bikeend-api.up.railway.app/${url}`, { headers });
        console.log('DESTINATION: ', response);
        return response.data as Journey[];
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Pas de TOKEN');
    }
    return [];
  },
);

const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchJourneys.pending, (state) => {
      state.loading = true;

      state.error = null;
    })
    .addCase(searchJourneys.fulfilled, (state, action) => {
      state.journeys = action.payload;
      state.loading = false;
    })
    .addCase(searchJourneys.rejected, (state, action) => {
      state.error = action.error.message || 'NUL';
      state.loading = false;
    });
});

export default searchReducer;
