import { render } from '@testing-library/react';

import BooksUi from './books-ui';

describe('BooksUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BooksUi />);
    expect(baseElement).toBeTruthy();
  });
});
