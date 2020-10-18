import React from 'react';
import MyMusic from '../../Music/Treck/Lucky Luke - Cooler Than Me.mp3';

const Music = (props) => {
        return (
                <div>
                        <audio controls>
                                <source src={MyMusic} type="audio/mp3" />
                    Your browser does not support the audio element.
                        </audio>
                </div>
        );
}

export default Music;
