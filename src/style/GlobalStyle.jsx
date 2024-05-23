import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

    /* 사용자 정의 속성 */
    :root{
     font-size: 10px;

    --main-color : #D5BEB1;
    --gray-color : #C4C4C4;
    --white-color : #fff;
    --black-color : #434343;
    --light-gray-color : #F2F2F2;
    --light-black-color : #767676;
    --dark-gray-color : #9a9a9a;
   
    --font-min-size : 1.2rem; 
    --font-sm-size : 1.4rem;
    --font-md-size : 1.6rem;
    --font-lg-size : 1.8rem;
    --font-max-size : 2.4rem;
    --font-extra-size : 3.6rem;

    --font-light :100;
    --font-bold : 800;
  }


  body,p{
    margin: unset;
  }



  h1,h2,h3{
    padding: unset;
    font-weight: unset;
  }


  img{
    vertical-align: top;
  }

  a{
    text-decoration: none;
    color: initial;
  }

  ul,li{
    padding: unset;
    list-style: none;
  }

  ul,li{
    padding: unset;
    list-style: none;
  }

  button{
    all:  unset;
  }

  input{
    border: unset;
    outline : none;
  }

  select{
    appearance: none;
  }



  .a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
`;

export default GlobalStyle;
