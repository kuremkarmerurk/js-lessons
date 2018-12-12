import React, { Component } from 'react';
import styled from 'styled-components';
import slide from './img/bg_img.png';
import './App.css';

class Content extends Component {
    render() {
        let menuItems = ['Главная','Каталог','Услуги','Доставка','О компании','Контакты'], menuElements=[];        
        const Contentdiv = styled.div`
                position: relative;
                width: 100%;
                margin: 0 auto;                
                `,
              Maindiv = styled.div`
                width: 80%;
                max-width: 940px;
                margin: 0 auto;
                `,
              Menu = styled.div`
                height: 60px;
                width: 100%;
                max-width: 940px;
                margin: 0 auto;
                background-color: #ffcc00;  
                `,
              Menulist = styled.ul`
                display: flex;
                justify-content: space-between;
                list-style: none;
                width: 100%;
                margin: 0; 
                height: 100%;
                align-items: center;
                padding: 0 68px;
                color: #000000;
                font-family: "Gotham Pro";
                font-size: 14px;
                font-weight: 500; 
                `,
              Menuli = styled.li`
                height: 100%;
                `,
              Menulinks = styled.a`
                display: flex;
                height: 100%;
                align-items: center;
                text-decoration: none;
                color: #000;
                `,
              SliderDiv = styled.div`
                width: 100%;
                position: absolute;
                top: 30px;
                z-index: -1;
                margin: 0 auto;
                background-color: #484646; 
                `,
              Maintitle = styled.h1`
                color: #ffffff;
                font-family: "Gotham Pro";
                padding-top: 140px;
                font-size: 36px;
                font-weight: 700;
                text-transform: uppercase; 
                `,  
              Mainnote = styled.div`
                width: 240px;
                height: 54px;
                margin-top: 40px;
                color: #ffffff;
                font-family: "Gotham Pro";
                font-size: 14px;
                font-weight: 300;
                line-height: 22px;
               `,
              Mainbuttonwrapper = styled.div`
                width: 408px;
                margin-top: 65px;
                display: flex;
                align-items: center;
                color: #ffffff;
                font-family: "Gotham Pro";
                font-size: 12px;
                font-weight: 500;
                line-height: 22px;
               `,
              Mainbutton = styled.button`
                width: 210px;
                background-color: #ffd200;
                border: none;
                padding: 18px 30px;
                margin-right: 31px;
                color: #0d0d0d;
                font-family: "Gotham Pro";
                font-size: 12px;
                font-weight: 500;
                line-height: 100%;
               `,
               Maina = styled.a`
                margin-left: 10px;
                border: none;
                color: #fff;
                font-family: "Gotham Pro";
                font-size: 12px;
                font-weight: 500;
                line-height: 100%;
              `; 
        menuItems.forEach((element,index)=>{
            menuElements.push(<Menuli className={'li-' + index}><Menulinks className={'a-' + index} href="#">{element}</Menulinks></Menuli>);
        });              
        return (
        <Contentdiv>
            <Maindiv className="menu">
                <Menu>
                    <Menulist>
                        
                        {menuElements}

                    </Menulist>
                </Menu>
                <Maintitle>быстрая Доставка</Maintitle>
                <Mainnote>
                    бетона, щебня, песка
                    и других нерудных материалов
                    по Москве и Московской области
                </Mainnote>
                <Mainbuttonwrapper>
                    <Mainbutton>
                        Подробнее о доставке
                    </Mainbutton>
                    <p>
                        или <Maina href="#"> перейти в каталог </Maina>
                    </p>
                </Mainbuttonwrapper>
            </Maindiv>            
            <SliderDiv>
                <img src={slide} className="slide" alt="slide" />
            </SliderDiv>
        </Contentdiv>
      );
    }
  }
  
export default Content;