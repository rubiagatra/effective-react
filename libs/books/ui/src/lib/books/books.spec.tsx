import { render } from '@testing-library/react';

import Books from './books';

describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Books
        books={[
          {
            id: 1,
            title: 'The Picture of Dorian Gray',
            author: 'Oscar Wilde',
            rating: 3,
            price: 9.99,
          },
        ]}
        onAdd={() => alert('hello')}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
