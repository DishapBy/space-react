import React, {useEffect, useState} from 'react';
import './calendar.css';
import Main from "../Main/Main";
import FetchData from "../../service/FetchData";
import {Link} from 'react-router-dom';

const Calendar = () => {

    const fetchData = new FetchData();

    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData.getLauncher()
            .then(launches => setData(launches))
    }, [])

    console.log(data)

    return (
        <React.Fragment>
            <Main/>
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        {
                            data.map((item) =>
                                <li className="calendar-item">
                                    <article className="launches">
                                        <div className="launches-image">
                                            <img src={item.links.patch.small} alt=""/>
                                        </div>
                                        <div className="launches-content">
                                            <h2 className="launches-title">{item.name}</h2>
                                            <Link to="/details" className="button launches-details">Подробнее</Link>
                                        </div>
                                    </article>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Calendar;