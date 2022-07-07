import React from 'react';
import Button from '../UI/Button';
import InputText from '../UI/InputText';
import { useDispatch } from 'react-redux';
import Selector from '../UI/Selector';
import { getBooks } from '../store/FunctionsForRedux';
import { addActionForTextValue, addActionForCategorieValue, addActionForSortValue } from '../store/reducer';
import { useTypedSelector } from '../hooks/useTypedSelector';

const SearchForm: React.FunctionComponent = () => {
  const { textValue, categorieValue, sortValue } = useTypedSelector((state) => state);
  const state = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortingRules = ['relevance', 'newest'];

  return (
    <form className='form'>
      <InputText
        value={textValue}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.code === 'Enter') {
            event.preventDefault();
            dispatch(getBooks(state));
          }
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(addActionForTextValue(event.target.value));
        }}
      ></InputText>
      <Button
        className='button button--search'
        onClick={(): void => {
          dispatch(getBooks(state));
        }}
      >
        FIND
      </Button>
      <Selector
        className='form__select form__select--categories'
        value={categorieValue}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(addActionForCategorieValue(event.target.value));
        }}
        options={categories}
      ></Selector>
      <Selector
        className='form__select form__select--sorting'
        value={sortValue}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(addActionForSortValue(event.target.value));
        }}
        options={sortingRules}
      ></Selector>
    </form>
  );
};

export default SearchForm;
