import {Action, createReducer, on} from '@ngrx/store';
import * as SearchActions from './search.actions';
import {SearchModel} from '../search.types';

export const initialState: SearchModel = {
  bikes: [],
  bikesMap: {},
  filteredBikes: [],
  displayBikes: [],
  location: [],
  offset: 0,
  limit: 10,
  showFilter: false
};

const reducer = createReducer(
  initialState,
  on(SearchActions.GetBikes, state => state),
  on(SearchActions.SuccessGetBikes, (state: SearchModel, payload) => {
    console.log('bikes payload', payload);
    return {...initialState, ...payload};
  }),
  on(SearchActions.ErrorGetBikes, (state: SearchModel, error: Error) => {
    console.log(error);
    return {...state, error};
  }),

  on(SearchActions.GetBikesPage, (state: SearchModel, payload) => {
    return {...state, ...payload};
  }),
  on(SearchActions.GetBikesPageSuccess, (state: SearchModel, payload) => {
    const nextState = {...state};
    nextState.displayBikes = nextState.displayBikes.concat(payload.bikes);
    return nextState;
  }),

  on(SearchActions.SuccessGetUnavailableBikes, (state: SearchModel, payload) => {
    console.log(payload);
    const nextState = {...state};

    return {...state, ...payload};
  }),
  on(SearchActions.setSearchFilterToggle, (state: SearchModel, payload) => {
    return {...state, ...payload};
  }),
);

export function SearchReducer(state: SearchModel = initialState, action: Action) {
  return reducer(state, action);
}
