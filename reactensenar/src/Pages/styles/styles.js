// import React from 'react';
import  styled  from 'styled-components'

const HeaderStyled = styled.header`
    display: flex;
    justify-content:space-between;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
    background-color:#EDEDED;
`

const UlStyled = styled.ul`
    padding:0;
    margin:0;
    display: flex;
    align-items: center;
`

const LiStyled = styled.li`
    list-style-type: none;
    display: inline-block;
    padding-left: 20px;
`
const H2HomeStyled = styled.h2`
    font-size: 45px;
    color: black;
`

const InputHomeStyled = {
    width: '175px',
    padding: '10px',
    marginBottom: '10px'
}

const FooterStyled = styled.footer`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export {HeaderStyled, UlStyled, LiStyled, H2HomeStyled, InputHomeStyled, FooterStyled};