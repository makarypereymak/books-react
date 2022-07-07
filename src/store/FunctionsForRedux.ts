import axios from 'axios';
import {
  addActionForMainLoadingState,
  addActionNotFoundResult,
  addActionForAdditionalLoadingState,
  addActionForTotalItemsInlibrary,
  addActionForTotalItemsOnPage,
  addActionForDownloadMoreBooks,
  addActionForBadRequest,
  addActionForGetBooks,
} from '../store/reducer';

import { State } from './types/reducerTypes';

export const getBooks = (state: State): any => {
  return function (dispatch: any) {
    dispatch(addActionForMainLoadingState());

    const url = state.getUrl();

    axios
      .get(url)
      .then((response) => {
        if (response.data.totalItems === 0) {
          dispatch(addActionNotFoundResult());
        } else {
          dispatch(addActionForGetBooks(response.data.items));
          dispatch(addActionForTotalItemsInlibrary(response.data.totalItems));
          dispatch(addActionForTotalItemsOnPage(response.data.items.length));
        }
      })
      .catch((error) => {
        dispatch(addActionForBadRequest(error.message));
      });
  };
};

export const downloadMoreBooks = (state: State): any => {
  return function (dispatch: any) {
    dispatch(addActionForAdditionalLoadingState());

    const url = state.getUrl();

    axios
      .get(url)
      .then((response) => {
        dispatch(addActionForDownloadMoreBooks(response.data.items));
        dispatch(addActionForTotalItemsOnPage(response.data.items.length));
      })
      .catch((error) => {
        dispatch(addActionForBadRequest(error.message));
      });
  };
};
