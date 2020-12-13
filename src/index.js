import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { SWRConfig } from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res);

ReactDOM.render(
    <React.StrictMode>
        <SWRConfig
            value={{
                refreshInterval: 5000,
                fetcher
            }}
        >
            <App />
        </SWRConfig>
    </React.StrictMode>,
    document.getElementById('root')
);
