export interface State {
  items: Array<any>;
  mainLoading: boolean;
  additionalLoading: boolean;
  isNotFound: boolean;
  badRequest: string;
  activeBook: any;
  totalItemsInlibrary: number;
  totalOnPage: number;
  textValue: string;
  categorieValue: string;
  sortValue: string;
  getUrl(): string;
}

export enum ActionTypes {
  GET_BOOKS = 'GET_BOOKS',
  DOWMLOAD_MORE_BOOKS = 'DOWMLOAD_MORE_BOOKS',
  MAIN_LOADING = 'MAIN_LOADING',
  ADDITIONAL_LOADING = 'ADDITIONAL_LOADING',
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
  ADD_ACTIVE_BOOK = 'ADD_ACTIVE_BOOK',
  ADD_TOTAL_ITEMS_IN_LIBRARY = 'ADD_TOTAL_ITEMS_IN_LIBRARY',
  SET_TOTAL_ITEMS_ON_PAGE = 'SET_TOTAL_ITEMS_ON_PAGE',
  SET_URL_TEXT_VALUE = 'SET_URL_TEXT_VALUE',
  SET_URL_CATEGORIE_VALUE = 'SET_URL_CATEGORIE_VALUE',
  SET_URL_SORT_VALUE = 'SET_URL_SORT_VALUE',
}

interface GetBooksAction {
  type: ActionTypes.GET_BOOKS;
  payload: any[];
}

interface DownloadMoreBooksAction {
  type: ActionTypes.DOWMLOAD_MORE_BOOKS;
  payload: any[];
}

interface LoadingAction {
  type: ActionTypes.MAIN_LOADING | ActionTypes.ADDITIONAL_LOADING;
}

interface NotFoundAction {
  type: ActionTypes.NOT_FOUND;
}

interface BadRequestAction {
  type: ActionTypes.BAD_REQUEST;
  payload: string;
}

interface AddActiveBookAction {
  type: ActionTypes.ADD_ACTIVE_BOOK;
  payload: object;
}

interface SetTotalItemsInLibraryAction {
  type: ActionTypes.ADD_TOTAL_ITEMS_IN_LIBRARY;
  payload: number;
}

interface SetTotalItemsOnPageAction {
  type: ActionTypes.SET_TOTAL_ITEMS_ON_PAGE;
  payload: number;
}

interface SetUrlTextValueAction {
  type: ActionTypes.SET_URL_TEXT_VALUE;
  payload: string;
}

interface SetUrlCategorieValueAction {
  type: ActionTypes.SET_URL_CATEGORIE_VALUE;
  payload: string;
}

interface SetUrlSortValueAction {
  type: ActionTypes.SET_URL_SORT_VALUE;
  payload: string;
}

export type Action =
  | GetBooksAction
  | DownloadMoreBooksAction
  | LoadingAction
  | NotFoundAction
  | AddActiveBookAction
  | SetTotalItemsInLibraryAction
  | SetTotalItemsOnPageAction
  | SetUrlCategorieValueAction
  | SetUrlTextValueAction
  | SetUrlSortValueAction
  | BadRequestAction;
