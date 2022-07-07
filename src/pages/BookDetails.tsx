import { useTypedSelector } from '../hooks/useTypedSelector';

const BookDetails: React.FunctionComponent = () => {
  const { activeBook } = useTypedSelector((state) => state);

  return (
    <div className='post'>
      {activeBook.volumeInfo.imageLinks ? (
        <img className='post__pic' src={activeBook.volumeInfo.imageLinks.smallThumbnail} alt='Title.' width='128' height='204' />
      ) : null}
      {activeBook.volumeInfo.title ? <h1 className='post__title'>Title:{activeBook.volumeInfo.title}</h1> : null}
      {activeBook.volumeInfo.categories ? <p className='post__categorie'>Categories:{activeBook.volumeInfo.categories}</p> : null}
      {activeBook.volumeInfo.authors ? <p className='post__author'>Author:{activeBook.volumeInfo.authors}</p> : null}
      {activeBook.volumeInfo.description ? <p className='post__description'>Description:{activeBook.volumeInfo.description}</p> : null}
    </div>
  );
};

export default BookDetails;
