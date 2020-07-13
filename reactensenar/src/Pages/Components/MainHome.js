import React from 'react';
import {H2HomeStyled, InputHomeStyled} from '../styles/styles'

const MainHome = () =>{
    return (
        <div style={{
            width:'100%',
            maxWidth:'1300px',
            margin:'0 auto',
            marginBottom: '68px'
        }} >
            <div style={{
                width: '40%',
                maxWidth: '40%',
            }} >
                <H2HomeStyled>Encontra la clase particular ideal para vos.</H2HomeStyled>
                <h3>Con nuestro sistema de inteligencia artificial, vamos a hacer el match perfecto para que tengas al profesor ideal, en una clase ideal, y que saques el maximo provecho de tu clase.</h3>
                <form>
                    <input style={InputHomeStyled} name='email' placeholder='Email'/><br/>
                    <input style={InputHomeStyled} name='password' placeholder='Contraseña' /><br/>
                    <button style={{
                        width: '175px',
                        padding: '10px',
                    }}>Ingresar</button>
                </form>            
            </div>
        </div>
    )
}

export default MainHome;