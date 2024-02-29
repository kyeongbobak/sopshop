import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

    /* 사용자 정의 속성 */
    :root{
     font-size: 10px;

    --main-color : #D5BEB1;
    --gray-color : #C4C4C4
    --white-color : #fff

    --box-gray-color : #F2F2F2;
    --box-black-color : #434343;
   
    --line-black-color : #767676;

    --font-min-size : 1.2rem 
    --font-lg-size : 1.6rem
    --font-md-size : 1.4rem
    --font-sm-size : 1.8rem
    --font-max-size : 2.4rem
    --font-extra-size : 3.6rem

    --font-bold : 500; 
    --font-medium : 400;
    --font-regular : 300;
  }


  body,p{
    margin: unset;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  body{
    font-family: 'SpoqaHanSansNeo-Regular';
  }


  img{
    vertical-align: top;
  }

  a{
    text-decoration: none;
    color: initial;
  }

  button{
    all:  unset;
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
