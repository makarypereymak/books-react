import BooksList from '../components/BooksList';
import SearchForm from '../components/SearchForm';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MainSearch: React.FunctionComponent = () => {
  const { mainLoading, isNotFound, badRequest } = useTypedSelector((state) => state);

  return (
    <div className='main-search'>
      <SearchForm></SearchForm>
      {mainLoading === true ? <p className='main-search__no-result main-search__no-result--loading'>Loading...</p> : null}
      {isNotFound === true ? <p className='main-search__no-result main-search__no-result--not-found'>Not found</p> : null}
      {badRequest !== '' ? <p className='main-search__no-result main-search__no-result--bad-request'>{badRequest}</p> : null}
      {isNotFound === false && mainLoading === false && badRequest === '' ? <BooksList></BooksList> : null}
    </div>
  );
};

export default MainSearch;
