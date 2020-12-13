import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import austronavtImg from '../../styles/austonavt.jpg';
import useSWR from 'swr';

import './Sidebar.scss';

const Sidebar = () => {
    const { data, error } = useSWR('http://api.open-notify.org/astros.json');

    if (!data) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const {
        data: { people: astronauts }
    } = data;

    return (
        <div className="sidebar">
            {astronauts.map(({ name }) => {
                const id = uuidv4();
                return (
                    <div className="astronaut" key={id}>
                        <div className="astronaut__wrapper-img">
                            <img
                                src={austronavtImg}
                                alt={name}
                                className="astronaut__img"
                            />
                        </div>
                        <span className="astronaut-name">{name}</span>
                    </div>
                );
            })}

            <span className="astronaut-total">
                Total astronauts: {astronauts.length}
            </span>
        </div>
    );
};

export default Sidebar;
