import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { downloadMoreBooks } from '../store/FunctionsForRedux';
import { addActionForActiveBook } from '../store/reducer';
import Button from '../UI/Button';
import { cutLongText } from '../util';
import { useTypedSelector } from '../hooks/useTypedSelector';

const BooksList: React.FunctionComponent = () => {
  const { items, totalItemsInlibrary, totalOnPage, additionalLoading, badRequest } = useTypedSelector((state) => state);
  const state = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className='books'>
      {totalItemsInlibrary > 0 ? <p className='books__total-result'>Found {totalItemsInlibrary} items</p> : null}
      <ul className='books__list'>
        {items.length > 0
          ? items.map((book) => (
              <li className='books__item' key={book.id}>
                <Link
                  className='books__link'
                  to='/details'
                  onClick={() => {
                    dispatch(addActionForActiveBook(book));
                  }}
                >
                  {book.volumeInfo.imageLinks ? (
                    <img className='books__pic' src={book.volumeInfo.imageLinks.smallThumbnail} alt='Title.' width='128' height='204' />
                  ) : null}
                  {book.volumeInfo.title ? <h1 className='books__title'>{cutLongText(book.volumeInfo.title, 38)}</h1> : null}
                  {book.volumeInfo.categories ? <p className='books__categorie'>Categories:{cutLongText(book.volumeInfo.categories, 60)}</p> : null}
                  {book.volumeInfo.authors ? <p className='books__author'>Author:{cutLongText(book.volumeInfo.authors[0], 60)}</p> : null}
                </Link>
              </li>
            ))
          : null}
      </ul>
      {totalItemsInlibrary > totalOnPage && additionalLoading === false ? (
        <Button
          className='button button--download-more'
          onClick={() => {
            dispatch(downloadMoreBooks(state));
          }}
        >
          LOAD MORE
        </Button>
      ) : null}
      {additionalLoading === true ? <p className='main-search__no-result main-search__no-result--loading'>Loading...</p> : null}
      {badRequest !== '' ? <p className='main-search__no-result main-search__no-result--bad-request'>{badRequest}</p> : null}
    </div>
  );
};

export default BooksList;
