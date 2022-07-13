import { useEffect, useState } from 'react';

import { getBooks } from '@effective-react/books/data-access';
import { Books } from '@effective-react/books/ui';

export const BooksFeature = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Added ${book.title}`)} />
    </>
  );
};

export default BooksFeature;
