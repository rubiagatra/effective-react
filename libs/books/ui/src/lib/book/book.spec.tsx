import { render } from '@testing-library/react';

import Book from './book';

describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Book
        book={{
          id: 1,
          title: 'The Picture of Dorian Gray',
          author: 'Oscar Wilde',
          rating: 3,
          price: 9.99,
        }}
        onAdd={() => alert('hello')}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
