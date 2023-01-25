import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color:#fff;
  background-color: ${({ theme }) => theme.colors.Bg};
  font-family: 'Poppins', sans-serif;
}
a {
  text-decoration: none;
  color:inherit;
}
ul,
li {
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
}
`
export default GlobalStyles
