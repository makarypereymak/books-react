import { State, ActionTypes, Action } from './types/reducerTypes';

const defaultState = {
  items: [],
  mainLoading: false,
  additionalLoading: false,
  isNotFound: false,
  badRequest: '',
  activeBook: {},
  totalItemsInlibrary: 0,
  totalOnPage: 0,
  textValue: '',
  categorieValue: 'all',
  sortValue: 'relevance',
  getUrl() {
    if (this.categorieValue !== 'all') {
      return `https://www.googleapis.com/books/v1/volumes?q=${this.textValue}+subject:${this.categorieValue}&orderBy=${this.sortValue}&startIndex=${this.totalOnPage}&maxResults=30&key=AIzaSyCDVXaAXFviT9xskMAc-6UWaDFfsDD0Q1o`;
    } else {
      return `https://www.googleapis.com/books/v1/volumes?q=${this.textValue}&orderBy=${this.sortValue}&startIndex=${this.totalOnPage}&maxResults=30&key=AIzaSyCDVXaAXFviT9xskMAc-6UWaDFfsDD0Q1o`;
    }
  },
};

export const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS:
      return { ...state, totalOnPage: 0, badRequest: '', mainLoading: false, isNotFound: false, items: action.payload };
    case ActionTypes.DOWMLOAD_MORE_BOOKS:
      return { ...state, additionalLoading: false, badRequest: '', items: state.items.concat(action.payload) };
    case ActionTypes.MAIN_LOADING:
      return { ...state, isNotFound: false, badRequest: '', mainLoading: true };
    case ActionTypes.ADDITIONAL_LOADING:
      return { ...state, badRequest: '', additionalLoading: true };
    case ActionTypes.NOT_FOUND:
      return { ...state, totalOnPage: 0, items: [], mainLoading: false, isNotFound: true };
    case ActionTypes.BAD_REQUEST:
      return { ...state, totalOnPage: 0, items: [], mainLoading: false, badRequest: action.payload };
    case ActionTypes.ADD_ACTIVE_BOOK:
      return { ...state, activeBook: action.payload };
    case ActionTypes.ADD_TOTAL_ITEMS_IN_LIBRARY:
      return { ...state, totalItemsInlibrary: action.payload };
    case ActionTypes.SET_TOTAL_ITEMS_ON_PAGE:
      return { ...state, totalOnPage: state.totalOnPage + action.payload };
    case ActionTypes.SET_URL_TEXT_VALUE:
      return { ...state, textValue: action.payload };
    case ActionTypes.SET_URL_CATEGORIE_VALUE:
      return { ...state, categorieValue: action.payload };
    case ActionTypes.SET_URL_SORT_VALUE:
      return { ...state, sortValue: action.payload };
    default:
      return state;
  }
};

export const addActionForGetBooks = (payload: Array<any>) => ({ type: ActionTypes.GET_BOOKS, payload });
export const addActionForDownloadMoreBooks = (payload: Array<any>) => ({ type: ActionTypes.DOWMLOAD_MORE_BOOKS, payload });
export const addActionForMainLoadingState = () => ({ type: ActionTypes.MAIN_LOADING });
export const addActionForAdditionalLoadingState = () => ({ type: ActionTypes.ADDITIONAL_LOADING });
export const addActionNotFoundResult = () => ({ type: ActionTypes.NOT_FOUND });
export const addActionForBadRequest = (payload: string) => ({ type: ActionTypes.BAD_REQUEST, payload });
export const addActionForActiveBook = (payload: object) => ({ type: ActionTypes.ADD_ACTIVE_BOOK, payload });
export const addActionForTotalItemsInlibrary = (payload: number) => ({ type: ActionTypes.ADD_TOTAL_ITEMS_IN_LIBRARY, payload });
export const addActionForTotalItemsOnPage = (payload: number) => ({ type: ActionTypes.SET_TOTAL_ITEMS_ON_PAGE, payload });
export const addActionForTextValue = (payload: string) => ({ type: ActionTypes.SET_URL_TEXT_VALUE, payload });
export const addActionForCategorieValue = (payload: string) => ({ type: ActionTypes.SET_URL_CATEGORIE_VALUE, payload });
export const addActionForSortValue = (payload: string) => ({ type: ActionTypes.SET_URL_SORT_VALUE, payload });

export type Reducer = ReturnType<typeof reducer>;
