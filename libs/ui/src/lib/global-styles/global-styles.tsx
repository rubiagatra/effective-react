import { createGlobalStyle } from 'styled-components';

/* eslint-disable-next-line */
export interface GlobalStylesProps {}

export const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		font-size: 16px;
		font-family: sans-serif;
	}

	* {
		box-sizing: border-box;	
	}
`;

export default GlobalStyles;
