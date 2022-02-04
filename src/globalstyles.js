import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root{
  /* --main-txt-color: #313131; */
  --main-txt-color: white;
  --header-txt-color: #616161;
  --secondary-txt-color: #919191;
  --main-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}
a {
  color: var(--main-txt-color);;
        text-decoration: none;
        
    }
h1, h2, h3 ,h4 ,h5, h6 {
  /* color: var(--main-txt-color); */
  color: white;
  font-family: 'Poppins', sans-serif; 
}

h2{
  font-size: 4rem;
}

h3{
  font-size: 3rem;
}
`

export default GlobalStyle