import React from 'react';
import './home.styles.scss';
import BannerPhoto from '../../assets/sonoa-sitting.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className='home-page'>
        
        <div className='banner-photo-container'>
            <img className='banner-photo' src={BannerPhoto} alt={'Banner Photo'}/>
            <Link className='button' to='/music'>
                MUSIC PLAYER
            </Link>
        </div>
       

        <div className='home-page-body'>
            
            <div className='Gallery-1'>
                <img src={require('../../assets/images/Anthony.jpeg').default} height={200} width={200}/>
                <img src={require('../../assets/images/Chris-distant.jpeg').default} height={200} width={200}/>
                <img src={require('../../assets/images/Gabe-Anthony.jpeg').default} height={200} width={200}/>
                <img src={require('../../assets/images/Gabe-Chris.jpeg').default} height={200} width={200}/>
            </div>

            <div className='Gallery-2'> 
                <img src={require('../../assets/images/Gabe-Luis.jpeg').default} height={200} width={200}/>
                <img src={require('../../assets/images/Gabe.jpeg').default} height={200} width={200}/>
                <img src={require('../../assets/images/Luis-purple.jpeg').default} height={200} width={200}/>
                <img src={require('../../assets/images/Luis.jpeg').default} height={200} width={200}/>
            </div>

            <div className='body-text-container'>
                Sonoa is a tree with deep roots, 
                planted at the intersection of alternative 
                rock and introspective chill-core. 
                Through meditative lyrics and melodic riffage, 
                may the Sonoa tree extend its branches to you, 
                and nurture all those who feel lost and misunderstood.
                <br/>
            </div>

        </div>

    </div>
    
    
    
);

export default HomePage;
