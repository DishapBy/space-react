import React from 'react';
import './main.css';

import earth from '../../video/earth.mp4';
import mars from '../../video/mars.mp4';
import moon from '../../video/moon.mp4';
import space from '../../video/space.mp4';

const video = {
    'Falcon 1': moon,
    'Falcon 9': earth,
    'Falcon Heavy': mars,
    'other': space
}

const Main = (props) => {
    return (
        <section className="main">
            <h1 className="title">
                {props.name || props.rocket}
            </h1>

            {props.rocket && <div className="video-container">
                <video
                    className="video"
                    autoPlay loop muted
                    src={video.hasOwnProperty(props.rocket)
                    ? video[props.rocket]
                    : video.other}
                />
            </div>
            }
        </section>
    )
}

export default Main;