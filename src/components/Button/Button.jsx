import React from 'react';
import styled, {css} from 'styled-components';
import ReactDOM from 'react-dom';

const bodyStyle = {
    backgroundColor: '#ddd',
};

const ButtonStyle = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;

    ${(props) => props.LButton && `
        width: 220px;
        height: 68px;
        background-color: #D5BEB1;
        color: #FFF;
        font-size: 24px;
        font-weight: bold;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        /* 마우스 호버 시 배경색 변경 */
        &:hover {
        background-color: red;
    `}

    ${(props) => props.MButton && `
        width: 480px;
        height: 60px;
        background-color: #D5BEB1;
        color: #FFF;
        font-size: 18px;
        font-weight: bold;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
    `}

    ${(props) => props.MsIconButton && `
        width: 168px;
        height: 54px;
        background-color: #434343;
        color: #FFF;
        font-size: 18px;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
    `}

    ${(props) => props.SButton && `
        width: 80px;
        height: 40px;
        background-color: #434343;
        color: #FFF;
        font-size: 16px;
        border: none;
        border-radius: 4px;
    `}

    ${(props) => props.TabActivButton && `
        width: 320px;
        height: 60px;
        background-color: #FFF;
        color: #434343;
        font-size: 18px;
        border: none;
        border-bottom: 5px solid;
    `}

    ${(props) => props.TebMenuOff && `
        width: 250px;
        height: 50px;
        background-color: #FFF;
        color: #434343;
        font-size: 16px;
        border: none;
        border-radius: 4px;
    `}
`;

function Button() {
    return (
        <div>
            <ButtonStyle TebMenuOff>버튼</ButtonStyle>
        </div>
    );
};

Object.assign(document.body.style, bodyStyle);

export default Button;