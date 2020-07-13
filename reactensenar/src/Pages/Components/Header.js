import React from 'react';
import {HeaderStyled, LiStyled, UlStyled} from '../styles/styles';


const Header = () => {
    return (
        <HeaderStyled>
            <div style={{ width: '300px' }}>
                <img style={{width:'100%'}} src='/logo-chico.png' alt='logo' />

            </div>
            
                <UlStyled>
                    <LiStyled>Home</LiStyled>
                    <LiStyled>¿Quiénes Somos?</LiStyled>
                    <LiStyled>Institucional</LiStyled>
                    <LiStyled><i className="fas fa-search"></i></LiStyled>
                </UlStyled>
            
        </HeaderStyled>

    )
}

export default Header;