import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './img/icon.png';
import './App.css';



class Header extends Component {
    render() {
        const Headerdiv = styled.div`
                width: 80%;
                display: flex;
                justify-content: space-between;
                max-width: 940px;
                margin: 0 auto;
                padding: 30px 0;                
                `,
              Headerright = styled.div`
                width: 45%;
                margin: 0;                
                display: flex;
                justify-content: flex-end;
                text-align: right;
                `,
              Headerleft = styled.div`
                width: 30%;
                margin: 0;                
                display: flex;
                `,
              Headertitle = styled.h1`
                margin-bottom: 2px;
                color: #292929;
                font-family: "Gotham Pro";
                font-size: 20px;
                font-weight: 700;
                line-height: 22px;
                text-transform: uppercase;
                letter-spacing: 2px;
                `,
              Headersubtitle = styled.p`
                color: #969696;
                font-family: "Gotham Pro";
                font-size: 11px;
                font-weight: 300;
                line-height: 22px;
                `,
              Headertitlewrapper = styled.div`margin-right:31px`,  
              Headerlogo = styled.div`margin-right: 14px;`,
              HeaderButton = styled.button`
                height: 40px;
                border: 2px solid #292929;
                background-color: #fff;
                color: #292929;
                padding: 15px 25px;
                font-family: "Gotham Pro";
                font-size: 12px;
                font-weight: 500;
                line-height: 80%;
                cursor: pointer;
              `;
        return (
        <Headerdiv>
            <Headerleft className="div-left">
                <Headerlogo>
                    <img src={logo} alt="logo" />
                </Headerlogo>
                <Headertitlewrapper>
                    <Headertitle>granit</Headertitle>
                    <Headersubtitle>Доставка нерудных материалов</Headersubtitle>
                </Headertitlewrapper>
            </Headerleft>
            <Headerright>
                <Headertitlewrapper>
                    <Headertitle>8 800 342-13-33</Headertitle>
                    <Headersubtitle>Бесплатный звонок по России</Headersubtitle>
                </Headertitlewrapper>
                <HeaderButton>Обратный звонок</HeaderButton>                
            </Headerright>
        </Headerdiv>
      );
    }
  }
  
  export default Header;