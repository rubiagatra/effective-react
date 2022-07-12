import { render } from '@testing-library/react';

import BooksFeature from './books-feature';

describe('BooksFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BooksFeature />);
    expect(baseElement).toBeTruthy();
  });
});
