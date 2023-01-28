import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
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
