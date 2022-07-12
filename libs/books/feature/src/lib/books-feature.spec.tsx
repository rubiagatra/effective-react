import { render, waitFor } from '@testing-library/react';

import BooksFeature from './books-feature';

describe('BooksFeature', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<BooksFeature />);
    await waitFor(() => expect(baseElement).toBeTruthy());
  });
});
