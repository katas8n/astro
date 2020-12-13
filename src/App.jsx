import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Map from './components/Map/Map';

import './App.scss';

const App = () => {
    const fetcher = url => axios.get(url).then(res => res);
    const { data, error } = useSWR(
        'http://api.open-notify.org/iss-now.json',
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const {
        data: {
            iss_position: { latitude, longitude }
        }
    } = data;

    return (
        <>
            <Header latitude={latitude} longitude={longitude} />
            <div className="app">
                <div className="map-wrapper">
                    <Map latitude={latitude} longitude={longitude} />
                </div>
                <Sidebar />
            </div>
            <Footer />
        </>
    );
};
export default App;
