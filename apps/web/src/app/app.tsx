import { Link, Navigate, Route, Routes } from 'react-router-dom';

// importing the UI library into our App
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@effective-react/ui';

import { BooksFeature } from '@effective-react/books/feature';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/" element={<Navigate to="/books" />} />
        </Routes>
      </Main>
    </>
  );
};
