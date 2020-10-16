import React from "react";
import './features.css';
import RellaxWrapper from 'react-rellax-wrapper';

const rocketImages = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship'

}

const Features = ({name, height, diameter, mass, payload_weights: payloadWeights}) => {

    return(
        <section className="features">
            <h2 className="features-title">
                {name} <br/>Overview
            </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
                    </caption>
                    <thead>
                    <tr>
                        <td className="table-column">HEIGHT</td>
                        <td className="table-column">{height.meters} m / {height.feet} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">{diameter.meters} m / 5.5 ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">MASS</td>
                        <td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
                    </tr>

                    {payloadWeights.map(item => (
                        <tr key={item.id}>
                            <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                            <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                        </tr>
                    ))}
                    </thead>
                </table>
                <RellaxWrapper speed={14}>
                    <img
                        src={`img/${rocketImages[name]}.png`}
                        alt="rocket"
                        className="rocket"
                    />
                </RellaxWrapper>

                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX
                        during
                        2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel
                        launch
                        vehicle to go into orbit around the Earth.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Features;