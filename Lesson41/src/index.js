import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import './styles/main.scss';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#app'));
