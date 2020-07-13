import React from 'react';
import {FooterStyled, InputHomeStyled} from '../styles/styles'

const Footer = () => {
    return (
        <FooterStyled>
            <img src='/logo.png' alt='logo' style={{ width: '300px' }}/>
            <div>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <div>
                <form>
                    <h4 style={{
                        margin:'5px',
                        fontSize: '15px'
                    }}>Suscribite a nuestro newsletter</h4>
                    <input style={InputHomeStyled} placeholder='Email' />
                    <button style={{
                        width: '175px',
                        padding: '10px',
                    }}>Suscribite!</button>
                </form>
            </div>
        </FooterStyled>
    )
}

export default Footer;