import React from 'react';
import Header from './Components/Header';
import MainHome from './Components/MainHome';
import Footer from './Components/Footer'


const Home = () => {
    return (
        <React.Fragment>
            <div style={{
                backgroundColor: '#EDEDED',
                boxShadow: '3px 0 2px 1px rgba(0, 0, 0, 0.2)',
                position: 'sticky',
                top: '0',
                zIndex:'10'

            }}>
                <Header />  
            </div>
            <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                position:'relative'
            }}>
                <MainHome/>
                <img src='/banner.jpg' alt='banner' style={{
                    width:'60%',
                    maxWidth: '740px',
                    position: 'absolute',
                    top:'0',
                    right:'0'
            }} />
            </div>
            <div style={{ backgroundColor: '#EDEDED' }}>
                <Footer/>
            </div>

        </React.Fragment>



    )
}

export default Home;