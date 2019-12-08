import {createFeatureSelector, createSelector} from "@ngrx/store";
import SearchModel from "../search.types";

export const getSearchState = createFeatureSelector<SearchModel>('search');
export const getBikes = createSelector(getSearchState, state => state.bikes);
export const getLocations = createSelector(getSearchState, state => state.location);
