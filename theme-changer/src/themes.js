import { createGlobalStyle } from 'styled-components';
export const light = {
  body: '#fff',
  fontColor: '#000',
};
export const dark = {
  body: '#000',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body}
}
`;
