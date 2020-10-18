import React, { useState, useEffect } from 'react';
import './details.css';
import {useHistory} from 'react-router-dom';
import Main from "../Main/Main";
import useLaunches from "../useLaunches/useLaunches";
import YouTube from "react-youtube";

const Details = (props) => {

    const [launch, setLaunch] = useState(null);

    const { getLaunch } = useLaunches();

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id))
    })

    const {id} = props.match.params;
    console.log(launch)

    const history = useHistory();

    if(!launch) return null;

    return (
        <React.Fragment>
            <Main name={launch.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch?.name }/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch?.details}</p>
                        </div>
                    </div>
                    <YouTube className={"details-youtube"} videoId={launch.links.youtube_id}/>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </React.Fragment>
    )
}

export default Details;