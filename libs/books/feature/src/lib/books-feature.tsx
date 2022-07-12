import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BooksFeatureProps {}

const StyledBooksFeature = styled.div`
  color: pink;
`;

export function BooksFeature(props: BooksFeatureProps) {
  return (
    <StyledBooksFeature>
      <h1>Welcome to BooksFeature!</h1>
    </StyledBooksFeature>
  );
}

export default BooksFeature;
