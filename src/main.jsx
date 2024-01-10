import React from "react";
import  ReactDOM  from "react-dom/client";
//import { FirstApp } from "./FirstApp";
import { CounterApp } from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <CounterApp value={123}/>
    </React.StrictMode>
);

// <FirstApp title = "I Am Frank Perez" subTitle = {123} ></FirstApp>