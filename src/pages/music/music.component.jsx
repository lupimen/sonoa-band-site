import React from 'react';
import { Route } from 'react-router-dom';
import './music.styles.scss';

const MusicPage = () => (
    <div className='music-page'>
    
    <button className='music-button' onClick={(e) => {
        e.preventDefault();
        window.open('https://sonoa-music-player.netlify.app/','_blank');
        }}>
        MUSIC PLAYER
    </button>

    </div>
    
);

export default MusicPage;